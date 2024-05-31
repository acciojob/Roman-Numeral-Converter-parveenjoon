function convertToRoman(num) {
  const obj = {
    0:['M',1000], 
    1:['D', 500], 
    2:['C', 100], 
    3:['L', 50], 
    4:['X', 10], 
    5:['V', 5], 
    6:['I', 1]
  };

  let romanNumeral = '';

  // Iterate over the symbols and build the Roman numeral representation
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];

    // Calculate the number of times the symbol should be added to the Roman numeral
    const count = Math.floor(num / value);

    // Append the symbol to the Roman numeral count times
    for (let j = 0; j < count; j++) {
      romanNumeral += symbol;
    }

    // Update the remaining number
    num %= value;
  }

  return romanNumeral;
}


// Uncomment the following line to test the function with input 36
console.log(convertToRoman(36));

module.exports = convertToRoman;
