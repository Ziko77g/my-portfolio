export interface ContactPayload {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  mode: 'live' | 'preview';
  error?: string;
}

/**
 * Service to handle freelance project brief submissions.
 * Supports configurable webhook / REST API endpoint via VITE_CONTACT_ENDPOINT.
 * If no endpoint is configured in the current environment, operates in preview mode.
 */
export async function submitContactInquiry(payload: ContactPayload): Promise<ContactSubmissionResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      return { success: true, mode: 'live' };
    } catch (err) {
      console.error('Failed to send contact inquiry to endpoint:', err);
      return {
        success: false,
        mode: 'live',
        error: err instanceof Error ? err.message : 'Unknown error',
      };
    }
  }

  // Preview Mode: No external endpoint is configured
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { success: true, mode: 'preview' };
}
