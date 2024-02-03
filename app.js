let quote = document.querySelector('.quote');
let newQuote = document.querySelector('#button');
let person = document.querySelector(".person");

const quotes = [
    {
        "quote": "The only way to do great work is to love what you do.",
        "person":  "Steve Jobs"
    },
    {
        "quote":  "Design is not just about making pretty things. Design is about making the right thing",
        "person":  "Donald Norman"
    },
    {
        "quote":"I think design is a form of communication, and I’m very interested in how we can use that to make the world a better place.",
        "person":  "Bill Gates"
    },
    {
        "quote": "I have not failed. I've just found 10,000 ways that won’t work." ,
        "person":"Paul Taylor"
    }
];

newQuote.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})