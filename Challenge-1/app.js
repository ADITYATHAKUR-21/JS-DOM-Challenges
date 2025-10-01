const bulb = document.getElementById('bulb');
const bulbBtn = document.getElementById('toggleButton');
const text = document.getElementById('status')


let isGray = true
  bulbBtn.addEventListener('click', () => {

    if (isGray) {
      bulb.style.backgroundColor = 'Red';
      bulbBtn.innerText = 'Turn Off'
      text.innerText = 'Status: On'
    }else{
       bulb.style.backgroundColor = 'gray';
      bulbBtn.innerText = "Turn On"
      text.innerText = 'Status: Off'

    }
    isGray = !isGray


  });
