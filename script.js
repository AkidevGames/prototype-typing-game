const words = [
    "sensei",
    "student",
    "academy",
    "mission",
    "battle"
];

const targetWordElement = document.getElementById("target-word");
const wordInputElement = document.getElementById("word-input");
const scoreElement = document.getElementById("score");

let currentWord = "";
let score = 0;

function showRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);

    currentWord = words[randomIndex];
    targetWordElement.textContent = currentWord;
}

showRandomWord();

wordInputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        const typedWord = wordInputElement.value.trim().toLowerCase();

        if (typedWord === currentWord) {
            score = score + 1;
            scoreElement.textContent = score;

            wordInputElement.value = "";
            showRandomWord();

            console.log("Correct word!");
        } else {
            console.log("Incorrect word.");
        }
    }
});