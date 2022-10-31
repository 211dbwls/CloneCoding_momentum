const quotes = [
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "- Nelson Mandela",
    },
    {
        quote : "Life is either a daring adventure or nothing at all.",
        author : "- Helen Keller",
    },
    {
        quote : "Life is unfair, get used to it.",
        author : "- Bill Gates",
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "- Walt Disney",
    },
    {
        quote : "I find that the harder I work, the more luck I seem to have.",
        author : "- Thomas Jefferson",
    },
    {
        quote : "Opportunities don’t happen. You create them.",
        author : "- Chris Grosser",
    },
];
    
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;