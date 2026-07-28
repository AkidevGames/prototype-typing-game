// Data
const baseWords = [
    "sensei",
    "student",
    "academy",
    "mission",
    "battle",
    "railgun",
    "gun",
    "train",
    "school",
    "bike",
    "anniversary"
];

const words = baseWords.flatMap(function (word) {
    const capitalizedWord =
        word.charAt(0).toUpperCase() + word.slice(1);

    return [word, capitalizedWord];
});

// DOM elements
const targetWordElement = document.getElementById("target-word");
const wordInputElement = document.getElementById("word-input");
const scoreElement = document.getElementById("score");
const lightThemeButton = document.getElementById("light-theme-button");
const darkThemeButton = document.getElementById("dark-theme-button");

// State
let currentWord = "";
let score = 0;

const recentWords = [];
const historyLimit = 4;

// Functions
function showRandomWord() {
    const availableWords = words.filter(function (word) {
        const normalizedWord = word.toLowerCase();

        return !recentWords.includes(normalizedWord);
    });

    const randomIndex = Math.floor(
        Math.random() * availableWords.length
    );

    currentWord = availableWords[randomIndex];
    targetWordElement.textContent = currentWord;
}

function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light-theme");
        lightThemeButton.classList.add("active");
        darkThemeButton.classList.remove("active");
    } else {
        document.body.classList.remove("light-theme");
        darkThemeButton.classList.add("active");
        lightThemeButton.classList.remove("active");
    }

    localStorage.setItem("selectedTheme", theme);
}


// Event listeners
lightThemeButton.addEventListener("click", function () {
    applyTheme("light");
});

darkThemeButton.addEventListener("click", function () {
    applyTheme("dark");
});

wordInputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        const typedWord = wordInputElement.value.trim();

if (typedWord === currentWord) {
    score = score + 1;
    scoreElement.textContent = score;

    wordInputElement.value = "";

    recentWords.push(currentWord.toLowerCase());

    if (recentWords.length > historyLimit) {
        recentWords.shift();
    }

    showRandomWord();

    console.log("Correct word!");
} else {
    console.log("Incorrect word.");
}
    }
});


// Initial setup
const savedTheme = localStorage.getItem("selectedTheme") || "dark";

applyTheme(savedTheme);


showRandomWord();