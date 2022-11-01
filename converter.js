async function triggerConversion() {
  const response = await fetch(
    "https://api.coinbase.com/v2/prices/ETH-USD/spot"
  );
  const data = await response.json();
  const eth = parseInt(data.data.amount);
  const textBox = document.getElementById("eth-input");
  const usdNumber = parseInt(textBox.value);
  const ethAmount = usdNumber / eth;

  const output = `${ethAmount.toFixed(4)} ETH`;
  const outputElement = document.getElementById("calculated-eth-num");
  outputElement.innerHTML = output;
}
const button = document.getElementById("calculate-btn");
button.addEventListener("click", triggerConversion);
