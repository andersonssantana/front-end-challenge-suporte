const formulario = document.querySelector('form#conversion-from-new-model')[0];
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
formulario.append(selectCars);

const textArea = document.createElement('textarea');
Object.assign(textArea, {
  className: 'form-control',
  placeholder: 'Mensagem'
});

formulario.append(textArea);
