const addOption = document.getElementById('addOption');
const createOption = document.getElementById('createOption');
const showHideOptions = document.getElementById('showHideOptions');
const options = document.getElementById('options');
const option = document.querySelectorAll('.option');

let optionCount = option.length + 1;

addOption.addEventListener('click', (e) => {
  e.preventDefault();
  showSection();
  let newInputOption = createNewOptions();
  options.appendChild(newInputOption);
  removeExtraOption();
  itemLen = document.querySelectorAll('.remove').length;
});

const removeExtraOption = () => {
  const remove = document.querySelectorAll('.remove');

  remove.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      console.log(optionCount);
      optionCount = 3 + countNewInput();
      const checkOptionID = document.getElementById('option' + optionCount);
      if (checkOptionID) {
        optionCount += 1;
      }
      e.currentTarget.parentNode.remove();
    });
  });
};

const countNewInput = () => {
  let newInput = document.querySelectorAll('.remove');
  return newInput.length;
};
/**
 * @returns Element (new input element)
 */
const createNewOptions = () => {
  let div = document.createElement('div');
  let input = document.createElement('input');
  let cross = document.createElement('span');
  div.style.position = 'relative';
  div.id = 'option' + optionCount;
  cross.innerHTML = 'X';
  cross.classList.add('remove');

  /*Input text*/
  input.type = 'text';
  input.name = 'options';
  input.placeholder = 'Option ' + optionCount;
  input.classList.add('option');

  /*input count ++*/
  optionCount++;

  div.appendChild(cross);
  div.appendChild(input);

  return div;
};

/**
 * Show Hide Options
 */

showHideOptions.addEventListener('click', () => {
  showHideSection();
});

const showHideSection = () => {
  if (options.classList.contains('hide')) {
    options.classList.remove('hide');
    options.classList.add('show');
    showHideOptions.innerHTML =
      'Enter your Options (Click me to hide options section)';
  } else {
    showHideOptions.innerHTML = 'Click me to show options >>';
    options.classList.add('hide');
    options.classList.remove('show');
  }
};

const showSection = () => {
  if (options.classList.contains('hide')) {
    options.classList.remove('hide');
    options.classList.add('show');
    showHideOptions.innerHTML =
      'Enter your Options (Click me to hide options section)';
  }
};

/**
 * remove Extra options
 */
