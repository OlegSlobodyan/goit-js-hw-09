import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.form'),
  submitButton: document.querySelector('.create-promises'),
  valueInput: document.querySelector('.first-delay')
};
let delayValue = 0;
refs.valueInput.addEventListener('input', (e) =>
delayValue = e.target.value)
const value = {};
refs.form.addEventListener('input', e => {
  value[e.target.name] = Number(e.target.value);

});

console.log(value);

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
    let {
      elements: { delay, step, amount },
    } = e.currentTarget;
  console.log(` ${delay.value}, ${step.value}, ${amount.value}`);
    value.delay = delay.value;
  
  for (let i = 1; i <= amount.value; i += 1) {
    console.log(i);
    createPromise(i, value.delay)
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
    // delay += step.value;
    value.delay = Number(step.value) + Number(value.delay);

  }
  // if (promiseCounter === value.amount) {
  //   promiseCounter = 0;
  //   value.delay = 0;
  //   clearTimeout(intervalId);
  // }


  
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
// console.log('qwqweq');