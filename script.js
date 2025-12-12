const words = [
    "ქალი",
    "პარლამენტი",
    "თბილისი",
    "მეგობრობა",
    "ზრდა",
    "ქარვა",
    "სანი"
];

// Shuffle function (Fisher–Yates)
function shuffleWord(word) {
    let arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

let currentWord = "";
let scrambled = "";

function newGame() {
    document.getElementById("result").textContent = "";
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    scrambled = shuffleWord(currentWord);
    document.getElementById("scrambledWord").textContent = scrambled;
    document.getElementById("userInput").value = "";
}

document.getElementById("checkBtn").addEventListener("click", () => {
    const guess = document.getElementById("userInput").value.trim();
    if (guess === currentWord) {
        document.getElementById("result").textContent = "✔ სწორი!";
    } else {
        document.getElementById("result").textContent = "✘ არასწორი, ისევ სცადე";
    }
});

document.getElementById("nextBtn").addEventListener("click", newGame);

// start game
newGame();
