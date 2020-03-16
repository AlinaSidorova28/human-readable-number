let code = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred"
};
module.exports = function toReadable (number) {
  let new_num = (num) => {
    for(let el in code){
        if(num == el && num !== 100){
            return code[el];
        }
    }
  
    let res = [];
    if(20 < num && num < 100){
      for(let el in code){
          if(num%10 == el){
              res.push(code[el]);
          }
          if(Math.floor(num/10)*10 == el){
              res.push(code[el]);
              return res.reverse().join(" ");
          }
      }
    }
  };
  let result = new_num(number);
  
  if(number%100 === 0 && number !== 0){
      for(let el in code){
          if(Math.floor(number/100) == el){
              return code[el] + " " + code[100];
          }
      }
  }

  res = [];
  for(let el in code){
    if(Math.floor(number/100) == el){
        res.push(code[el], code[100]);
    }
  }
  res.push(new_num(number%100));
  return number < 100 ? result : res.join(" ");
}
