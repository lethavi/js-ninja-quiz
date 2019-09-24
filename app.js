const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  // Check Answer
  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  // Show result
  scrollTo(0, 0); // After hit button to submit, it will scroll to top of the page
  result.classList.remove('d-none');
  // Animate result use setInterval
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${score}%`;
    if (output === score) {
      clearInterval(timer);
    }
    else {
      output++;
    }
  }, 20);
});