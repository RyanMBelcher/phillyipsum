class GenerateNewText {
    phrases = [
        'jawn',
        'PHL',
        'wooder ice',
        'SEPTA',
        'cheesesteak',
        'roast pork',
        'whiz wit',
        'jimmies',
        'MAC machine',
        'drawlin',
        'outta pocket',
        'boul',
        'tomato pie',
        'go birds',
        'fly eagles fly',
        'trust the process',
        'Its a Philly thing',
        'DOOP',
        `No one likes us. We don't care`,
        `Practice?! We're talkin bout practice! Not a game! Practice!`,
        'You want Philly Philly?',
        'The Linc',
        'Lincoln Financial Field',
        'Wells Fargo Center',
        'Citizens Bank Park',
        'Subaru Park',
        'Eagles',
        'Sixers',
        'Phillies',
        'Flyers',
        'Union',
        'Gritty',
        'Phanatic',
        'Franklin',
        'Swoop',
        'Phang',
        'Delaware River',
        'Schuylkill River',
        'Rittenhouse Square',
        'Logan Square',
        'Washington Square',
        'Franklin Square',
        'Penn Square',
        'Dilworth Park',
        'Schuylkill River Park',
        'Schuylkill Banks',
        'Penn Park',
        'Fairmount Park',
        'Markward Park',
        'Catharine Park',
        'Mathias Baldwin Park',
        'Dickinson Square Park',
        'Sister Cities Park',
        'FDR Park',
        'Love Park',
        'The Rail Park',
        'Cira Green',
        'Chew Playground',
        'Fernhill Park',
        'The Navy Yard',
        'Pennypack Park',
        'Wissahickon Valley Park',
        'Race Street Pier',
        'Cherry Street Pier',
        'Penn Treaty Park',
        'Pleasant Hill Park',
        'Spruce Street Harbor Park',
        `Bartram's Garden`,
        'Clark Park',
        'Center City',
        'Old City',
        'Callowhill',
        'Naval Square',
        'Fitler Square',
        'Society Hill',
        `Penn's Landing`,
        `Jeweler's Row`,
        `Elfreth's Alley`,
        'Bella Vista',
        `Devil's Pocket`,
        'East Passyunk',
        'West Passyunk',
        'Graduate Hospital',
        'Dickenson Square',
        'Hawthorne',
        'Italian Market',
        'Moyamensing',
        'Lower Moyamensing',
        'Marconi Plaza',
        'Newbold',
        'Packer Park',
        'Pennsport',
        'Wharton',
        'Whitman',
        'Bartram Village',
        'Kingsessing',
        'Eastwick',
        'Paschall',
        'Belmont Village',
        'Carroll Park',
        'Haddington',
        'Mantua',
        'Overbrook',
        'Parkside',
        'Powelton Village',
        'Spruce Hill',
        'Walnut Hill',
        'University City',
        'Cobbs Creek',
        'Wynnefield',
        'Brewerytown',
        'Cecil B. Moore',
        'Hartranft',
        'Ludlow',
        'Poplar',
        'Sharswood',
        'Spring Garden',
        'Strawberry Mansion',
        'Yorktown',
        'Fairmount',
        'Northern Liberties',
        'Allegheny West',
        'Fairhill',
        'Hunting Park',
        'Nicetown-Tioga',
        'Andorra',
        'East Falls',
        'Roxborough',
        'Manayunk',
        'Chestnut Hill',
        'Mount Airy',
        'Cedarbrook',
        'Germantown',
        'Olney',
        'East Oak Lane',
        'West Oak Lane',
        'Feltonville',
        'Fern Rock',
        'Ogontz',
        'Logan',
        'Bridesburg',
        'Fishtown',
        'Harrowgate',
        'Kensington',
        'Port Richmond',
        'Crescentville',
        'Fox Chase',
        'Frankford',
        'Holmesburg',
        'Juniata',
        'Mayfair',
        'Oxford Circle',
        'Rhawnhurst',
        'Tacony',
        'Wissinoming',
        'Torresdale',
        'Upper Holmesburg',
        'Bustleton',
        'Byberry',
        'Somerton',
        'soft pretzels',
        'Tastycake',
        'hoagie',
        'pork roll',
        'Reading Terminal Market',
        'Mummers',
        'Philadelphia Museum of Art',
        'Rocky steps',
        'Liberty Bell',
        'Magic Gardens',
        'Betsy Ross House',
        'Edgar Allan Poe House',
        'The Mütter Museum',
        'Independence Hall',
        'Christ Church',
        'Boathouse Row',
        'Mother Bethel AME',
        'Franklin Institute',
        'Eastern State Penitentiary',
        'Broad Street',
        'Market Street',
        'Divine Lorraine Hotel',
        'EMVPIID'
    ];

    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
        return randomPhrase;
    }

    capitalizeFirstLetter(str) {
        const phraseCapitalized = str.slice(0, 1).toUpperCase() + str.slice(1);
        console.warn('phraseCapitalized', phraseCapitalized);
        return phraseCapitalized;
    }

    getSentence() {
        let sentence = '';
        let minCharLength = 50;
        while (sentence.length < minCharLength) {
            sentence = `${sentence} ${this.getRandomPhrase()}`;
        }
        return `${this.capitalizeFirstLetter(sentence.trim())}. `;
    }

    getParagraph() {
        let paragraph = '';
        let minCharLength = 500;
        while (paragraph.length < minCharLength) {
            paragraph = paragraph.concat('' + this.getSentence());
        }
        return paragraph;
    }

    getAllParagraphs = function (numberOfParagraphs) {
        let allParagraphs = [];
        while (allParagraphs.length < numberOfParagraphs) {
            allParagraphs.push(this.getParagraph());
        }
        let paragraphHTML = ' ';
        allParagraphs.forEach(function (paragraph) {
            paragraphHTML += '<p>' + paragraph.trim() + '</p>';
        });
        return paragraphHTML;
    }
}

const loremIpsum = new GenerateNewText();

module.exports = loremIpsum;