// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("broken after 3 seconds"); //resolve
//   }, 3000);
// });

// promise.then(
//   (result) => {
//     console.log("Success:", result);
//   },
//   (error) => {
//     console.log("Error:", error);
//   }
// );

////////////////3//////////////////////////

// let promise1 = new Promise((resolve, reject) => {
//   let time = Math.floor(Math.random() * 6000);
//   setTimeout(() => {
//     resolve(time);
//   }, time);
// });
// let promise2 = new Promise((resolve, reject) => {
//   let time = Math.floor(Math.random() * 6000);
//   setTimeout(() => {
//     resolve(time);
//   }, time);
// });
// let promise3 = new Promise((resolve, reject) => {
//   let time = Math.floor(Math.random() * 6000);
//   setTimeout(() => {
//     resolve(time);
//   }, time);
// });

// Promise.all([promise1, promise2, promise3]).then((array) => {
//   let sum = array.reduce((a, v) => a + v);
//   return console.log(sum);
// });

////////////////////////4//////////////////

// let promise = fetch('https://jsonplaceholder.typicode.com/users');
// promise.then((response) => response.json())
// .then((json) => {
//     return json.filter(e => e.id % 2 === 0);
// })
// .then((filtered) => console.log(filtered));

// //////////////////////5//////////////////

// function createCard ( object ){
//     const {name, username, phone, website} = object;
//     let container = document.createElement('div');
//     container.classList.add('user')
//     container.style = `
//     border: 5px solid black;
//     padding: 10px;
//     display: grid;
//     `;
//     let titleElement = document.createElement('h2');
//     titleElement.innerHTML = `${name}`;
//     let bodyElement = document.createElement( 'p' );
//     bodyElement.innerHTML = `Username: ${username}, Phone: ${phone}, Website: ${website}`;
//     container.append(titleElement, bodyElement);
//     return container;
// };

// let promise = fetch('https://jsonplaceholder.typicode.com/users');

// promise.then((response) => response.json())
// .then((json) => {
//     json.forEach((user) => {
//         const cardElement = createCard(user);
//         document.body.append(cardElement);
//     })
// }) 

// //////////////////////6//////////////////

// let userId = +prompt('Введите ID');

// function createCard ( object ){
//     const {title, completed } = object;
//     let container = document.createElement('div');
//     container.classList.add('user')
//     container.style = `
//     border: 5px solid black;
//     padding: 10px;
//     display: grid;
//     `;
//     let titleElement = document.createElement('h2');
//     titleElement.innerHTML = `${title}`;
//     let complete = document.createElement( 'input' );
//     complete.type = 'checkbox';
//     if (completed === true){
//         complete.setAttribute('checked', 'checked')
//     }
//     container.append(titleElement, complete);
//     return container;
// };

// let promise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);

// promise.then((response) => response.json())
// .then((json) => {
//     json.forEach((user) => {
//         const cardElement = createCard(user);
//         document.body.append(cardElement);
//     })
// }) 

// //////////////////////7///////////////////////

let container = document.createElement('div');

let promise = fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`);
promise.then((response) => response.json())
.then((json) => {
    json.forEach((picture) => {
        const cardElement = createCard(picture);
        document.body.append(cardElement);
    })
}) 

function createCard (object){

    const {url} = object;

    let image = document.createElement('img');
    image.src = url;
    container.style = `
    border: 1px solid black;
    padding: 10px;
    display: grid;
    background:
    `;
    container.append(image);
    return container;

};


container.addEventListener('click', (e) => {
        let {target} = e;
        if (target.classList.contains('img')) {
            target.classList.toggle('zoom-img')
        }
    })


