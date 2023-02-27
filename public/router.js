const loremIpsum = require('./generator.js');
const queryString = require('queryString');
const fs = require('fs');

const express = require('express');
const router = express.Router();

// router.get
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let fileContents = fs.readFileSync('./public/index.html', { encoding: 'utf8' });
    res.write(fileContents);
    res.end();
})

// router.post
router.post('/', (req, res) => {
    req.on('data', function (inputValue) {
        let query = inputValue.toString();
        let numberOfParagraphs = queryString.parse(query).numberOfParagraphs;
        let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
        let fileContents = fs.readFileSync('./public/index.html', { encoding: 'utf8' });
        fileContents = filesContents.replace('<article class="generated-text"></article>', loremIpsumText);
        res.setHeader('Content-Type', 'text/html');
        res.write(fileContents);
        res.end()
    });
});


module.exports = router;