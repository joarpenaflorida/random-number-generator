function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const result = document.getElementById("result");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
  var min = 1;
  var max = 100;

  const randomNumber = generateRandomNumber(min, max);

  result.innerText = randomNumber;
});
