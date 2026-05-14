/**
 * Email Service - Isolated Dependency
 * 
 * Handles interaction with external email providers.
 * Implements logging, AbortController timeouts, and reads environment variables.
 */

export const sendContactEmail = async (data) => {
  // 1. Explicit Timeout Implementation (8 Seconds)
  const TIMEOUT_MS = 8000;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  console.log('[EmailService] Attempting to send email. Timeout:', TIMEOUT_MS / 1000, 's');

  try {
    if (!endpoint) {
      throw new Error('Falta configurar VITE_FORMSPREE_ENDPOINT en el entorno de despliegue.');
    }

    console.log('[EmailService] Target Endpoint:', endpoint);

    // Simulate Network Request with Controller Signal
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: controller.signal
    }).catch(err => {
      if (err.name === 'AbortError') {
        throw new Error(`Servicio lento o sin respuesta. Timeout excedido (${TIMEOUT_MS / 1000}s).`);
      }
      throw err;
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status} ${response.statusText}`);
    }

    console.log('[EmailService] SUCCESS: Email sent successfully');
    return { success: true, message: 'Form submitted successfully!' };

  } catch (error) {
    clearTimeout(timeoutId);
    console.error(`[EmailService] EXCEPTION: ${error.message}`);
    // Re-throw so the hook can catch and map to UI Toasts
    throw error;
  }
};
