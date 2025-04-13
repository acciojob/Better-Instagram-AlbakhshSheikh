//your code here
let draggedDiv = null;

document.querySelectorAll(".image").forEach(div => {
  // Drag start
  div.addEventListener("dragstart", (e) => {
    draggedDiv = e.target;
    e.target.classList.add("selected");
  });

  // Drag over
  div.addEventListener("dragover", (e) => {
    e.preventDefault(); // Needed to allow drop
  });

  // Drop
  div.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedDiv && draggedDiv !== e.target) {
      // Swap background images
      const tempBg = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = tempBg;
    }
  });

  // Drag end (cleanup)
  div.addEventListener("dragend", (e) => {
    e.target.classList.remove("selected");
    draggedDiv = null;
  });
});
