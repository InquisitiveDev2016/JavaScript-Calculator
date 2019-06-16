let zeroBtn = document.getElementById('calc-zero');
let oneBtn = document.getElementById('calc-one');
let twoBtn = document.getElementById('calc-two');
let threeBtn = document.getElementById('calc-three');
let fourBtn = document.getElementById('calc-four');
let fiveBtn = document.getElementById('calc-five');
let sixBtn = document.getElementById('calc-six');
let sevenBtn = document.getElementById('calc-seven');
let eightBtn = document.getElementById('calc-eight');
let nineBtn = document.getElementById('calc-nine');

let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backSpaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementById('calc-display-val');

let displayVal = '0';
let pendingVal;
let eValStringArray = [];

let calcNumBtns = document.getElementsByClassName('calc-btn-num');
let calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

let updateDisplayVal  = (clickObj) => {
  let btnText = clickObj.target.innerText;

  if(displayVal === '0')
  {
    displayVal = '';
  }
  displayVal += btnText;
  displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
  var operator = clickObj.target.innerText;

  switch (operator) {
    case '+':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      eValStringArray.push(pendingVal);
      eValStringArray.push('+');
      break;
    case '-':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      eValStringArray.push(pendingVal);
      eValStringArray.push('-');
      break;
    case 'x':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      eValStringArray.push(pendingVal);
      eValStringArray.push('*');
      break;
    case '÷':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      eValStringArray.push(pendingVal);
      eValStringArray.push('/');
      break;
    case '=':
      eValStringArray.push(displayVal);
      let evaluation = eval(eValStringArray.join(' '));
      displayVal = evaluation + '';
      displayValElement.innerText = displayVal;
      eValStringArray = [];
      break;

    default:
      break;
  }
}

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);

}

for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', performOperation, false);
}


clearBtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  eValStringArray = [];
  displayValElement.innerHTML = displayVal;
}
backSpaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

  if(displayVal === '')
    displayVal = '0';
  displayValElement.innerText = displayVal;
}
decimalBtn.onclick = () => {
  if(!displayVal.includes('.'))
    displayVal += '.';
  displayValElement.innerText = displayVal;
}
