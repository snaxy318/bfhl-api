import { reverseAltCaps } from "../utils/helpers.js";

// configure via env if needed
const FULL_NAME = (process.env.FULL_NAME || "john_doe").toLowerCase();
const DOB = process.env.DOB || "17091999";
const EMAIL = process.env.EMAIL || "john@xyz.com";
const ROLL_NUMBER = process.env.ROLL_NUMBER || "ABCD123";

const isIntegerString = (s) => /^-?\d+$/.test(s);
const isAlphabetString = (s) => /^[a-zA-Z]+$/.test(s);

export const handleBfhl = (req, res) => {
  try {
    const inputArray = Array.isArray(req.body.data) ? req.body.data : [];

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    let alphaConcat = "";

    inputArray.forEach((rawItem) => {
      const item = String(rawItem);
      if (isIntegerString(item)) {
        const num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) evenNumbers.push(item);
        else oddNumbers.push(item);
      } else if (isAlphabetString(item)) {
        alphabets.push(item.toUpperCase());
        alphaConcat += item;
      } else {
        specialCharacters.push(item);
      }
    });

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: String(sum),
      concat_string: reverseAltCaps(alphaConcat),
    };

    return res.status(200).json(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      is_success: false,
      message: "Internal Server Error",
    });
  }
};
