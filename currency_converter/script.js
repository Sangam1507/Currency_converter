const exchangeRates = {
  "USD": { "INR": 83.0, "EUR": 0.93, "GBP": 0.79 },
  "INR": { "USD": 0.012, "EUR": 0.011, "GBP": 0.0095 },
  "EUR": { "USD": 1.07, "INR": 89.0, "GBP": 0.85 },
  "GBP": { "USD": 1.27, "INR": 105.0, "EUR": 1.18 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    resultDiv.style.color = "red";
    return;
  }

  if (from === to) {
    resultDiv.textContent = `${amount} ${from} = ${amount} ${to}`;
    resultDiv.style.color = "green";
    return;
  }

  const rate = exchangeRates[from][to];
  if (rate) {
    const result = amount * rate;
    resultDiv.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Conversion rate not available.";
    resultDiv.style.color = "red";
  }
}
