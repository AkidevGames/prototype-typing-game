const baseWords = [
    "sensei",
    "student",
    "academy",
    "mission",
    "battle"
];

const words = baseWords.flatMap(function (word) {
    const capitalizedWord =
        word.charAt(0).toUpperCase() + word.slice(1);

    return [word, capitalizedWord];
});

const targetWordElement = document.getElementById("target-word");
const wordInputElement = document.getElementById("word-input");
const scoreElement = document.getElementById("score");

let currentWord = "";
let score = 0;

function showRandomWord() {
    let nextWord = currentWord;

    while (nextWord === currentWord) {
        const randomIndex = Math.floor(Math.random() * words.length);
        nextWord = words[randomIndex];
    }

    currentWord = nextWord;
    targetWordElement.textContent = currentWord;
}

showRandomWord();

wordInputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        const typedWord = wordInputElement.value.trim();

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