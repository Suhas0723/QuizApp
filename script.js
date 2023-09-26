main = document.getElementById('main');

top_div = document.getElementById('top_div');

title = document.createElement('h1');
title.textContent = "HTML Quiz Challenge";

subtext = document.createElement('h5');
subtext.textContent = "Try to answer the following questions";

startBtn = document.createElement('button');
startBtn.textContent = "Start";
startBtn.classList = "btn btn-primary";

main.append(title, subtext, startBtn);

startBtn.addEventListener('click', startQuiz);

scores = 0;

function displayQuestions(number, question, op1, op2, op3, op4)
{
    top_div.classList = "bg-secondary w-25 mt-3 p-3 border rounded shadow"
    main.replaceChildren();

    questionTitle = document.createElement('h2');
    questionTitle.textContent = question;

    btn1 = document.createElement('button');
    btn1.textContent = op1;
    btn1.classList = "btn btn-primary mr-2"

    btn2 = document.createElement('button');
    btn2.textContent = op2;
    btn2.classList = "btn btn-primary mr-2"

    btn3 = document.createElement('button');
    btn3.textContent = op3;
    btn3.classList = "btn btn-primary mr-2"

    btn4 = document.createElement('button');
    btn4.textContent = op4;
    btn4.classList = "btn btn-primary mr-2"

    message = document.createElement('h3');
    message.textContent = "Wrong Answer";

    main.append(questionTitle);

    ul = document.createElement('ul');
    ul.classList = 'list-group';

    li1 = document.createElement('li');
    li1.classList = 'list-group-item';

    li2 = document.createElement('li');
    li2.classList = 'list-group-item';

    li3 = document.createElement('li');
    li3.classList = 'list-group-item';

    li4 = document.createElement('li');
    li4.classList = 'list-group-item';

    li1.append(btn1);
    li2.append(btn2);
    li3.append(btn3);
    li4.append(btn4);
    ul.append(li1, li2, li3, li4);

    main.append(ul);

    if (number == 1) 
    {
        btn1.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn2.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn3.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn4.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(2, 'How many tags are in a regular element?', '5', '2', '6', '1');
        });
    }

    if (number == 2)
    {
        btn1.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn2.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(3, 'What is the difference between an opening tag and a closing tag?', 'Opening tag has a / in front', 'There is no difference', 'Closing tag has a / in front', 'None of the Above');
        });
    
        btn3.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn4.addEventListener('click', function()
        {
            main.append(message);
        });
    }

    if (number == 3)
    {
        btn1.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn2.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn3.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(4, '< br  / > What type of tag is this?', 'A break tag', 'broken tag', 'bridge tag', 'None of the Above');
        });
    
        btn4.addEventListener('click', function()
        {
            main.append(message);
        });
    }

    if (number == 4)
    {
        btn1.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(5, '< body > Is this an opening tag or a closing tag?', 'Opening', 'Closing', 'Middle', 'None of the Above');
        });
    
        btn2.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn3.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn4.addEventListener('click', function()
        {
            main.append(message);
        });
    }

    if (number == 5)
    {
        btn1.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(6, '< / body > Is this an opening tag or a closing tag?', 'Opening', 'Closing', 'Middle', 'None of the Above');
        });
    
        btn2.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn3.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn4.addEventListener('click', function()
        {
            main.append(message);
        });
    }

    if (number == 6)
    {
        btn1.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn2.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(7, 'Where is the meta tag only found?', 'Middle Page', 'Last Page', 'Home Page', 'Fifth Page');
        });
    
        btn3.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn4.addEventListener('click', function()
        {
            main.append(message);
        });
    }

    if (number == 7)
    {
        btn1.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn2.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn3.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(8, 'Which is the correct way to tag an image?', 'None', 'Src=”image.jpg/gif” alt=”type some text”', 'src=”image.jpg/gif” alt=”type some text”', 'Both');
        });
    
        btn4.addEventListener('click', function()
        {
            main.append(message);
        });
    }

    if (number == 8)
    {
        btn1.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn2.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn3.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(9, 'What is an element that does not have a closing tag called?', 'Open Element', 'Closed Element', 'Tag', 'Empty Element');
        });
    
        btn4.addEventListener('click', function()
        {
            main.append(message);
        });
    }

    if (number == 9)
    {
        btn1.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn2.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn3.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn4.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            displayQuestions(10, 'Which of the following is an example of an empty element?', '< IMG / >', '< img  >', '< >', '< img / >');
        });
    }

    if (number == 10)
    {
        btn1.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn2.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn3.addEventListener('click', function()
        {
            main.append(message);
        });
    
        btn4.addEventListener('click', function()
        {
            scores += 10;
            scoresDisplay.textContent = "Scores: " + scores;
            scoresDisplay.classList = "text-light";
            main.replaceChildren();
            clearInterval(timeInterval);
            h3 = document.createElement('h3');
            h3.textContent = "Quiz is Over!";
            main.append(h3);
        });
    }


    

    

}

function startQuiz()
{
    main.replaceChildren();

    time = document.createElement('h2');
    top_div.append(time);

    seconds = 61;
    timeInterval = setInterval(function()
    {
        seconds--;
        time.textContent = "Time: " + seconds;
    }, 1000);

    scoresDisplay = document.createElement('h2');
    scoresDisplay.textContent = "Scores: " + scores;
    scoresDisplay.classList = "text-light";

    top_div.append(scoresDisplay);
    displayQuestions(1, 'What does HTML stand for?', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hello Markup Language', 'HyperText Markup Language');
}
