// DOM
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");

function startLoadingAnimation() {
    generateBtn.style.animationName = "spin";
}

function stopLoadingAnimation() {
    generateBtn.style.animationName = "ssd";
}

// Send Http request
function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        setTimeout(() => {
            callback(JSON.parse(xhr.response));
            stopLoadingAnimation();
            generateBtn.style.display = "block";
            // generateBtn.style.transform = "scaleY(1)";
        }, 1000);
    }
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

  startLoadingAnimation();
}

generateAdvice();
generateBtn.onclick = generateAdvice;

