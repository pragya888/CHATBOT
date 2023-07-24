function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input=="Hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "How are you"|| input=="how are you") {
        return "I'm fine!What about you?";
    } 
    else if(input=="Heart! for help"){
        return "AWW! Thanks for Heart";
    }
    else if(input=="I LOVE YOU"){
        return "Sorry! m just a bot";
    }
    else {
        return "Try asking something else!";
    }
}