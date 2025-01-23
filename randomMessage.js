const messageObject = {
    love: [
        "you will meet you soulmate and get married.",
        "you will have a breakup.",
        "make more efforts in relationship for it to be fruitful."
    ],
    career: [
        "The promotion you have been waiting for is on the way.",
        "you will have bad fortune in your career.",
        "your hard work will be noticed by your superiors."
    ],
    health: [
        "pay great attention to your health.",
        "Nothing to worry about health.",
        "You may get really sick."
    ]
}

const randomPrediction = () => {
    const randomLoveIndex = Math.floor(Math.random() * 3);
    const randomCareerIndex = Math.floor(Math.random() * 3);
    const randomHealthIndex = Math.floor(Math.random() * 3);

    return `Heres is your Prediction\n Love: ${messageObject.love[randomLoveIndex]}\n Career: ${messageObject.career[randomCareerIndex]}\n Health: ${messageObject.health[randomHealthIndex]}\n `
}

console.log(randomPrediction())