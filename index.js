const myButton = document.getElementById('clickMe');
const noun1 = document.getElementById('noun1');
const noun1Input = document.getElementById('noun1Input');

myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun1.innerHTML = noun1Input.value;
});


const myButton2 = document.getElementById('clickMe');
const noun2 = documents.getElementById('noun2');
const noun2Input = documents.getElementById('noun2Input');

myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun2.innerHTML = noun2Input.value;
});

