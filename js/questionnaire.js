// individual question with answer list
function component(question, answerList) {
    this.question = question;
    this.answerList = answerList;
    this.render = function () {
        var outputString = `<li class="question-list__item">
                    <label for="answerOne" class="question">`


        // add question
        outputString = outputString.concat(
            `<span class="question__label">${this.question}</span>
                        <select class="question__input">`
        );

        // add dropdown with answers

        this.answerList.forEach(function (answer) {
            outputString = outputString.concat(
                `<option value="volvo">${answer}</option>`
            );
        });

        outputString = outputString.concat(`
    </select> </label> </li>` );

        return outputString;
    };
    this.change = function (event) {
        debugger;
    }
}

componentList = [
    new component("I am asking about ", ['another person', 'myself']),
    new component("I need a ", ['minor operation','major operation', 'GP visit']),
    new component("I am after ", ['something specific','general info']),
    new component("I am ", ['65 or under','over 65']),
    new component("I have insurance ", ['Yes','No']),
    new component("I am able to arrange transport for myself to get to appointments ", ['Yes','No']),
];

// update visible content.
function updateContent(current) {
    // should draw the infograph if out of questions
    if (current >= componentList.length) {
        window.location.href = './image.html';
    return;
}
    // parse each render method within each component and add to DOM
    var parsed = new DOMParser().parseFromString(componentList[current].render(), "text/html");
    parsed.querySelector('select').addEventListener('change', () => updateContent(current + 1));
    document.getElementById("question-list").appendChild(parsed.body);
    // current++;
}

// var current = 0;
document.getElementById("initial_button").addEventListener("click", () => updateContent(0));