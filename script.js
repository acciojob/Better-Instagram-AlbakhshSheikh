document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");

  images.forEach((div) => {
    div.addEventListener("dragstart", (e) => {
      e.target.classList.add("dragging");
      e.dataTransfer.setData("text/plain", e.target.id);
    });

    div.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });

    div.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    div.addEventListener("drop", (e) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(draggedId);

      if (draggedElement && draggedElement !== e.target) {
        const draggedStyle = window.getComputedStyle(draggedElement);
        const targetStyle = window.getComputedStyle(e.target);

        const draggedBg = draggedStyle.backgroundImage;
        const targetBg = targetStyle.backgroundImage;

        draggedElement.style.backgroundImage = targetBg;
        e.target.style.backgroundImage = draggedBg;
      }
    });
  });
});