function getStoredDreams() {
    const stored = localStorage.getItem("dreams");
    return stored ? JSON.parse(stored) : [];
}

function renderDreams(filterDate = "") {
    const list = document.getElementById("dreamList");
    if (!list) return;

    list.innerHTML = "";

    let dreams = getStoredDreams();

    // Filter by date if one is selected
    if (filterDate) {
        dreams = dreams.filter(d => d.date === filterDate);
    }

    // Sort dreams by date (newest first)
    dreams.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (dreams.length === 0) {
        list.innerHTML = "<li>No dreams found for this date.</li>";
        return;
    }

    dreams.forEach(dream => {
        const li = document.createElement("li");
        li.classList.add("dream-item");
        li.innerHTML = `
            <strong>${dream.title}</strong><br>
            <small>${new Date(dream.date).toLocaleDateString()}</small>
            <p>${dream.description}</p>
        `;
        list.appendChild(li);
    });
}

function filterDreams() {
    const dateInput = document.getElementById("filterDate");
    if (dateInput) {
        renderDreams(dateInput.value);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderDreams();

    // Only attach form handler if the form exists
    const form = document.getElementById("addDreamForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const title = document.getElementById("title").value;
            const date = document.getElementById("date").value;
            const description = document.getElementById("description").value;

            // Basic validation
            if (!title || !description || !date) {
                alert("Please fill out all fields!");
                return;
            }

            const newDream = { title, date, description };

            const dreams = getStoredDreams();
            dreams.push(newDream);
            localStorage.setItem("dreams", JSON.stringify(dreams));

            // Show user feedback
            const feedbackMessage = document.getElementById("feedbackMessage");
            if (feedbackMessage) {
                feedbackMessage.innerHTML = "Dream saved successfully!";
                feedbackMessage.style.color = "green";
                setTimeout(() => feedbackMessage.innerHTML = "", 3000); // Clear message after 3 seconds
            }

            form.reset();
            renderDreams(); // Re-render the dreams list to show the new one
        });
    }
});

  