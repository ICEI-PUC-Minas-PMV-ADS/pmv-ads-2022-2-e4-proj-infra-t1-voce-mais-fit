function normalize(text) {
    text = text.toLowerCase();

    let withGrammarMark = 'ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç';
    let withoutGrammarMark = 'AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc';

    for (let i = 0; i < withoutGrammarMark.length; i++) {
        text = text.replace(withGrammarMark[i], withoutGrammarMark[i]);
    }

    text = text.replace(/-/g, ' ');
    text = text.replace(/'/g, " ");

    return text;
}

function generateRandomText(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports.normalize = normalize;
module.exports.generateRandomText = generateRandomText;