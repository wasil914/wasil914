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
