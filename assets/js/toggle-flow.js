let menu = document.querySelector(".flow-body .right");
const links = document.querySelectorAll(".hover-this"); //li
const cursor = document.querySelector(".cursor");

// animation circle step
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});

// animation cursor
const animateit = function (e) {
  const anchor = this.querySelector("a");

  if (e.type === "mouseleave") {
    anchor.style.transform = "";
  }
};

const editCursor = (e) => {
  const { clientX: x, clientY: y } = e;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

links.forEach((item) => {
  item.addEventListener("mousemove", animateit);
});

links.forEach((item) => {
  item.addEventListener("mouseleave", animateit);
});

window.addEventListener("mousemove", editCursor);

// const active = document.querySelector(".slick-active");
// let steps = document.querySelectorAll(".step-item");
// steps.forEach((item) => {
//   for (let i = 0; i < links.length; i++) {
//     switch (links[i]) {
//       case value:

//         break;

//       default:
//         break;
//     }
//   }
// });
