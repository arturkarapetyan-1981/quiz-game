let currentQuestion = 0;
let score = 0;
let timer;
let selectedQuestions = [];

// Quiz Data
const questions = {
  easy: [
    { q: "What is 4 * 4  ?", options: ["20", "16", "12", "18"], answer: "16" },
    { q: "What is 4 * 5  ?", options: ["20", "21", "25", "16"], answer: "20" },
    { q: "What is 6 * 6  ?", options: ["48", "54", "42", "36"], answer: "36" },
    { q: "What is 9 * 8  ?", options: ["72", "81", "56", "64"], answer: "72" },
    { q: "What is 7 * 6  ?", options: ["45", "48", "49", "42"], answer: "42" },
    { q: "What is 4 * 8  ?", options: ["40", "32", "34", "36"], answer: "32" },
    { q: "What is 10 * 4  ?", options: ["40", "44", "48", "32"], answer: "40" },
    { q: "What is 7 * 5  ?", options: ["40", "45", "35", "30"], answer: "35" },
    { q: "What is 10 * 8  ?", options: ["78", "88", "80", "82"], answer: "80" },
    { q: "What is 3 * 8  ?", options: ["20", "21", "24", "22"], answer: "24" },
    { q: "What is 7 * 9  ?", options: ["56", "49", "42", "63"], answer: "63" },
    { q: "What is 2 * 8  ?", options: ["16", "12", "14", "18"], answer: "16" },
    { q: "What is 3 * 4  ?", options: ["20", "16", "12", "18"], answer: "12" },
    { q: "What is 4 * 9  ?", options: ["28", "30", "32", "36"], answer: "36" },
    { q: "What is 6 * 8  ?", options: ["48", "54", "42", "36"], answer: "48" },
    { q: "What is 2 * 3  ?", options: ["9", "8", "7", "6"], answer: "6" },
    { q: "What is 7 * 8  ?", options: ["45", "70", "56", "49"], answer: "56" },
    { q: "What is 4 * 7  ?", options: ["28", "32", "20", "24"], answer: "28" },
    { q: "What is 6 * 4  ?", options: ["20", "24", "30", "18"], answer: "24" },
    { q: "What is 4 * 2  ?", options: ["12", "16", "8", "6"], answer: "8" },
    { q: "What is 6 * 7  ?", options: ["48", "44", "42", "46"], answer: "42" },
    { q: "What is 9 * 7  ?", options: ["72", "81", "63", "64"], answer: "63" },
    { q: "What is 3 * 7  ?", options: ["28", "27", "23", "21"], answer: "21" },
    { q: "What is 5 * 8  ?", options: ["40", "35", "30", "45"], answer: "40" },
    { q: "What is 7 * 7  ?", options: ["56", "49", "42", "46"], answer: "49" },
    { q: "What is 10 * 5  ?", options: ["40", "45", "50", "52"], answer: "50" },
    { q: "What is 2 * 4  ?", options: ["8", "6", "12", "10"], answer: "8" },
    { q: "What is 5 * 5  ?", options: ["20", "15", "25", "30"], answer: "25" },
    { q: "What is 8 * 4  ?", options: ["42", "24", "40", "32"], answer: "32" },
    { q: "What is 9 * 6  ?", options: ["54", "45", "36", "56"], answer: "54" },
    { q: "What is 10 * 3  ?", options: ["27", "32", "28", "30"], answer: "30" },
    { q: "What is 3 * 5  ?", options: ["25", "15", "18", "10"], answer: "15" },
    { q: "What is 2 * 6  ?", options: ["16", "14", "18", "12"], answer: "12" },
    { q: "What is 5 * 7  ?", options: ["35", "45", "30", "47"], answer: "35" },
    { q: "What is 8 * 6  ?", options: ["45", "48", "49", "42"], answer: "48" },
    { q: "What is 4 * 6  ?", options: ["34", "24", "20", "28"], answer: "24" },
    { q: "What is 6 * 3  ?", options: ["20", "16", "12", "18"], answer: "18" },
    { q: "What is 9 * 5  ?", options: ["36", "46", "45", "40"], answer: "45" },
    { q: "What is 7 * 4  ?", options: ["28", "27", "38", "24"], answer: "28" },
    { q: "What is 10 * 7  ?", options: ["72", "70", "77", "67"], answer: "70" },
    { q: "What is 3 * 2  ?", options: ["9", "6", "12", "8"], answer: "6" },
    { q: "What is 2 * 5  ?", options: ["16", "14", "12", "10"], answer: "10" },
    { q: "What is 5 * 3  ?", options: ["20", "16", "15", "18"], answer: "15" },
    { q: "What is 8 * 5  ?", options: ["44", "42", "45", "40"], answer: "40" },
    { q: "What is 4 * 3  ?", options: ["14", "16", "12", "18"], answer: "12" },
    { q: "What is 6 * 5  ?", options: ["33", "32", "36", "30"], answer: "30" },
    { q: "What is 9 * 4  ?", options: ["36", "34", "27", "38"], answer: "36" },
    { q: "What is 7 * 3  ?", options: ["23", "21", "24", "28"], answer: "21" },
    { q: "What is 10 * 2  ?", options: ["22", "21", "12", "20"], answer: "20" },
    { q: "What is 8 * 8  ?", options: ["64", "54", "68", "62"], answer: "64" }
  ],
  medium: [
    { q: "What is 12 * 4  ?", options: ["42", "48", "44", "46"], answer: "48" },
    { q: "What is 15 * 5  ?", options: ["85", "65", "70", "75"], answer: "75" },
    { q: "What is 12 * 8  ?", options: ["96", "98", "94", "92"], answer: "96" },
    { q: "What is 13 * 5  ?", options: ["66", "67", "55", "65"], answer: "65" },
    { q: "What is 18 * 3  ?", options: ["54", "64", "52", "68"], answer: "54" },
    { q: "What is 16 * 8  ?", options: ["122", "120", "124", "128"], answer: "128" },
    { q: "What is 14 * 4  ?", options: ["56", "58", "52", "54"], answer: "56" },
    { q: "What is 11 * 3  ?", options: ["31", "43", "35", "33"], answer: "33" },
    { q: "What is 15 * 4  ?", options: ["60", "64", "54", "90"], answer: "60" },
    { q: "What is 13 * 2  ?", options: ["20", "26", "24", "22"], answer: "26" },
    { q: "What is 18 * 5  ?", options: ["85", "90", "68", "78"], answer: "90" },
    { q: "What is 16 * 3  ?", options: ["41", "38", "43", "48"], answer: "48" },
    { q: "What is 14 * 2  ?", options: ["28", "18", "26", "24"], answer: "28" },
    { q: "What is 11 * 9  ?", options: ["98", "99", "89", "87"], answer: "99" },
    { q: "What is 12 * 3  ?", options: ["32", "34", "46", "36"], answer: "36" },
    { q: "What is 15 * 2  ?", options: ["35", "25", "30", "32"], answer: "30" },
    { q: "What is 13 * 4  ?", options: ["42", "54", "56", "52"], answer: "52" },
    { q: "What is 18 * 2  ?", options: ["28", "46", "26", "36"], answer: "36" },
    { q: "What is 16 * 4  ?", options: ["64", "54", "48", "52"], answer: "64" },
    { q: "What is 14 * 3  ?", options: ["52", "44", "32", "42"], answer: "42" },
    { q: "What is 11 * 5  ?", options: ["55", "65", "51", "56"], answer: "55" },
    { q: "What is 12 * 2  ?", options: ["22", "24", "34", "32"], answer: "24" },
    { q: "What is 15 * 3  ?", options: ["55", "43", "45", "35"], answer: "45" },
    { q: "What is 13 * 3  ?", options: ["39", "33", "30", "49"], answer: "39" },
    { q: "What is 18 * 4  ?", options: ["72", "62", "74", "78"], answer: "72" },
    { q: "What is 16 * 1  ?", options: ["12", "17", "26", "16"], answer: "16" },
    { q: "What is 14 * 5  ?", options: ["70", "75", "60", "65"], answer: "70" },
    { q: "What is 11 * 2  ?", options: ["20", "32", "23", "22"], answer: "22" },
    { q: "What is 12 * 1  ?", options: ["13", "12", "22", "21"], answer: "12" },
    { q: "What is 15 * 7  ?", options: ["105", "115", "85", "107"], answer: "105" },
    { q: "What is 13 * 6  ?", options: ["68", "76", "73", "78"], answer: "78" },
    { q: "What is 18 * 1  ?", options: ["21", "19", "18", "28"], answer: "18" },
    { q: "What is 16 * 2  ?", options: ["28", "22", "18", "32"], answer: "32" },
    { q: "What is 14 * 1  ?", options: ["15", "14", "24", "11"], answer: "14" },
    { q: "What is 17 * 2  ?", options: ["34", "24", "31", "32"], answer: "34" },
    { q: "What is 11 * 4  ?", options: ["34", "24", "44", "45"], answer: "44" },
    { q: "What is 17 * 3  ?", options: ["45", "41", "53", "51"], answer: "51" },
    { q: "What is 12 * 5  ?", options: ["65", "60", "52", "55"], answer: "60" },
    { q: "What is 15 * 6  ?", options: ["80", "90", "96", "95"], answer: "90" },
    { q: "What is 13 * 1  ?", options: ["13", "14", "23", "15"], answer: "13" },
    { q: "What is 17 * 4  ?", options: ["68", "64", "58", "54"], answer: "68" },
    { q: "What is 11 * 8  ?", options: ["89", "99", "98", "88"], answer: "88" },
    { q: "What is 12 * 6  ?", options: ["66", "62", "72", "76"], answer: "72" },
    { q: "What is 15 * 1  ?", options: ["16", "15", "17", "14"], answer: "15" },
    { q: "What is 18 * 6  ?", options: ["98", "104", "106", "108"], answer: "108" },
    { q: "What is 17 * 1  ?", options: ["19", "27", "18", "17"], answer: "17" },
    { q: "What is 11 * 6  ?", options: ["56", "66", "65", "67"], answer: "66" },
    { q: "What is 14 * 6  ?", options: ["68", "64", "86", "84"], answer: "84" },
    { q: "What is 17 * 5  ?", options: ["65", "78", "75", "85"], answer: "85" },
    { q: "What is 11 * 7  ?", options: ["77", "87", "78", "67"], answer: "77" }
  ],
  hard: [
    { q: "What is 12 * 12  ?", options: ["144", "142", "124", "128"], answer: "144" },
    { q: "What is 14 * 10  ?", options: ["104", "124", "144", "140"], answer: "140" },
    { q: "What is 11 * 11  ?", options: ["111", "121", "122", "110"], answer: "121" },
    { q: "What is 15 * 20  ?", options: ["305", "300", "320", "325"], answer: "300" },
    { q: "What is 13 * 30  ?", options: ["333", "393", "330", "390"], answer: "390" },
    { q: "What is 15 * 40  ?", options: ["540", "550", "600", "640"], answer: "600" },
    { q: "What is 16 * 16  ?", options: ["256", "266", "244", "216"], answer: "256" },
    { q: "What is 18 * 18  ?", options: ["344", "326", "334", "324"], answer: "324" },
    { q: "What is 17 * 30  ?", options: ["513", "610", "511", "510"], answer: "510" },
    { q: "What is 19 * 20  ?", options: ["388", "380", "378", "389"], answer: "380" },
    { q: "What is 12 * 80  ?", options: ["962", "882", "960", "860"], answer: "960" },
    { q: "What is 14 * 14  ?", options: ["196", "194", "189", "192"], answer: "196" },
    { q: "What is 11 * 300  ?", options: ["3200", "3310", "3300", "3333"], answer: "3300" },
    { q: "What is 15 * 15  ?", options: ["220", "205", "215", "225"], answer: "225" },
    { q: "What is 13 * 13  ?", options: ["163", "166", "169", "179"], answer: "169" },
    { q: "What is 15 * 25  ?", options: ["375", "355", "255", "305"], answer: "375" },
    { q: "What is 13 * 20  ?", options: ["263", "256", "266", "260"], answer: "260" },
    { q: "What is 16 * 20  ?", options: ["320", "322", "326", "366"], answer: "320" },
    { q: "What is 18 * 12  ?", options: ["216", "266", "212", "210"], answer: "216" },
    { q: "What is 17 * 17  ?", options: ["288", "289", "279", "287"], answer: "289" },
    { q: "What is 19 * 19  ?", options: ["361", "321", "366", "320"], answer: "361" },
    { q: "What is 12 * 40  ?", options: ["488", "484", "440", "480"], answer: "480" },
    { q: "What is 14 * 12  ?", options: ["144", "186", "166", "168"], answer: "168" },
    { q: "What is 11 * 20  ?", options: ["222", "220", "212", "202"], answer: "220" },
    { q: "What is 16 * 30  ?", options: ["464", "468", "488", "480"], answer: "480" },
    { q: "What is 18 * 200  ?", options: ["3606", "3666", "3600", "3060"], answer: "3600" },
    { q: "What is 17 * 22  ?", options: ["374", "344", "324", "377"], answer: "374" },
    { q: "What is 19 * 30  ?", options: ["527", "577", "570", "550"], answer: "570" },
    { q: "What is 12 * 20  ?", options: ["244", "220", "210", "240"], answer: "240" },
    { q: "What is 25 * 25  ?", options: ["625", "655", "620", "555"], answer: "625" },
    { q: "What is 30 * 25  ?", options: ["750", "770", "730", "725"], answer: "750" },
    { q: "What is 24 * 24  ?", options: ["576", "560", "566", "570"], answer: "576" },
    { q: "What is 35 * 30  ?", options: ["1250", "1555", "1550", "1050"], answer: "1050" },
    { q: "What is 20 * 21  ?", options: ["420", "422", "424", "444"], answer: "420" },
    { q: "What is 14 * 15  ?", options: ["220", "210", "211", "212"], answer: "210" },
    { q: "What is 11 * 30  ?", options: ["323", "333", "330", "320"], answer: "330" },
    { q: "What is 13 * 15  ?", options: ["195", "155", "199", "135"], answer: "195" },
    { q: "What is 25 * 22  ?", options: ["515", "555", "525", "550"], answer: "550" },
    { q: "What is 30 * 12  ?", options: ["326", "360", "366", "316"], answer: "360" },
    { q: "What is 14 * 25  ?", options: ["355", "350", "324", "320"], answer: "350" },
    { q: "What is 25 * 45  ?", options: ["1125", "1100", "1200", "1222"], answer: "1125" },
    { q: "What is 30 * 11  ?", options: ["313", "335", "333", "330"], answer: "330" },
    { q: "What is 24 * 20  ?", options: ["480", "488", "448", "444"], answer: "480" },
    { q: "What is 30 * 35  ?", options: ["1050", "1150", "1250", "1200"], answer: "1050" },
    { q: "What is 35 * 12  ?", options: ["432", "412", "422", "420"], answer: "420" },
    { q: "What is 20 * 45  ?", options: ["990", "900", "850", "845"], answer: "900" },
    { q: "What is 12 * 50  ?", options: ["550", "600", "660", "650"], answer: "600" },
    { q: "What is 16 * 15  ?", options: ["235", "260", "240", "220"], answer: "240" },
    { q: "What is 20 * 25  ?", options: ["425", "450", "550", "500"], answer: "500" },
    { q: "What is 19 * 12  ?", options: ["228", "238", "220", "288"], answer: "228" }
  ]
};

// Show difficulty selection
function showDifficulty() {
  document.querySelector('.front_page').classList.remove('activeInfo');
  document.querySelector('.difficulty-container').classList.add('activeInfo');
}

// Open / Close Rules Modal
function openRules() {
  document.getElementById('rulesModal').classList.add('active');
}
function closeRules() {
  document.getElementById('rulesModal').classList.remove('active');
}

// Start game
function startGame(difficulty) {
  document.querySelector('.difficulty-container').classList.remove('activeInfo');
  document.querySelector('.quiz_box').classList.add('activeQuiz');
  currentQuestion = 0;
  score = 0;
  selectedQuestions = questions[difficulty];
  showQuestion();
}

// Show question
function showQuestion() {
  const queText = document.querySelector('.que_text');
  const optionList = document.querySelector('.option_list');
  const question = selectedQuestions[currentQuestion];

  queText.textContent = question.q;
  optionList.innerHTML = '';

  question.options.forEach(opt => {
    const button = document.createElement('button');
    button.textContent = opt;
    button.classList.add('option');
    button.onclick = () => checkAnswer(opt, button);
    optionList.appendChild(button);
  });

  startTimer(30);
}

// Check answer
function checkAnswer(selected, button) {
  clearInterval(timer);
  const correct = selectedQuestions[currentQuestion].answer;
  const optionButtons = document.querySelectorAll('.option');
  optionButtons.forEach(btn => btn.classList.add('disabled'));

  if (selected === correct) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('incorrect');
    optionButtons.forEach(btn => {
      if (btn.textContent === correct) btn.classList.add('correct');
    });
  }
}

// Next question
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Timer
function startTimer(time) {
  document.getElementById('time').textContent = time;
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    document.getElementById('time').textContent = time;
    if (time <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

// Show result
function showResult() {
  document.querySelector('.quiz_box').classList.remove('activeQuiz');
  document.querySelector('.result_box').classList.add('activeResult');
  document.getElementById('score').textContent = score;
}

// Restart game (go to difficulty selection)
function restartGame() {
  document.querySelector('.result_box').classList.remove('activeResult');
  document.querySelector('.quiz_box').classList.remove('activeQuiz');
  document.querySelector('.difficulty-container').classList.add('activeInfo');
}

// Go to main menu
function goToMainMenu() {
  document.querySelector('.quiz_box').classList.remove('activeQuiz');
  document.querySelector('.result_box').classList.remove('activeResult');
  document.querySelector('.difficulty-container').classList.remove('activeInfo');
  document.querySelector('.front_page').classList.add('activeInfo');
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  // Attach event listener to button
  document.getElementById("fullscreen-btn").addEventListener("click", toggleFullscreen);

  