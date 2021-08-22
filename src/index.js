const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let wordsArray = expr.split("**********");
  let sentence = [];

  for (i = 0; i < wordsArray.length; i++) {
    let wordArray = wordsArray[i].split("");
    let word = "";

    for (let i = 0; i < wordArray.length; i = i + 10) {
      let binaryLetterItemArray = wordArray.slice(i, i + 10);
      let binaryLetterArray = binaryLetterItemArray.slice(binaryLetterItemArray.indexOf("1"));
      let morseLetter = binaryLetterArray.join("").replace(/10/g, ".").replace(/11/g, "-");
      let letter = MORSE_TABLE[morseLetter];
      word = `${word}${letter}`;
    }
    sentence.push(word);
  }
  return sentence.join(' ');
}

module.exports = {
    decode
}