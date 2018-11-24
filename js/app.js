document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-button');
  deleteAllButton.addEventListener('click', handleDeletePress);
})


const handleFormSubmit = function(event) {
  event.preventDefault();

  const form = document.querySelector('#new-item-form');
  const newDiv = document.createElement('div')
  newDiv.setAttribute("class", "dog-info");
  const result = document.querySelector('#dog-list');
  const newImage = document.createElement('img');
  const newName = document.createElement('h3');
  newName.setAttribute("class", "dog-name");
  const newBreed = document.createElement('p');
  newBreed.setAttribute("class", "dog-breed")
  const newDescription = document.createElement('p');
  newBreed.setAttribute("class", "dog-description");

  // newImage.innerHTML = event.target.image.value;
  newName.textContent = event.target.name.value;
  newBreed.textContent = event.target.breed.value;
  newDescription.textContent = event.target.description.value;

  const dogList = document.querySelector('#dog-list');

  dogList.appendChild(newDiv);
  newDiv.appendChild(newName);
  newDiv.appendChild(newBreed);
  newDiv.appendChild(newDescription);
  form.reset();
}

const handleDeletePress = function(event) {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = "";
}
