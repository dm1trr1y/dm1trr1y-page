const avesomeText = document.querySelector(".hero-section-heading-highlight");
const awesomeTextContent = [
  "Front-end Developer",
  "Open Source Enthusiast",
  "Good Team Leader",
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startTextRotation() {
  let index = 0;

  while (true) {
    avesomeText.classList.remove("show");
    avesomeText.classList.add("hide");

    await delay(300); // ждём пока уедет вверх

    avesomeText.textContent = awesomeTextContent[index];

    avesomeText.classList.remove("hide");
    avesomeText.classList.add("show");

    await delay(5000); // показываем 5 секунд

    index = (index + 1) % awesomeTextContent.length;
  }
}

startTextRotation();
