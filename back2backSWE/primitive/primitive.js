const isPalindrome = (x) => {
  if (x < 0) return false;
  
  // like digital root number
  // divide by 10 to chop off last number
  // divide by 1000 to chop off the first
  // mod gets us everything after the decimal and division gets us everything before
  
  const logarithmAnswer = Math.log10(x);
  const totalDigits = Math.floor(logarithmAnswer) + 1;
  
  let mostSignificantExtractionMask = Math.pow(10, totalDigits - 1);
  
  for (let i = 0; i < (totalDigits/2); i++) {
    const mostSignificantDigit = Math.floor(x / mostSignificantExtractionMask);
    const onesPlaceDigit = x % 10;
    
    if (mostSignificantDigit !== onesPlaceDigit ) return false;
    
    x %= mostSignificantExtractionMask
    x = Math.floor(x / 10);
    mostSignificantExtractionMask /= 100;
    
  }
  
  return true;
}