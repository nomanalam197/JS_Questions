let s=prompt("abc xyz fhfff");
var reverseWords = function(s) {
    const words = s.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');    
};
console.log(reverseWords(s))