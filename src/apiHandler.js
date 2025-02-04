//  Responsible for  implementing the core logic for handling the classification of the number and sending the response.

const {
  isPrime,
  isPerfect,
  isArmstrong,
  isOdd,
  digitSum,
} = require("./src/utils");
const { getFunFact } = require("./d/funFactService");

async function classifyNumber(req, res) {
  const { number } = req.query;

  // Validate if the input is a valid number
  if (isNaN(number)) {
    return res.status(400).json({ error: true, number });
  }

  const num = parseInt(number);
  const properties = [];

  // Check properties
  if (isArmstrong(num)) properties.push("armstrong");
  if (isOdd(num)) properties.push("odd");
  if (!isArmstrong(num) && !isOdd(num)) properties.push("even");

  // Get fun fact about the number
  const funFact = await getFunFact(num);

  // Response object
  const response = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties: properties,
    digit_sum: digitSum(num),
    fun_fact: funFact,
  };

  // Send response
  res.status(200).json(response);
}

module.exports = { classifyNumber };
