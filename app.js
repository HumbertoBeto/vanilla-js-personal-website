//selectors
const colorThemeButton = document.querySelector('.dark-light-switch');

const body = document.body;

let navText = document.querySelectorAll('.navText');

const bioContainer = document.querySelector('#bio-container');

//event listeners
colorThemeButton.addEventListener('click', toggleColorTheme);

//functions
function toggleColorTheme(event) {
  const computedStyle = window.getComputedStyle(body);

  const curBackgroundColor = computedStyle.backgroundColor;
  const curFontColor = computedStyle.color;

  console.log('Background: ', curBackgroundColor);
  console.log('Font Color: ', curFontColor);

  if (curBackgroundColor === 'rgb(233, 223, 216)') {
    body.style.backgroundColor = '#000000';
    body.style.color = '#e9dfd8';
    bioContainer.style.borderColor = '#e9dfd8';
    navText.forEach((curText) => {
      curText.style.color = '#e9dfd8';
    });
  } else {
    body.style.backgroundColor = '#e9dfd8';
    body.style.color = '#251d1d';
    bioContainer.style.borderColor = '#251d1d';
    //navText.style.color = '#251d1d';
    navText.forEach((curText) => {
      curText.style.color = '#251d1d';
    });
  }
}
