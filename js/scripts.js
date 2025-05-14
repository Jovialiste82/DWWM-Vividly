const menuToggleButton = document.querySelector(".menu-toggle");
const dialog = document.querySelector("dialog");
const button1 = document.querySelector(".dialog-nav-links ul li:nth-child(1)");
const button2 = document.querySelector(".dialog-nav-links ul li:nth-child(2)");
const button3 = document.querySelector(".dialog-nav-links ul li:nth-child(3)");

function closeDialog() {
  dialog.style.animation = "translateDialogXout ease-in-out 0.9s forwards";
  setTimeout(() => {
    dialog.close();
    dialog.style.animation = "translateDialogXin ease-in-out 0.9s forwards";
  }, 900);
}

menuToggleButton.addEventListener("click", () => {
  dialog.showModal();
});

button1.addEventListener("click", () => {
  console.log("Will navigate to the Home page");
  closeDialog();
});

button2.addEventListener("click", () => {
  console.log("Will navigate to the Find a professional page");
  closeDialog();
});

button3.addEventListener("click", () => {
  console.log("Will naviagte to the contact page");
  closeDialog();
});
