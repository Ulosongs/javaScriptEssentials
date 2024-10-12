let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    document.getElementById("inputText").value = testText;

    document.getElementById("output").value = "";
    startTime = new Date().getTime();

    let button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest; 
}

function endTest() {
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;

    let elapsedTime = (endTime - startTime) / 1000;
    let userTypedText = document.getElementById("userInput").value;
    let typedWords = userTypedText.split('/\s+/').filter(function (word) {
        return word !== "";
    }).length;

    let wpm = 0;

    if (elapsedTime !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / elapsedTime) * 60);
    }

    let output = document.getElementById("output");

    output.innerHTML = `<h2>Typing Test Results:</h2>
    <p>Total Length: ${userTypedText.length}</p>
    <p>Words Typed: ${typedWords}</p>
    <p>Time Elapse: ${elapsedTime.toFixed(2)} seconds</p>
    <p>Words Per Minute (WPM): ${wpm}</p>`;

    let button = document.getElementById("btn");
    button.innerHTML = "Start time";
    button.onclick = startTest;
}