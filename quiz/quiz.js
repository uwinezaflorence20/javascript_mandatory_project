class Question {
    constructor(question, options, correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}

class QuizGame {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.currentQuestionIndex = 0;
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        console.log(question.question);
        question.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
        const userAnswer = console.log("Enter your answer (1, 2, 3, or 4): ");
        this.checkAnswer(parseInt(userAnswer));
    }

    checkAnswer(userAnswer) {
        const question = this.questions[this.currentQuestionIndex];
        if (userAnswer === question.correctAnswer) {
            console.log("Correct!");
            this.score++;
        } else {
            console.log("Incorrect!");
        }
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.displayFinalScore();
        }
    }

    displayFinalScore() {
        console.log(`Your final score is: ${this.score}/${this.questions.length}`);
    }

    play() {
        console.log("Welcome to the Quiz Game!");
        this.displayQuestion();
    }
}

// questions
const questions = [
    new Question("What is my name?", ["fillette", "Pasi", "florence", "uwineza"], 2),
    new Question("how many province in Rwanda", ["1", "10", "7", "5"], 3),
    new Question("what is the largest country in world'?", ["russia", "rwanda", "usa", "china"], 1)
];
const quiz = new QuizGame(questions);
quiz.play();

