"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. На странице должны отображаться все товары и отзывы 
под каждым товаром. Под каждым блоком отзывов, должна быть возможность добавить 
отзыв для конкретного продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const root = document.getElementById('root');

function createDoom(root){
  initialData.forEach(item => {
    const product = document.createElement('div');
    const nameProduct = document.createElement('h2');
    const ul = document.createElement('ul');
    const input = document.createElement('input');
    const btn = document.createElement('button');
    btn.textContent = 'Добавить отзыв';
    btn.classList = 'btn';

    nameProduct.textContent = item.product;
    
    item.reviews.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.text;
  
      ul.append(li);
    })

    product.append(nameProduct);
    product.append(ul);
    product.append(input);
    product.append(btn);
    root.append(product);
  })
    
}

function renderReviews(ul, reviews){
  
    const li = document.createElement('li');
    li.textContent = reviews[reviews.length-1].text;

    ul.append(li);
}

function addReviews(root, initialData) {
  root.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
      const product = e.target.parentElement;
      const newReview = product.querySelector('input').value;
      const nameProduct = product.querySelector('h2').textContent;
      const ul = product.querySelector('ul');
      
      initialData.forEach((item, i) => {
        if(item.product === nameProduct){
          if(newReview.length < 50 || newReview.length > 500){
            throw new Error('отзыв должен быть не менее 50 символов в длину и не более 500.');
          }
          initialData[i].reviews.push({id: new Date(),text:newReview});
          
          renderReviews(ul, item.reviews);
        }
      })
    }
  })
}

createDoom(root, initialData);
addReviews(root, initialData);

console.log(initialData);

