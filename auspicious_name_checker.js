function letterToValue(ch) {
  ch = ch.toLowerCase();
  if ("ajs".includes(ch)) return 1;
  if ("bkt".includes(ch)) return 2;
  if ("clu".includes(ch)) return 3;
  if ("dmv".includes(ch)) return 4;
  if ("enw".includes(ch)) return 5;
  if ("fox".includes(ch)) return 6;
  if ("gpy".includes(ch)) return 7;
  if ("hqz".includes(ch)) return 8;
  if ("ir".includes(ch)) return 9;
  return 0;
}

function calculateFortune() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    document.getElementById("result").textContent = "Please enter a name.";
    return;
  }

  let hasil = 0;

  for (let ch of name) {
    hasil += letterToValue(ch);
  }

  // Reduce if > 81
  while (hasil > 81) {
    hasil -= 81;
  }

  let fortune;
  if ([1,3,5,11,13,15,16,21,23,24,29,31,33,39,41,47,48,52,61,63,67,68,81].includes(hasil)) {
    fortune = "Very Auspicious";
  } else if ([2,4,12,22,62,79,80].includes(hasil)) {
    fortune = "Quite Inauspicious";
  } else if ([6,7,8,17,18,25,32,35,37,45,73].includes(hasil)) {
    fortune = "Quite Auspicious";
  } else if ([38,57,58,65].includes(hasil)) {
    fortune = "Auspicious";
  } else if ([26,27,30,40,42,43,49,50,51,53,55,71,72,75,77,78].includes(hasil)) {
    fortune = "Inauspicious";
  } else {
    fortune = "Very Inauspicious";
  }

  document.getElementById("result").textContent = 
    `Total: ${hasil} → ${fortune}`;
}
