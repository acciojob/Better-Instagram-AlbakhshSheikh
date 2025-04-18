document.addEventListener("DOMContentLoaded", () => {
  let draggedElement = null;

  document.querySelectorAll(".image").forEach(div => {
    div.addEventListener("dragstart", (e) => {
      draggedElement = e.target;
      e.dataTransfer.setData("text/plain", e.target.id);
    });

    div.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    div.addEventListener("drop", (e) => {
      e.preventDefault();
      if (draggedElement && draggedElement !== e.target) {
        const draggedStyle = window.getComputedStyle(draggedElement);
        const targetStyle = window.getComputedStyle(e.target);

        const draggedBg = draggedStyle.backgroundImage;
        const targetBg = targetStyle.backgroundImage;

        draggedElement.style.backgroundImage = targetBg;
        e.target.style.backgroundImage = draggedBg;

        const tempText = draggedElement.innerText;
        draggedElement.innerText = e.target.innerText;
        e.target.innerText = tempText;
      }
    });
  });
});
