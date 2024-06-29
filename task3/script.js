let string = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string);
      } catch (error) {
        string = "Error";
      }
      document.querySelector('.input').value = string;
    } else if (value === 'C') {
      string = "";
      document.querySelector('.input').value = string;
    } else if (value === 'DEL') {
      string = string.slice(0, -1);
      document.querySelector('.input').value = string;
    } else {
      string += value;
      document.querySelector('.input').value = string;
    }
  });
});
