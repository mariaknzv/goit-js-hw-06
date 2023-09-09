const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesEl = document.querySelector('.gallery');

const imagesListEl = images.map(image => {
  return `<li class="gallery-item"> <img src='${image.url} ' alt='${image.alt} ' width = 300></img></li>`

});

imagesEl.insertAdjacentHTML("beforeend", imagesListEl.join(''));
console.log(imagesEl);


// const imagesEl = document.querySelector('.gallery');

// function createMarkup(array) {
//   const markup = array
//     .map(({ url, alt }) => `<li> <img src='${url} ' alt='${alt} '></li>`)
//     .join('');
//   imagesEl.insertAdjacentHTML("beforeend", markup);

// }

// console.log(images);