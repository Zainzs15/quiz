const quizzes = {
  chemistry: [
      {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
        {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
          {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
            {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
              {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
                {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
                  {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
                    {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
                      {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
                        {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
                          {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},  {q: "(the branch of chemistry that deals with hydrocarbon:)", options:["industrial chemistry","inorganic chemistry","organic chemistry","physical chemistry"], answer:3},
                          
      {q: "Chemistry Q2 (placeholder)", options:["A","B","C","D"], answer:1}
      // 👉 Add 30 questions from the textbook here
  ],
  physics: [
      {q: "Physics Q1 (placeholder)", options:["A","B","C","D"], answer:2}
      // 👉 Add 30 questions
  ],
  maths: [
      {q: "Maths Q1 (placeholder)", options:["A","B","C","D"], answer:1}
      // 👉 Add 30 questions
  ],
  computer: [
      {q: "Computer Q1 (placeholder)", options:["A","B","C","D"], answer:3}
      // 👉 Add 30 questions
  ]
};

function loadQuiz(subject){
    const quizContainer = document.getElementById('quiz');
    const title = document.getElementById('quizTitle');
    title.innerText = subject.toUpperCase() + " QUIZ";
    quizContainer.innerHTML = '';

    quizzes[subject].forEach((item, index) => {
        const qDiv = document.createElement('div');
        qDiv.innerHTML = <div class="question">${index+1}. ${item.q}</div>;
        
        const optDiv = document.createElement('div');
        optDiv.classList.add('options');

        item.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                Array.from(optDiv.children).forEach(b => b.disabled = true);
                if(i === item.answer){
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                    optDiv.children[item.answer].classList.add('correct');
                }
            });
            optDiv.appendChild(btn);
        });

        qDiv.appendChild(optDiv);
        quizContainer.appendChild(qDiv);
    });
}