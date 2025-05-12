let editMode = false;
let editEntry = null;

document.getElementById('dreamForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];
    const audioFile = document.getElementById('audio').files[0];

    if (editMode) {
        // Update existing entry
        editEntry.querySelector('h3').textContent = title;
        editEntry.querySelector('.entry-date').textContent = `Date: ${date}`;
        editEntry.querySelector('.entry-description').textContent = description;

        if (imageFile) {
            const entryImage = editEntry.querySelector('img');
            if (entryImage) {
                entryImage.src = URL.createObjectURL(imageFile);
            } else {
                const newImage = document.createElement('img');
                newImage.src = URL.createObjectURL(imageFile);
                newImage.alt = title;
                editEntry.appendChild(newImage);
            }
        }

        if (audioFile) {
            const entryAudio = editEntry.querySelector('audio');
            if (entryAudio) {
                entryAudio.src = URL.createObjectURL(audioFile);
            } else {
                const newAudio = document.createElement('audio');
                newAudio.controls = true;
                newAudio.src = URL.createObjectURL(audioFile);
                editEntry.appendChild(newAudio);
            }
        }

        editMode = false;
        editEntry = null;
    } else {
        // Add new entry
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        const entryTitle = document.createElement('h3');
        entryTitle.textContent = title;
        entryDiv.appendChild(entryTitle);

        const entryDate = document.createElement('p');
        entryDate.classList.add('entry-date');
        entryDate.textContent = `Date: ${date}`;
        entryDiv.appendChild(entryDate);

        const entryDescription = document.createElement('p');
        entryDescription.classList.add('entry-description');
        entryDescription.textContent = description;
        entryDiv.appendChild(entryDescription);

        if (imageFile) {
            const entryImage = document.createElement('img');
            entryImage.src = URL.createObjectURL(imageFile);
            entryImage.alt = title;
            entryDiv.appendChild(entryImage);
        }

        if (audioFile) {
            const entryAudio = document.createElement('audio');
            entryAudio.controls = true;
            entryAudio.src = URL.createObjectURL(audioFile);
            entryDiv.appendChild(entryAudio);
        }

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.classList.add('edit');
        editButton.onclick = function() {
            editMode = true;
            editEntry = entryDiv;
            document.getElementById('title').value = title;
            document.getElementById('date').value = date;
            document.getElementById('description').value = description;
        };
        entryDiv.appendChild(editButton);

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete');
        deleteButton.onclick = function() {
            entryDiv.remove();
        };
        entryDiv.appendChild(deleteButton);

        document.getElementById('entries').appendChild(entryDiv);
    }

    // Clear the form
    document.getElementById('dreamForm').reset();
});
document.getElementById("addDreamForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
  
    const newDream = { title, date, description };
  
    const dreams = JSON.parse(localStorage.getItem("dreams")) || [];
    dreams.push(newDream);
    localStorage.setItem("dreams", JSON.stringify(dreams));
  
    alert("Dream saved!");
    this.reset();
  });
  