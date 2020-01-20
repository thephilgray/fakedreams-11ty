module.exports = {
  getNextHeadingLevel(currentLevel) {
    return parseInt(currentLevel, 10) + 1;
  },
  getReadingTime(text) {
    // should account for difficulty too
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  },
  getYear(){
    return new Date().getFullYear();
  },
  getExcerpt(content = '', length = 25){
    // https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
    // return content.replace(/(<([^>]+)>)/ig,"").split('\n')[0]; // get first paragraph
    return content.replace(/(<([^>]+)>)/ig,"").split(' ').slice(0, length).join(' ') + '...'; // get first x words
  }
};
