const addOption = document.getElementById('addOption');
const createOption = document.getElementById('createOption');
const showHideOptions = document.getElementById('showHideOptions');
const options = document.getElementById('options');

let optionCount = 5;
let itemLen = 0;

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

  itemLen = itemLen - 1;
  remove.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      if (itemLen <= 1) {
        optionCount = 5;
        itemLen = 1;
      } else {
        itemLen = remove.length;
        optionCount = 5;
        optionCount = optionCount + itemLen;
      }
      e.currentTarget.parentNode.remove();
    });
  });
};
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
  input.name = 'option' + optionCount;
  input.placeholder = 'Option ' + optionCount;

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
