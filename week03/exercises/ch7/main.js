const quiz = [{
        name: "Superman",
        realName: "Clark Kent"
    },
    {
        name: "Wonderwoman",
        realName: "Dianna Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
];

const view = {
    start: document.getElementById('start'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    },
};

const game = {
    start(quiz) {
        view.hide(view.start);
        this.score = 0;
        this.questions = [...quiz];
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        this.gameOver();
    },
    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', {
                'class': 'correct'
            });
            alert('Correct!');
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, {
                'class': 'wrong'
            });
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
    }
}

view.start.addEventListener('click', () => game.start(quiz), false);
//game.start(quiz);