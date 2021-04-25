const formulario = document.querySelector('.form-conversion__body > fieldset');
const selectCars = document.createElement('select');
Object.assign(selectCars, {className: 'choices__list choices__list--single'});

const optionsSelect = [
  'SUV',
  'Senda',
  'Hatch',
  'Pickup'
]

optionsSelect.map(option => {
  const clickableOption = document.createElement('option');
  Object.assign(clickableOption, {
    text: option,
    value: option
  })
  selectCars.add(clickableOption);
})
const divSelectCars = document.createElement('div');
Object.assign(divSelectCars, {className: 'form-group'});
divSelectCars.appendChild(selectCars);
formulario.appendChild(divSelectCars);

const textArea = document.createElement('textarea');
Object.assign(textArea, {
  className: 'form-control',
  placeholder: 'Mensagem'
});
const divTextArea  = document.createElement('div');
Object.assign(divTextArea, {className: 'form-group'});
divTextArea.appendChild(textArea);
formulario.appendChild(divTextArea);
