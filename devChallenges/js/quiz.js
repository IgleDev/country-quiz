window.addEventListener('load', function () {  
    $(document).ready(function () {
        let ActualQuestionIndex = 0;
        let score = 0;
        let questions = [
            {
                pregunta : 'Capital de Spain',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas: ['Madrid', 'Barcelona', 'Santiago', 'Sevilla'],
                respuestaCorrecta : 'Madrid'
            },
            {
                pregunta : 'Capital de Finland',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['Oslo', 'Reikiavik', 'Helsinki', 'Paris'],
                respuestaCorrecta : 'Helsinki'
            },
            {
                pregunta : 'Capital of Japan',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['Shangái', 'Berlín', 'Reikiavik', 'Tokyo'],
                respuestaCorrecta : 'Tokyo'
            },
            {
                pregunta : 'Capital of France',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['Oslo', 'Berlín', 'Sevilla', 'Paris'],
                respuestaCorrecta : 'Paris'
            },
            {
                pregunta : 'Capital of Portugal',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['Porto', 'Santiago', 'Dragao', 'Lisboa'],
                respuestaCorrecta : 'Lisboa'
            },
            {
                pregunta : 'Capital of England',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['London', 'Manchester', 'Leichester', 'Paris'],
                respuestaCorrecta : 'London'
            },
            {
                pregunta : 'Capital of Germany',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['Dubai', 'Berlín', 'Madrid', 'Viena'],
                respuestaCorrecta : 'Berlín'
            },
            {
                pregunta : 'Capital of Uruguay',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['Montevideo', 'Buenos Aires', 'Sofia', 'Lima'],
                respuestaCorrecta : 'Montevideo'
            },
            {
                pregunta : 'Capital of China',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['London', 'Shangái', 'Tokyo', 'Pekín'],
                respuestaCorrecta : 'Pekín'
            },
            {
                pregunta : 'Capital of Island',
                indexRespuesta : ['A', 'B', 'C', 'D'],
                respuestas : ['Helsinki', 'Mónaco', 'Reikiavik', 'Luxemburgo'],
                respuestaCorrecta : 'Reikiavik'
            },
        ]
    
        showQuestion(questions, ActualQuestionIndex, score);

        function showQuestion(questions, ActualQuestionIndex, score){
            let question = questions[ActualQuestionIndex];
    
            let questionHTML = 
            `
            <p>${ActualQuestionIndex + 1 + '. ' + question.pregunta}</p>
            <div class="container-btns">
                <button value="${question.respuestas[0]}"><span class="indexQuestion">${question.indexRespuesta[0]}</span>${question.respuestas[0]}<span class="questionMark"></span></button>
                <button value="${question.respuestas[1]}"><span class="indexQuestion">${question.indexRespuesta[1]}</span>${question.respuestas[1]}<span class="questionMark"></span></button>
                <button value="${question.respuestas[2]}"><span class="indexQuestion">${question.indexRespuesta[2]}</span>${question.respuestas[2]}<span class="questionMark"></span></button>
                <button value="${question.respuestas[3]}"><span class="indexQuestion">${question.indexRespuesta[3]}</span>${question.respuestas[3]}<span class="questionMark"></span></button>
            </div>
            `;
    
            $('.questions').append(questionHTML);
            $('.container-card').css('height', '57%')
    
            rigthQuestion(questions, ActualQuestionIndex, score);
        }
    
        function rigthQuestion(questions, ActualQuestionIndex){
            let question = questions[ActualQuestionIndex];
    
            $('.container-btns button').click(function (e) { 
                e.preventDefault();
                let questionClick = $(this).val();
                let questionCorrect = question.respuestaCorrecta;
                
                if(questionClick === questionCorrect){
                    $(this).css('background-color', '#60BF88')
                    .css('color', 'white')
                    .css('border', '2px solid #60BF88');
                    $(this).find('.questionMark').append('<i class="fa-regular fa-circle-check"></i>');
                    $('.container-btns button').attr('disabled', 'disabled');
                    $('.container-card').append('<div class="container-btn"><button id="nextQuestion">Next</button></div>');
                    score++;
                    $('#score').html(score);
                    $('#nextQuestion').click(function (e) { 
                        e.preventDefault();
                        newQuestion(questions, ActualQuestionIndex, score);
                    });
                }else{
                    $(this).css('background-color', '#EA8282')
                    .css('color', 'white')
                    .css('border', '2px solid #EA8282');
                    $(this).find('.questionMark').append('<i class="fa-regular fa-circle-xmark"></i>');
                    $('.container-btns button[value="' + questionCorrect + '"]').css('background-color', '#60BF88')
                                                                                .css('color', 'white')
                                                                                .css('border', '2px solid #60BF88');
                    $('.container-btns button[value="' + questionCorrect + '"]').find('.questionMark').append('<i class="fa-regular fa-circle-check"></i>')
                    $('.container-btns button').attr('disabled', 'disabled')
                    $('.container-card').append('<div class="container-btn"><button id="results">Results</button></div>');
                    $('#results').click(function (e) { 
                        e.preventDefault();
                        seeResults()
                    });
                }
            });
        }
    
        function newQuestion(questions, ActualQuestionIndex){
            ActualQuestionIndex++;
            $('.questions').empty();
            $('.container-btn').empty();
            if(ActualQuestionIndex >= questions.length){
                seeResults();
            }else{
                showQuestion(questions, ActualQuestionIndex);
            }
        }

        function seeResults(){
            $('.questions').empty();
            $('.questions').css('margin-top', '0%').css('padding' , '0%');
            $('.container-btn').empty();
            $('.container-card img').css('float' , 'none').css('margin-left' , '26%').css('width','50%');
            $('.container-card img').attr('src' , 'img/25485.jpg');
            $('.container-card').append('<div class="questionResults"></div>')
            $('.questionResults').append('<h1>Results</h1>');
            $('.questionResults').append('<p>Your got <span class"scoreTotal">' + score + '</span> correct answer</p>')
            $('.questionResults').append('<div class="container-btn-result"></div>')
            $('.container-btn-result').append('<button id="tryAgain">Try Again</button>');
        }

        $(document).on('click', '#tryAgain', function (e) { 
            e.preventDefault();
            reset();
            showQuestion(questions, ActualQuestionIndex);
        });

        function reset(){
            ActualQuestionIndex = 0;
            score = 0;
            $('#score').html(score);
            $('.questionResults').css('display' , 'none');
            $('.container-card img').css('margin-left' , '0%').css('float','right').css('width' , '5vw');
            $('.questions').css('margin-top', '5%').css('padding' , '5%');
            $('.container-card img').attr('src' , 'img/18915856.jpg')
        }

    });
})