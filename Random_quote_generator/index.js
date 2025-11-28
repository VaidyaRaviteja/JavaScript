const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Believe you can and you're halfway there.",
    "Do what you can, with what you have, where you are.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Happiness depends upon ourselves.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The best way to predict the future is to create it.",
    "Don’t watch the clock; do what it does. Keep going."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generatequote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomidx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomidx)) continue
        const quote = quotes[randomidx]

        quoteElement.innerHTML = quote;
        usedIndexes.clear(randomidx)
        break
    }
}