// DOM
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");

// Send Http request
function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = () => {
    callback(JSON.parse(xhr.response));
  };

  xhr.send();
}

// Generate advice
function generateAdvice() {
  const url = "https://api.adviceslip.com/advice";

  request(url, (response) => {
    adviceId.innerHTML = response.slip.id;
    adviceText.innerHTML = response.slip.advice;
  });
}

generateBtn.onclick = generateAdvice;

