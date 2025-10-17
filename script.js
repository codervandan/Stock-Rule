document.getElementById('calc-btn').addEventListener('click', calculateConsistency);

function calculateConsistency() {
  const largest = parseFloat(document.getElementById('largest').value);
  const total = parseFloat(document.getElementById('total').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(largest) || isNaN(total) || total <= 0) {
    resultDiv.innerHTML = `<span class="fail">Please enter valid numbers.</span>`;
    return;
  }

  const percentage = (largest / total) * 100;
  const passes = percentage <= 35;

  resultDiv.innerHTML = `
    Consistency: <strong>${percentage.toFixed(2)}%</strong><br>
    ${
      passes
        ? `<span class="pass">✅ Passes the 35% rule!</span>`
        : `<span class="fail">❌ Fails the 35% rule.</span>`
    }
  `;
}
