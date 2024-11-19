function randomQuote(){
    var userNames=[
        "― Oscar Wilde",
        "― Frank Zappa",
        "― Mae West",
        "― Elbert Hubbard",
        "― Mahatma Gandhi"
    ]
    var text = [
        "“Be yourself; everyone else is already taken.”",
        "“So many books, so little time.”",
        "“You only live once, but if you do it right, once is enough.”",
        "“A friend is someone who knows all about you and still loves you.”",
        "“Live as if you were to die tomorrow. Learn as if you were to live forever.”"

    ]
    
    // 0-1 ex=>0.5    * 3 ==> 1.5 should zoom
    
    var num = Math.floor(Math.random() * userNames.length)
    



    
    document.getElementById("quoteOutput").innerHTML =userNames[num]
    document.getElementById("authorOutput").innerHTML =text[num]
}
