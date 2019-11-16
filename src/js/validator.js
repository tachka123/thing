const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

export default function() {
  form.addEventListener('submit', submitForm);
  inputs.forEach(input => {
    input.addEventListener('blur', validation);
    input.addEventListener('input', validation);
  });
}

function validation(e) {
  const span = e.target.parentNode.querySelector('span');
  setTimeout(() => {
    if (!e.target.value) {
      span.style.display = 'block';
    } else {
      span.style.display = 'none';
    }
  }, 200);
}

function submitForm(e) {
  e.preventDefault();
  const processValidation = submitValidation();
  if (processValidation.length) {
    processValidation.forEach(elem => {
      elem.parentNode.querySelector('span').style.display = 'block';
    });
    return;
  }
  form.innerHTML = 'Success'; // тут будет логика отправки данных на сервер
}

function submitValidation() {
  const listOfInputs = Array.from(inputs);
  return listOfInputs.filter(elem => !elem.value);
}
