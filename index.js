window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  let wOffset = window.innerWidth / 15;
  let hOffset = window.innerHeight / 10;
  let w = window.innerWidth - wOffset;
  let h = window.innerHeight - hOffset

  function onClickDetails(e) {
    setTimeout(createDetailsElement, 700);
    e.target.onclick = null;
    if (e.target.parentElement) e.target.parentElement.onclick = null;
  }

  function createDetailsElement() {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.innerText = "am i in the right place?";
    details.appendChild(summary);
    details.innerHTML += "keep clicking";
    details.onclick = onClickDetails;
    details.style.top = `${getRandomInt(wOffset, h)}px`;
    details.style.left = `${getRandomInt(hOffset, w)}px`;
    document.body.appendChild(details);
  }

  createDetailsElement();
});