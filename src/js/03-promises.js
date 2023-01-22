import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.form'),
  submitButton: document.querySelector('.create-promises'),
  // valueInput: document.querySelector('first-delay.')
};
// const delayValue = 0;
// refs.valueInput.addEventListener('input', (e) =>
// delayValue = e.target.value)
const value = {};
refs.form.addEventListener('input', e => {
  value[e.target.name] = Number(e.target.value);
});

let promiseCounter = 1;

refs.submitButton.addEventListener('click', () => {
  setTimeout(() => {
    const intervalId = setInterval(() => {
      createPromise(promiseCounter, value.delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });

      if (promiseCounter === value.amount) {
        promiseCounter = 0;
        value.delay = 0;
        clearTimeout(intervalId);
      }

      promiseCounter += 1;
      value.delay += value.step;
    }, value.step);
  }, value.delay);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    }
    reject({ position, delay });
  });
}
