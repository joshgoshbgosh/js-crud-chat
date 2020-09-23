const BASE_URL ="http://tiny-lasagna-server.herokuapp.com/collections/cohort-covid";

const $container = document.querySelector('ul');
let html = '';

function buildHTML(data) {
  data.forEach(function(item){
    html += `<li>${item.message}</li>`
  });
  $container.innerHTML = html;
}





const data = fetch(BASE_URL)
.then(response => response.json())
.then(res => {
  console.log(res);
  buildHTML(res);
})
.catch(error => console.log(error));

console.log('data', data)

const message = {
  username: 'Josh',
  message: 'sure!',
};

fetch(BASE_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(message),
})
