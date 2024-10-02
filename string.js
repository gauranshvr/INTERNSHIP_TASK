const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSentence(sentence) {
    const wordCount = sentence.split(' ').length;
    console.log("Word Count:", wordCount);

    const reversedSentence = sentence.split(' ').reverse().join(' ');
    console.log("Reversed Sentence:", reversedSentence);

    const hyphenatedSentence = sentence.split(' ').join('-');
    console.log("Hyphenated Sentence:", hyphenatedSentence);
}
rl.question('Please enter a sentence: ', (inputSentence) => {
    processSentence(inputSentence);
    rl.close();
});
