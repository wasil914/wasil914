function showSubject() {
    const subjects = document.querySelectorAll('.subject');
    subjects.forEach(subject => subject.style.display = 'none');

    const selectedSubject = document.getElementById('subjectDropdown').value;
    if (selectedSubject) {
        document.getElementById(selectedSubject).style.display = 'block';
    }
}
