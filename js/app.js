document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})


const handleFormSubmit = function(event) {
  event.preventDefault();

  const form = document.querySelector('#new-item-form');
  const newDiv = document.createElement('div')
  const result = document.querySelector('#dog-list');
  const newName = document.createElement('h3');
  const newBreed = document.createElement('p');
  const newDescription = document.createElement('p');

  newName.textContent = event.target.name.value;
  newBreed.textContent = event.target.breed.value;
  newDescription.textContent = event.target.description.value;

  result.appendChild(newDiv);
  newDiv.appendChild(newName);
  newDiv.appendChild(newBreed);
  newDiv.appendChild(newDescription);
  form.reset();
}
