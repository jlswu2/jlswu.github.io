
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/a1.jpg") {
    myImage.setAttribute("src", "images/a2.JPG");
  } else {
    myImage.setAttribute("src", "images/a1.jpg");
  }
});

/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

prompt("Please enter your name.");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });