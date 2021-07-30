let data = {
  answer3letters: [
    "SAK",
    "SAF",
    "KAS",
    "KAT",
    "FAS",
    "FAT",
    "FES",
    "FEA",
    "JAK",
    "JAA",
    "JON",
    "ASK",
    "AKS",
    "AKE",
    "AAS",
    "EKS",
    "FAD",
    "FAN",
    "TJA",
    "TJO",
    "TAS",
    "TAK",
    "TOA",
    "TOE",
    "TON",
    "ONA",
    "OND",
    "ASE",
    "ANE",
    "ANS",
    "AND",
    "SEK",
    "SED",
    "SAD",
    "SAN",
    "SNO",
    "NOE",
    "NON",
    "NOT",
    "NEA",
    "ENT",
    "ENS",
    "END",
    "NAF",
    "DNA",
    "DAA",
  ],
  answer4letters: [
    "SKAT",
    "SJOA",
    "SAKE",
    "SAFE",
    "KJAS",
    "KAFE",
    "FAKS",
    "DEAN",
    "JASK",
    "JOAN",
    "JOEN",
    "ASKE",
    "AKES",
    "AASE",
    "FASE",
    "FANE",
    "FANS",
    "FAEN",
    "TJAA",
    "TJOA",
    "TJOE",
    "TJON",
    "TAKS",
    "TAJO",
    "TOES",
    "TONE",
    "TONA",
    "TOEN",
    "OASE",
    "ONDA",
    "ASEA",
    "ANEN",
    "ANSE",
    "SEKS",
    "SEAT",
    "SAND",
    "SNOA",
    "NONE",
    "NONA",
    "NOEN",
    "NEON",
    "ENSE",
    "ENSA",
    "ENDA",
    "NENT",
    "DAFF",
    "DANE",
    "DANS",
  ],
  answer5letters: [
    "SKAFF",
    "SAKES",
    "SAFES",
    "KJONE",
    "KJONA",
    "KAFFE",
    "FESNE",
    "JASKE",
    "JAFFA",
    "JONAS",
    "AANON",
    "FANEN",
    "FANET",
    "FAENS",
    "TJOES",
    "TJONE",
    "TJONA",
    "TASKE",
    "TONEN",
    "SEKSA",
    "SNOEN",
    "NONET",
    "NEONA",
    "DAFFA",
    "DAFFE",
    "DANEN",
    "DANSE",
  ],
  answer6letters: [
    "SKAFFE",
    "SKAFFA",
    "KJONEN",
    "DEANEN",
    "JASKES",
    "AKSJON",
    "DAFFES",
  ],
  answer7letters: ["SKAFFES", "SEKSJON"],
  answer8letters: ["AKSJONEN"],
  answer9letters: ["AFFEKSJON", "SEKSJONEN"],
  answer10letters: [],
  answer11letters: ["AFFEKSJONEN"],
  answer12letters: [],
  answer13letters: [],
};

let allAnswers = [
  ...data.answer3letters,
  ...data.answer4letters,
  ...data.answer5letters,
  ...data.answer6letters,
  ...data.answer7letters,
  ...data.answer8letters,
  ...data.answer9letters,
  ...data.answer10letters,
  ...data.answer11letters,
  ...data.answer12letters,
  ...data.answer13letters,
];

let answersLength = allAnswers.length;

let randomAnswersTop;
let randomAnswersMedium;
let randomAnswersWeak;

let getRandomWordsInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

let lastFive = getRandomWordsInRange(answersLength - 5, answersLength);
let lastTwenty = getRandomWordsInRange(answersLength - 20, answersLength);

for (let i = 0; i < 2; i++) {
  randomAnswersTop.push(
    allAnswers[getRandomWordsInRange(answersLength - 5, answersLength)]
  );
}

for (let i = 0; i < 2; i++) {
  randomAnswersTop.push(
    allAnswers[getRandomWordsInRange(answersLength - 20, answersLength)]
  );
}

for (let i = 0; i < 2; i++) {
  randomAnswersTop.push(
    allAnswers[
      getRandomWordsInRange(answersLength - answersLength, answersLength)
    ]
  );
}
