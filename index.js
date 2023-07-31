window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  let wOffset = window.innerWidth / 20;
  let hOffset = window.innerHeight / 15;
  let w = window.innerWidth - wOffset;
  let h = window.innerHeight - hOffset;
  let count = 1;

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
    details.onclick = onClickDetails;
    if (count % 2 == 0) {
      details.innerHTML += "yes you are";
      details.style.top = `${h/2}px`;
      details.style.left = `${w/2}px`;
    } else {
      details.innerHTML += "keep clicking";
      details.style.top = `${getRandomInt(hOffset, h)}px`;
      details.style.left = `${getRandomInt(wOffset, w)}px`;
    }
    document.body.appendChild(details);
    count++;
  }

  createDetailsElement();
});