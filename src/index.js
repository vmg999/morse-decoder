const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let exp = [],
    ltr = [],
    tmp = [],
    res = [];

  for (let el of expr.split("**********")) {
    for (let i = 0; i < el.length; i += 10) {
      exp.push(el.substring(i, i + 10));
    }
    exp.push(" ");
  }
  exp.pop();

  for (let el of exp) {
    if (el != " ") {
      for (let i = 8; i >= 0; i -= 2) {
        if (el.substring(i, i + 2) == "10") {
          tmp.push(".");
        } else if (el.substring(i, i + 2) == "11") {
          tmp.push("-");
        }
      }
      ltr.push(tmp.reverse().join(""));
      tmp = [];
    } else if (el == " ") {
      ltr.push(" ");
    }
  }

  for (let el of ltr) {
    for (key in MORSE_TABLE) {
      if (el == key) {
        res.push(MORSE_TABLE[key]);
      }
    }
    if (el == " ") {
      res.push(" ");
    }
  }

  return res.join("");
}

module.exports = {
  decode,
};
