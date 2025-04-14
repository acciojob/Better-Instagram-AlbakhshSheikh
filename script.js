let draggedDiv = null;

document.querySelectorAll(".image").forEach(div => {
    // Drag start
    div.addEventListener("dragstart", (e) => {
        draggedDiv = e.target;
        e.target.classList.add("selected");
    });

    // Drag over
    div.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    // Drop
    div.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedDiv && draggedDiv !== e.target) {
            // Swap background images
            const draggedBg = window.getComputedStyle(draggedDiv).backgroundImage;
            const targetBg = window.getComputedStyle(e.target).backgroundImage;

            draggedDiv.style.backgroundImage = targetBg;
            e.target.style.backgroundImage = draggedBg;

            // Optional: Swap inner text too
            const tempText = draggedDiv.textContent;
            draggedDiv.textContent = e.target.textContent;
            e.target.textContent = tempText;
        }
    });

    // Drag end
    div.addEventListener("dragend", (e) => {
        e.target.classList.remove("selected");
        draggedDiv = null;
    });
});
