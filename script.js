const tagButton = document.createElement("button");
const isiButton = document.createTextNode("CLICK");
tagButton.appendChild(isiButton);

const tagImage = document.createElement("img");
tagImage.setAttribute("src", "/asset/vibingCat.gif");
tagButton.style.padding = "15px 32px";

document.body.appendChild(tagButton);

const audio = new Audio("./asset/Engelwood.mp3");

tagButton.onclick = () => {
  audio.play();
  document.body.appendChild(tagImage);
  document.body.removeChild(tagButton);
  setInterval(() => {
    document.body.style.backgroundColor =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }, 200);
};
