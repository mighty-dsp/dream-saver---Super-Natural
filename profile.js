document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const profilePictureFile = document.getElementById('profilePicture').files[0];

    // Save profile data to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    if (profilePictureFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('profilePicture', e.target.result);
            updateProfileDisplay(username, email, e.target.result);
        };
        reader.readAsDataURL(profilePictureFile);
    } else {
        updateProfileDisplay(username, email, null);
    }

    document.getElementById('profileForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const profilePicture = localStorage.getItem('profilePicture');

    if (username || email || profilePicture) {
        updateProfileDisplay(username, email, profilePicture);
    }
});

function updateProfileDisplay(username, email, profilePicture) {
    document.getElementById('displayUsername').textContent = `Username: ${username}`;
    document.getElementById('displayEmail').textContent = `Email: ${email}`;
    const displayProfilePicture = document.getElementById('displayProfilePicture');
    if (profilePicture) {
        displayProfilePicture.src = profilePicture;
        displayProfilePicture.style.display = 'block';
    } else {
        displayProfilePicture.style.display = 'none';
    }
}