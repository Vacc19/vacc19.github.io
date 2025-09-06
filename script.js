function letterToNumber(letter) {
  const values = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };
  return values[letter.toLowerCase()] || 0;
}

function calculateLetterSum(word) {
  word = word.toLowerCase();
  let total = 0;

  for (let char of word) {
    total += letterToNumber(char);
  }

  while (total > 81) {
    total -= 81;
  }

  return total;
}

function calculateWord() {
  const word = document.getElementById("wordInput").value;
  if (word.trim() === "") {
    document.getElementById("result").textContent = "Please enter a word.";
    return;
  }
  const result = calculateLetterSum(word);
  document.getElementById("result").textContent =
    `The sum of the letters in '${word}' is ${result}`;
}
