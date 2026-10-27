const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");
const clearBtn = document.getElementById("clearBtn");
textInput.addEventListener("input", function () {
    const text = textInput.value;
    charCount.textContent = text.length;
    const trimmedText = text.trim();
    if (trimmedText === "") {
        wordCount.textContent = 0;
    } else {
        const words = trimmedText.split(/\s+/);
        wordCount.textContent = words.length;
    }
    const sentences = trimmedText.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
    sentenceCount.textContent = sentences ? sentences.filter(sentence => sentence.trim() !== "").length
        : 0;
});
clearBtn.addEventListener("click", function () {
    textInput.value = "";
    charCount.textContent = 0;
    wordCount.textContent = 0;
    sentenceCount.textContent = 0;

    textInput.focus();
});