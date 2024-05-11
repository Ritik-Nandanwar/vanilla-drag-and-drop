const imagesSec = document.querySelector("#images-section");
document.querySelectorAll(".draggable").forEach((item) =>
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
    console.log(e.target.id);
  })
);
document.querySelectorAll(".dropzone").forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("hovered");
  });

  zone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    zone.classList.remove("hovered");
    console.log(e.dataTransfer.getData("text"));
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("hovered");
    // zone.appendChild(e.dataTransfer.getData("text"));
    console.log("dropped" + e.dataTransfer.getData("text"));
    const draggableEle = document.getElementById(
      e.dataTransfer.getData("text")
    );
    zone.appendChild(draggableEle);
  });
});

// document.querySelector(".images-section").forEach((zone) => {
var imgSec = document.querySelector(".images-section");
imgSec.addEventListener("dragover", (e) => {
  e.preventDefault();
  imgSec.classList.add("hovered");
  console.log("hovering " + e.dataTransfer.getData("text"));
  // });
});
imgSec.addEventListener("dragleave", (e) => {
  e.preventDefault();
  imgSec.classList.remove("hovered");
  console.log(e.dataTransfer.getData("text"));
});

imgSec.addEventListener("drop", (e) => {
  e.preventDefault();
  imgSec.classList.remove("hovered");
  // zone.appendChild(e.dataTransfer.getData("text"));
  console.log("dropped" + e.dataTransfer.getData("text"));
  const draggableEle = document.getElementById(e.dataTransfer.getData("text"));
  imgSec.appendChild(draggableEle);
});
