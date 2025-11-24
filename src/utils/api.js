/**
 * API Utility - Authenticated API calls with Clerk JWT tokens
 * 
 * This utility provides helper functions for making authenticated API calls
 * to the backend with Bearer tokens from Clerk.
 */

/**
 * Make an authenticated fetch request with Clerk JWT token
 * @param {string} url - The API endpoint URL
 * @param {Object} options - Fetch options (method, body, headers, etc.)
 * @param {Function} getToken - Clerk's getToken function from useAuth hook
 * @returns {Promise<Response>} - The fetch response
 */
export async function authenticatedFetch(url, options = {}, getToken) {
  // Get the JWT token from Clerk
  const token = await getToken();
  
  console.log('Token obtained:', token ? `${token.substring(0, 20)}...` : 'NO TOKEN');
  
  // Merge headers, adding Authorization if token exists
  const headers = {
    ...options.headers,
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else {
    console.warn('No authentication token available');
  }
  
  console.log('Request headers:', headers);
  
  // Make the fetch request with the token
  return fetch(url, {
    ...options,
    headers,
  });
}

/**
 * Upload a file to the backend with authentication
 * @param {File} file - The file to upload
 * @param {string} endpoint - The API endpoint (e.g., '/workflow/demucs_separate')
 * @param {Function} getToken - Clerk's getToken function from useAuth hook
 * @param {string} baseUrl - Base URL for the API (default: '/api')
 * @returns {Promise<Object>} - The JSON response from the server
 */
export async function uploadFileAuthenticated(file, endpoint, getToken, baseUrl = '/api') {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await authenticatedFetch(
    `${baseUrl}${endpoint}`,
    {
      method: 'POST',
      body: formData,
    },
    getToken
  );
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Upload failed: ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Fetch the list of user workflows from the backend
 * @param {string} baseUrl - Base URL for the API
 * @param {Function} getToken - Clerk's getToken function from useAuth hook
 * @returns {Promise<Array>} - Array of workflow objects
 */
export async function fetchWorkflowList(baseUrl, getToken) {
  const response = await authenticatedFetch(
    `${baseUrl}/workflow/list`,
    {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
    },
    getToken
  );
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Failed to fetch workflows: ${response.statusText}`);
  }
  
  const data = await response.json();
  console.log('API Response from /workflow/list:', data);
  console.log('Is array?', Array.isArray(data));
  console.log('Type:', typeof data);
  return data;
}

/**
 * Fetch detailed status for a specific workflow
 * @param {string} baseUrl - Base URL for the API
 * @param {string} workflowId - The workflow ID
 * @param {Function} getToken - Clerk's getToken function from useAuth hook
 * @returns {Promise<Object>} - Workflow status object
 */
export async function fetchWorkflowStatus(baseUrl, workflowId, getToken) {
  const response = await authenticatedFetch(
    `${baseUrl}/workflow/status/${workflowId}`,
    {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
    },
    getToken
  );
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Failed to fetch workflow status: ${response.statusText}`);
  }
  
  return response.json();
}
