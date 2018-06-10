// individual question with answer list
function component(question, answerList) {
    this.question = question;
    this.answerList = answerList;
    this.render = function () {
        var outputString = "";

        // add question
        outputString.concat(this.question);

        // add dropdown with answers

        // let som = `<div>${myVar}</div>`;
        return this.question;
    };
}

componentList = [
    component("I am asking about ", ['myself','another person']),
    component("I need a ", ['minor operation','major operation', 'GP visit']),
    component("I am after ", ['something specific','general info']),
];

// update visible content.
function updateContent() {
    var parsed = new DOMParser().parseFromString(componentList[current].render(), "text/html");
    document.getElementById("content").innerHTML(parsed);
    current++;

}

var current = 0;
