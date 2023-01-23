import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.form'),
  submitButton: document.querySelector('.create-promises'),
  valueInput: document.querySelector('.first-delay'),
};

refs.valueInput.addEventListener('input', e => {
  let delayValue = Number(e.target.value);
});

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  let {
    elements: { delay, step, amount },
  } = e.currentTarget;
  delayValue = delay.value;

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delayValue)
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

    delayValue = Number(step.value) + Number(delayValue);
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
