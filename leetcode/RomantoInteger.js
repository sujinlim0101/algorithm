/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let sum = 0;
  let numerals = [];

  const twoWords = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
  
  twoWords.forEach(word => {
    const index = s.indexOf(word);
    if (index === -1) return;
    numerals.push(word);
    s = s.replace(word, '');
  });
  
  const restOneWords = s.split('')
  
  restOneWords.forEach((word) => {
      numerals.push(word);
  })
  const numObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  for (let i = 0; i < numerals.length; i++) {
      sum = sum + numObj[numerals[i]];
  }

  return sum;
};
romanToInt("MCMXCIV");