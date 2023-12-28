var quote =[
    {'quote' :"'So many books, so little time.'",
     'Auther' : "--Frank Zappa"
    },

    {'quote' :"'Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.'",
     'Auther' : "--Roy T. Bennett, The Light in the Heart"
    },
    
    {'quote' :"'Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.'",
     'Auther' : "--Roy T. Bennett, The Light in the Heart"
    },

    {'quote' :"'Be yourself; everyone else is already taken.'",
    'Auther' : "--Oscar Wilde"
    },

    {'quote' :"'You only live once, but if you do it right, once is enough.'",
    'Auther' : "--Mae West"
    },

    {'quote' :"'I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'",
    'Auther' : "--Maya Angelou"
    },

    {'quote' :"'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
    'Auther' : "--Albert Einstein"
    },

]


function getQuotes(){
    var num = Math.floor(Math.random()*quote.length)

    document.getElementById("quote").innerHTML=quote[num].quote;
    document.getElementById("Auther").innerHTML=quote[num].Auther;

}