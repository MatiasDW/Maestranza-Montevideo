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

  console.log('[EmailService] Attempting to send email. Timeout:', TIMEOUT_MS / 1000, 's');

  try {
    // Read variables securely with Vite env
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://api.mock.placeholder';
    const isMock = endpoint.includes('api.mock.placeholder');

    console.log('[EmailService] Target Endpoint:', isMock ? 'MOCK_SANDBOX' : endpoint);

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
