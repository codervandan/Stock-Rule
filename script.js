document.getElementById("calcBtn").addEventListener("click", calculateConsistency);

function calculateConsistency() {
  const days = [
    parseFloat(document.getElementById("day1").value) || 0,
    parseFloat(document.getElementById("day2").value) || 0,
    parseFloat(document.getElementById("day3").value) || 0,
    parseFloat(document.getElementById("day4").value) || 0,
    parseFloat(document.getElementById("day5").value) || 0
  ];

  const total = days.reduce((a, b) => a + b, 0);
  const largest = Math.max(...days);
  const consistency = total > 0 ? ((largest / total) * 100).toFixed(2) : 0;

  document.getElementById("total").innerHTML = `Total Profit: $${total.toFixed(2)}`;
  document.getElementById("largest").innerHTML = `Largest Day: $${largest.toFixed(2)}`;
  document.getElementById("consistency").innerHTML = `Consistency: ${consistency}%`;

  const statusEl = document.getElementById("status");

  if (consistency <= 20 && consistency >= 10) {
    statusEl.innerHTML = `<span class="pass">✅ Pass — Within 10%–20%</span>`;
  } else if (consistency > 20) {
    statusEl.innerHTML = `<span class="fail">❌ Fail — Above 20%</span>`;
  } else {
    statusEl.innerHTML = `<span class="fail">⚠️ Too Low — Below 10%</span>`;
  }
}
