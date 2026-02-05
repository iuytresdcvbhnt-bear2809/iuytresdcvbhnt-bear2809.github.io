document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    initContactForm();
});

function initQuiz() {
    const startBtn = document.getElementById('start-quiz');
    const intro = document.getElementById('quiz-intro');
    const questions = document.querySelectorAll('.quiz-question');
    const result = document.getElementById('quiz-result');

    let currentQuestion = 0;

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            intro.style.display = 'none';
            questions[0].classList.add('active');
        });
    }

    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const resultLetter = e.target.dataset.result;

            // Masquer la question actuelle
            questions[currentQuestion].classList.remove('active');

            // Passer à la suivante ou au résultat
            currentQuestion++;

            if (currentQuestion < questions.length) {
                questions[currentQuestion].classList.add('active');
            } else {
                showResult(resultLetter); // Pour simplifier, la dernière réponse détermine le résultat dans cette version simple
            }
        });
    });

    function showResult(letter) {
        result.style.display = 'block';
        result.classList.add('active');

        // Dictionnaire des résultats
        const results = {
            'I': { title: 'Infusion Vanille', desc: 'Vous êtes une personne douce et réconfortante.' },
            'U': { title: 'Ube Violet', desc: 'Vous aimez sortir des sentiers battus !' },
            'Y': { title: 'Yuzu', desc: 'Pétillant(e) et plein(e) de peps !' },
            'C': { title: 'Chocolat Noir', desc: 'Intense, élégant(e) et indémodable.' },
            'E': { title: 'Érable', desc: 'Authentique et chaleureux(se).' },
            'R': { title: 'Rose & Framboise', desc: 'Romantique et sophistiqué(e).' }
        };

        const data = results[letter] || results['I']; // Fallback

        document.getElementById('result-letter').textContent = letter;
        document.getElementById('result-title').textContent = data.title;
        document.getElementById('result-desc').textContent = data.desc;

        // Scroll to result
        result.scrollIntoView({ behavior: 'smooth' });
    }
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulation d'envoi
            const btn = form.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Envoi en cours...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Merci ! Votre message a été envoyé à l\'équipe de L\'Atelier.');
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
}
