var quotes = [
    {
        quote:'"The best revenge is massive success."',
        quotemaster:"--Frank Sinatra"
    },
    {
        quote:'"Be yourself; everyone else is already taken"',
        quotemaster:"--Oscar Wilde"
    },
    {
        quote:'"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."',
        quotemaster:"--Marilyn Monroe"
    },
    {
        quote:'"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."',
        quotemaster:"--Albert Einstein"
    },
    {
        quote:'"So many books, so little time."',
        quotemaster:"--Frank Zappa"
    },
    {
        quote:'"A room without books is like a body without a soul."',
        quotemaster:"Marcus Tullius Cicero"
    },
    {
        quote:'"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind."',
        quotemaster:"--Bernard M. Baruch"
    },
    {
        quote:'"You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth"',
        quotemaster:"--William W. Purkey"
    },
    {
        quote:'"You only live once, but if you do it right, once is enough."',
        quotemaster:"--Mae West"
    },
    {
        quote:'"Be the change that you wish to see in the world."',
        quotemaster:"--Mahatma Gandhi"
    },
]

function randomQuote(){
    var random = Math.floor(Math.random() * quotes.length)
    document.getElementById("quote").style.setProperty("display", "flex", "important")
    document.getElementById("qholder").innerHTML = quotes[random].quote;
    document.getElementById("qmaster").innerHTML = quotes[random].quotemaster;
}
