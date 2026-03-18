import { useState } from 'react';
import { sendContactEmail } from './emailService';

export const useContactForm = () => {
  const [status, setStatus] = useState('IDLE'); // IDLE, LOADING, SUCCESS, ERROR
  const [errorMessage, setErrorMessage] = useState('');

  const submitForm = async (formData) => {
    setStatus('LOADING');
    setErrorMessage('');

    try {
      // Input validation (Simple)
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Por favor completa todos los campos requeridos.');
      }

      // Call isolated service
      await sendContactEmail(formData);

      setStatus('SUCCESS');
      // Reset form usually handled by component level state if desired
    } catch (error) {
      // Structured logging
      console.error('[useContactForm] EXCEPTION CAPTURED:', {
        message: error.message,
        timestamp: new Date().toISOString()
      });

      setStatus('ERROR');
      setErrorMessage(error.message || 'Ocurrió un error inesperado al enviar el formulario.');
    }
  };

  const resetStatus = () => {
    setStatus('IDLE');
    setErrorMessage('');
  };

  return {
    status,
    errorMessage,
    submitForm,
    resetStatus,
    isLoading: status === 'LOADING',
    isSuccess: status === 'SUCCESS',
    isError: status === 'ERROR'
  };
};
