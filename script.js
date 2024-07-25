function showSubject() {
    const subjects = document.querySelectorAll('.subject');
    subjects.forEach(subject => subject.style.display = 'none');

    const selectedSubject = document.getElementById('subjectDropdown').value;
    if (selectedSubject) {
        document.getElementById(selectedSubject).style.display = 'block';
    }
}

function playVideo() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/989727117?h=69a9d2ca4a" width="640" height="360" frameborder="0" allowfullscreen></iframe>
    `;
}
// Add this to script.js
async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;

    // Display user message
    const messages = document.getElementById('messages');
    const userMessage = document.createElement('div');
    userMessage.textContent = userInput;
    userMessage.className = 'user-message';
    messages.appendChild(userMessage);

    // Send user message to the backend
    const response = await fetch('/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();

    // Display chatbot response
    const botMessage = document.createElement('div');
    botMessage.textContent = data.response;
    botMessage.className = 'bot-message';
    messages.appendChild(botMessage);

    document.getElementById('userInput').value = '';
    messages.scrollTop = messages.scrollHeight;
}
