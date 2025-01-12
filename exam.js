const infos = [
    {
        question: "What is the primary function of a CPU?",
        options: ["Store data", "Process instructions", "Display graphics", "Provide power"],
        answer: "Process instructions"
    },
    {
        question: "Which component is responsible for rendering images on the screen?",
        options: ["CPU", "RAM", "GPU", "Motherboard"],
        answer: "GPU"
    },
    {
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read-Only Memory", "Redundant Array of Memory", "Rapid Access Memory"],
        answer: "Random Access Memory"
    },
    {
        question: "Which component connects all other components in a computer?",
        options: ["CPU", "GPU", "Motherboard", "Power Supply"],
        answer: "Motherboard"
    },
    {
        question: "What is the main function of a power supply unit (PSU)?",
        options: ["Store data", "Convert AC to DC", "Render graphics", "Process instructions"],
        answer: "Convert AC to DC"
    }
];


let currentQuestionIndex = 0;
let score = 0;


function displayQuestion() {
    const question = infos[currentQuestionIndex];
    document.getElementById("Q").innerText = question.question;

    const optionsContainer = document.getElementById("O");
    optionsContainer.innerHTML = ""; 
    for (let i = 0; i < question.options.length; i++) {
        const OPT = question.options[i];
        optionsContainer.innerHTML += `<button onclick="checkAnswer('${OPT}')">  ${OPT}  </button>`;
    }
}

function checkAnswer(selectedOption) {
    const question = infos[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < infos.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("O").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score is ${score} out of ${infos.length}.</p>
        <button onclick="resetQuiz()">Retry</button>
    `;
    document.getElementById("Q").innerHTML = " "
}

function resetQuiz() {
    currentQuestionIndex = 0; 
    score = 0;
    displayQuestion();

}