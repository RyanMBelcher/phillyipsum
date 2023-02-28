const loremIpsum = new GenerateNewText();

function GenerateNewText() {
    this.sentences =
        [
            'jawn ',
            'PHL ',
            'wooder ice ',
            'SEPTA ',
            'cheesesteak',
            'roast pork ',
            'whiz wit ',
            'jimmies ',
            'MAC machine ',
            'drawlin',
            'boul',
            'tomato pie ',
            'go birds ',
            'fly eagles fly ',
            'trust the process ',
            'Its a Philly thing ',
            'DOOP ',
            `No one likes us and we don't care `,
            'the Linc',
            'Lincoln Financial Field',
            'Wells Fargo Center',
            'Citizens Bank Park',
            'Subaru Park ',
            'Eagles ',
            'Sixers ',
            'Phillies ',
            'Flyers ',
            'Union ',
            'Gritty ',
            'Phanatic ',
            'Franklin ',
            'Swoop ',
            'Phang ',
            'Delaware River',
            'Schuylkill River',
            'Rittenhouse Square ',
            'Logan Square ',
            'Washington Square ',
            'Franklin Square ',
            'Penn Square ',
            'Dilworth Park',
            'Schuylkill River Park ',
            'Schuylkill Banks',
            'Penn Park ',
            'Fairmount Park ',
            'Markward Park ',
            'Catharine Park ',
            'Mathias Baldwin Park ',
            'Dickinson Square Park ',
            'Sister Cities Park ',
            'FDR Park ',
            'Love Park ',
            'The Rail Park ',
            'Cira Green ',
            'Chew Playground ',
            'Fernhill Park ',
            'The Navy Yard ',
            'Pennypack Park ',
            'Wissahickon Valley Park ',
            'Race Street Pier ',
            'Cherry Street Pier ',
            'Penn Treaty Park ',
            'Pleasant Hill Park ',
            'Spruce Street Harbor Park ',
            `Bartram's Garden `,
            'Clark Park ',
            'Center City ',
            'Old City ',
            'Callowhill ',
            'Naval Square ',
            'Fitler Square ',
            'Society Hill ',
            `Penn's Landing `,
            `Jeweler's Row `,
            `Elfreth's Alley `,
            'Bella Vista ',
            `Devil's Pocket `,
            'East Passyunk ',
            'West Passyunk ',
            'Graduate Hospital ',
            'Dickenson Square ',
            'Hawthorne ',
            'Italian Market ',
            'Moyamensing ',
            'Lower Moyamensing ',
            'Marconi Plaza ',
            'Newbold ',
            'Packer Park ',
            'Pennsport ',
            'Wharton ',
            'Whitman ',
            'Bartram Village ',
            'Kingsessing ',
            'Eastwick ',
            'Paschall ',
            'Belmont Village ',
            'Carroll Park ',
            'Haddington ',
            'Mantua ',
            'Overbrook ',
            'Parkside ',
            'Powelton Village ',
            'Spruce Hill ',
            'Walnut Hill ',
            'University City ',
            'Cobbs Creek ',
            'Wynnefield ',
            'Brewerytown ',
            'Cecil B. Moore ',
            'Hartranft ',
            'Ludlow ',
            'Poplar ',
            'Sharswood ',
            'Spring Garden ',
            'Strawberry Mansion ',
            'Yorktown ',
            'Fairmount ',
            'Northern Liberties ',
            'Allegheny West ',
            'Fairhill ',
            'Hunting Park ',
            'Nicetown-Tioga',
            'Andorra ',
            'East Falls ',
            'Roxborough ',
            'Manayunk ',
            'Chestnut Hill ',
            'Mount Airy ',
            'Cedarbrook ',
            'Germantown ',
            'Olney ',
            'East Oak Lane ',
            'West Oak Lane ',
            'Feltonville ',
            'Fern Rock ',
            'Ogontz ',
            'Logan ',
            'Bridesburg ',
            'Fishtown ',
            'Harrowgate ',
            'Kensington ',
            'Port Richmond ',
            'Crescentville ',
            'Fox Chase ',
            'Frankford ',
            'Holmesburg ',
            'Juniata ',
            'Mayfair ',
            'Oxford Circle ',
            'Rhawnhurst ',
            'Tacony ',
            'Wissinoming ',
            'Torresdale ',
            'Upper Holmesburg ',
            'Bustleton ',
            'Byberry ',
            'Somerton ',
        ];
}

GenerateNewText.prototype.getRandomSentence = function () {
    let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
    return randomSentence;
}

GenerateNewText.prototype.getParagraph = function () {
    let paragraph = ' ';
    let minCharLength = 250;
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

GenerateNewText.prototype.getAllParagraphs = function (numberOfParagraphs) {
    let allParagraphs = [];
    while (allParagraphs.length < numberOfParagraphs) {
        allParagraphs.push(this.getParagraph());
    }
    let paragraphHTML = ' ';
    allParagraphs.forEach(function (paragraph) {
        paragraphHTML += '<p>' + paragraph + '</p>';
    });
    return paragraphHTML;
}

module.exports = loremIpsum;