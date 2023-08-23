function findTopWords(text) {
  // Remove line-breaks and ... then convert them to lowerCase.
  const cleanText = text.replace(/[^\w\s']/g, '').toLowerCase();

  // Split text into words
  const words = cleanText.split(/\s+/);

  // Create a new map object
  const wordFrequency = new Map();

  // Calculate each words repeats
  words.forEach(word => {
    if (wordFrequency.has(word)) {
      wordFrequency.set(word, wordFrequency.get(word) + 1);
    } else {
      wordFrequency.set(word, 1);
    }
  });

  // sort bu descending
  const sortedWords = [...wordFrequency.entries()].sort((a, b) => b[1] - a[1]);

  // find top3 words
  const topWords = sortedWords.slice(0, 3).map(entry => entry[0]).filter(word => word);

  return topWords;
}

const text = `In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;
const topWords = findTopWords(text);
console.log(topWords);