// content script will access the DOM
// finds <p> tags, then on body of <p> tag
// calls capitalizeFirstLetter()

// TODO: fix regex so apostrophes are considered as part of word
const wordRegex = /\b\w+('\w+)?/g

const startBold = "<strong>";
const endBold = "</strong>";

let paragraphs = document.querySelectorAll("p");

// TODO: do not modify the styles
paragraphs.forEach((p) => {
    p.innerHTML = p.innerHTML.replace(wordRegex, (word) => {
        let firstChar = word.charAt(0).toUpperCase();
        let boldChar = startBold.concat(firstChar, endBold);
        return boldChar + word.slice(1);
    })
});
