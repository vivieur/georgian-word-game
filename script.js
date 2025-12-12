// Full Georgian alphabet
const letters = [
    "ა", "ბ", "გ", "დ", "ე", "ვ", "ზ", "თ", "ი", "კ",
    "ლ", "მ", "ნ", "ო", "პ", "ჟ", "რ", "ს", "ტ", "უ",
    "ფ", "ქ", "ღ", "ყ", "შ", "ჩ", "ც", "ძ", "წ", "ჭ",
    "ხ", "ჯ", "ჰ"
];

let currentLetter = "";

function newLetter() {
    const index = Math.floor(Math.random() * letters.length);
    currentLetter = letters[index];
    const box = document.getElementById("letter-box");

    box.textContent = currentLetter;
    box.classList.remove("wrong");
    box.classList.remove("correct");
    document.getElementById("status").textContent = "";
}

// Key listener
document.addEventListener("keydown", (event) => {
    let pressed = event.key;

    // If user presses Shift, Ctrl, etc — ignore
    if (pressed.length !== 1) return;

    const box = document.getElementById("letter-box");

    if (pressed === currentLetter) {
        box.classList.add("correct");
        document.getElementById("status").textContent = "✔ სწორია";
        setTimeout(newLetter, 300);
    } else {
        box.classList.add("wrong");
        document.getElementById("status").textContent = "✘ არასწორია";
    }
});

// Start the game
newLetter();
