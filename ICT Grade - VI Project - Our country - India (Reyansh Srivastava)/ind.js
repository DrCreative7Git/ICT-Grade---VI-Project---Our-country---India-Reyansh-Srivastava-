function callQuiz(qn) {
    if (qn = 1) {
        var q1 = prompt("Who is the current Prime Minister of India? (2024 February) (Only lowercase!)")
        if (q1.includes("narendra") && q1.includes("modi")) {
            alert("You are correct! It's PM Narendra Modi!")
        }
        else {
            alert("You are incorrect! It's PM Narendra Modi, not " +  '"' + q1 + '"' + "!")
        }
    } else {
    }
}