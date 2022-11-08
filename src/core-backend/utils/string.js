function normalize(text) {
    text = text.toLowerCase();

    let withGrammarMark = 'ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç';
    let withoutGrammarMark = 'AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc';

    for (let i = 0; i < withoutGrammarMark.length; i++) {
        text = text.replace(withGrammarMark[i], withoutGrammarMark[i]);
    }

    text = text.replace('-', ' ');
    text = text.replace("'", " ");

    return text;
}

module.exports.normalize = normalize;