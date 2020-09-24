// url to get, create, update and delete messages
const BASE_URL ="http://tiny-lasagna-server.herokuapp.com/collections/cohort-covid";
// select the element where the messages will go
const $container = document.querySelector('ul');

//////////////////////////////////////////////////// GET REQUEST
function buildHTML(data) {
  console.log('data', data);
  let html = '';
  data.forEach(function(item){
    html += `<li>${item.message}</li>`
  });

  console.log('html', html);
  $container.innerHTML = html;
}

fetch(BASE_URL)
  .then(response => {
    // console.log('server response', response);
    // .json() converts response to JSON
    return response.json();
  })
  .then(data => {
    // console.log('data', data);
    buildHTML(data);
    return;
  })
  .catch(error => console.log(error));


//////////////////////////////////////////////////// POST REQUEST


function createMessage(event) {
  event.preventDefault();

  // event.target is the form element

  const message = Object.fromEntries(new FormData(event.target));
  // console.log('message', message);

  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('err', err));
}

document.querySelector('form').addEventListener('submit', createMessage);
















//
//
// console.log('data', data)
//
// const message = {
//   username: 'Josh',
//   message: 'i was trying something',
// };
//
// fetch(BASE_URL, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(message),
// })
//
// fetch(BASE_URL)
// .then(response => {
//
//   response.json())
// .then(res => {
//   console.log(res);
//
// function buildHTML(data) {
//   data.forEach(function(item){
//     console.log('message', message);
//   })
// }
//
// document.querySeclector('form').addEventListener('submit', function(event){
//   event.preventDefault();
//   // console.log('You submitted the form!')
// const data = Object.fromEntries(new FormData(event.target));
// console.log(data);
//
// });
//
// function deletMessage(event) {
//   const id = event.target.dataset.id
//   fetch(`${BASE_URL}/${id}`, {
//     method: 'DELETE',
//   })
//
// .then(response => response.json())
// .then(resul=> console.log('Success:', result))
// .catch(error => console.error('Error:', error));
// }
