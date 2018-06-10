// individual question with answer list
function component(question, answerList) {
    this.question = question;
    this.answerList = answerList;
    this.render = function () {
        var outputString = "";

        // add question
        outputString.concat(this.question);

        // add dropdown with answers

        for (answer in this.answerList) {
            outputString.concat(
                ``
            );
        }

        outputString.concat();

        return this.question;
    };
}

componentList = [
    new component("I am asking about ", ['myself','another person']),
    new component("I need a ", ['minor operation','major operation', 'GP visit']),
    new component("I am after ", ['something specific','general info']),
];

// update visible content.
function updateContent() {
    // should draw the infograph if out of questions
    if (current > componentList.length) return;

    // parse each render method within each component and add to DOM
    var parsed = new DOMParser().parseFromString(componentList[current].render(), "text/html");
    document.getElementById("content").appendChild(parsed.body);
    current++;
}

var current = 0;
document.getElementById("initial_button").addEventListener("click", () => updateContent());