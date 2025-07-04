// frontend/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const testBackendButton = document.getElementById('testBackend');
    const backendResponseParagraph = document.getElementById('backendResponse');

    testBackendButton.addEventListener('click', async () => {
        try {
            // Fetch data from your backend
            const response = await fetch('http://localhost:5000/');
            const text = await response.text(); // Get response as text

            backendResponseParagraph.textContent = `Backend says: "${text}"`;
        } catch (error) {
            backendResponseParagraph.textContent = `Error connecting to backend: ${error.message}`;
            console.error('Error fetching from backend:', error);
        }
    });
});