const {
  isPrime,
  isArmstrong,
  sumOfDigits,
  getFunFact,
} = require("../utils/numberUtils.js");

// Function to classify number and return details
const classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Input validation
  if (isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);

  // Calculate number properties
  const is_prime = isPrime(num);
  const is_perfect = num === sumOfDigits(num);
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");

  const digit_sum = sumOfDigits(num);

  // Get fun fact from Numbers API
  try {
    const fun_fact = await getFunFact(num);

    return res.status(200).json({
      number: num,
      is_prime,
      is_perfect,
      properties,
      digit_sum,
      fun_fact,
    });
  } catch (err) {
    return res.status(500).json({ error: "Error fetching fun fact." });
  }
};

module.exports = { classifyNumber };
