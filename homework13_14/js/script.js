'use strict;'

$(function () {
    var questionsAndAnswers = {
        title: 'Programming test',
        questions: [
            {
                title: 'Which languages have strict types?',
                answers: [
                    {
                        id: 11,
                        text: 'Javascript',
                        correct: false
                    },
                    {
                        id: 12,
                        text: 'Go',
                        correct: false
                    },
                    {
                        id: 13,
                        text: 'Python',
                        correct: false
                    },
                    {
                        id: 14,
                        text: 'C++',
                        correct: true
                    }
                ]
            },
            {
                title: 'Which types do not exist in Javascript?',
                answers: [
                    {
                        id: 21,
                        text: 'short',
                        correct: true
                    },
                    {
                        id: 22,
                        text: 'integer',
                        correct: false
                    },
                    {
                        id: 23,
                        text: 'boolean',
                        correct: false
                    },
                    {
                        id: 24,
                        text: 'undefined',
                        correct: false
                    }
                ]
            },
            {
                title: 'Which of the tags existed before HTML5 specification?',
                answers: [
                    {
                        id: 31,
                        text: 'header',
                        correct: false
                    },
                    {
                        id: 32,
                        text: 'footer',
                        correct: false
                    },
                    {
                        id: 33,
                        text: 'aside',
                        correct: false
                    },
                    {
                        id: 34,
                        text: 'div',
                        correct: true
                    }
                ]
            }
        ],
        submitTitle: 'Test my results'
    };

    localStorage.setItem('questionsAndAnswers', JSON.stringify(questionsAndAnswers));
    var persistedTestObject = JSON.parse(localStorage.getItem('questionsAndAnswers'));

    var headerTemplate = _.template(document.getElementById('header_template').innerHTML);
    var header = headerTemplate(persistedTestObject);

    var questionTemplate = _.template(document.getElementById('question_template').innerHTML);
    var questions = questionTemplate(persistedTestObject);

    var submitTemplate = _.template(document.getElementById('submit_template').innerHTML);
    var submit = submitTemplate(persistedTestObject);

    var wrapper = $('.wrapper');
    wrapper.append(header).append(questions).append(submit);

    var result = $('.result');

    var $submitButton = $('#submit');
    $submitButton.on('click', function () {
        var maxResult = persistedTestObject.questions.length;
        var userResult = 0;
        persistedTestObject.questions.forEach(function (question) {
            var correctAnswer = true;
            question.answers.forEach(function (answer) {
                var answerCheckbox = $('#' + answer.id)[0];
                correctAnswer &= ((answer.correct && answerCheckbox.checked) || (!answer.correct && !answerCheckbox.checked));
            });
            if (correctAnswer) {
                userResult++;
            }
        });

        result.css({
            'display' : 'flex'
        })

        result.html('You have scored ' + userResult + ' out of ' + maxResult + '<div class="btn_result">OK</div>');
        $('.btn_result').on('click', function(){
            result.css({
                'display': 'none'
            })
            $('[type=checkbox]').prop('checked', false);

        })



    });
})
