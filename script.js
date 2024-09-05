document.getElementById("checkButton").addEventListener("click", function () {
  const loadingMessage = document.getElementById("loadingMessage");
  const resultMessage = document.getElementById("resultMessage");

  // Show loading message first
  loadingMessage.textContent = "Connecting to server...";
  resultMessage.textContent = "";

  // Simulate a server delay
  setTimeout(function () {
    loadingMessage.textContent = "";
    resultMessage.textContent = "Result: Period Prediction Complete!";

    // Simulate random colors for the dots
    const colors = ["red", "green"];
    document.getElementById("dot1").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("dot2").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("dot3").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }, 2000); // 2-second delay
});
