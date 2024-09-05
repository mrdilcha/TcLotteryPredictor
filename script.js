document.getElementById('prediction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const periodNumber = document.getElementById('period_number').value;

    if (periodNumber.length === 14 && !isNaN(periodNumber)) {
        const connectionStatus = document.getElementById('connection-status');
        const predictionResult = document.getElementById('prediction-result');
        
        // Show "Connecting Server..." message
        connectionStatus.textContent = "Connecting Server...";
        predictionResult.style.display = 'none';
        connectionStatus.style.display = 'block';

        // Wait 2 seconds before showing the result
        setTimeout(function() {
            const number = Math.floor(Math.random() * 10) + 1;
            const color = Math.random() < 0.5 ? 'Red' : 'Green';

            const sizeText = number <= 5 ? 'Small' : 'Big';

            const colorClass = color === 'Red' ? 'red-dot' : 'green-dot';

            const resultText = document.getElementById('result-text');
            const resultDot = document.getElementById('result-dot');

            resultText.textContent = sizeText;
            resultDot.className = 'dot ' + colorClass;

            connectionStatus.style.display = 'none';
            predictionResult.style.display = 'block';
        }, 2000);
    } else {
        alert('Invalid period number. Please enter a 14-digit number.');
    }
});
