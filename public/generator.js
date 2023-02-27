const loremIpsum = new GenerateNewText();

function GenerateNewText() {
    this.sentences =
        [
            'jawn',
            'PHL',
            'wooder ice',
            'SEPTA'
        ];
}

GenerateNewText.prototype.getRandomSentence = function () {
    let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
    return randomSentence;
}

GenerateNewText.prototype.getParagraph = function () {
    let paragraph = '';
    let minCharLength = 100;
    let firstSentence = true;
    while (paragraph.length < minCharLength) {
        if (firstSentence) {
            paragraph = paragraph.concat(this.getRandomSentence());
            firstSentence = false;
        } else {
            paragraph = paragraph.concat('' + this.getRandomSentence());
        }
    }
    return paragraph;
}

GenerateNewText.prototype.getAllParagraph = function (numberOfParagraphs) {
    let allParagraphs = [];
    while (allParagraphs.length < numberOfParagraphs) {
        allParagraphs.push(this.getParagraph());
    }
    let paragraphHTML = '';
    allParagraphs.forEach(function (paragraph) {
        paragraphHTML += '<p>' + paragraph + '</p>';
    });
    return paragraphHTML;
}

module.exports = loremIpsum;