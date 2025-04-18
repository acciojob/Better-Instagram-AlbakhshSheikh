let draggedElement = null;

document.querySelectorAll(".image").forEach(div => {
  // When drag starts
  div.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  // When over a droppable target
  div.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary to allow drop
  });

  // When dropped on another image
  div.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.target) {
      // Swap background images
      const draggedStyle = window.getComputedStyle(draggedElement);
      const targetStyle = window.getComputedStyle(e.target);

      const draggedBg = draggedStyle.backgroundImage;
      const targetBg = targetStyle.backgroundImage;

      draggedElement.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;

      // Optionally swap inner text too (Image 1, Image 2 etc.)
      const tempText = draggedElement.innerText;
      draggedElement.innerText = e.target.innerText;
      e.target.innerText = tempText;
    }
  });
});
