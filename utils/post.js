function calculateReadingTime(post) {
    const numOfWords = post.split(" ").length;

    // assuming the average person reads 200 words per minute
    const wordsPerMinute = numOfWords / 200;
    return Math.round(wordsPerMinute) === 0 ? 1 : Math.round(wordsPerMinute);
}

module.exports = { calculateReadingTime };
