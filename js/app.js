// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const slideElements =[];
let currentindex = 0;

const slideWrapperEl = document.querySelector('.slides-wrapper');
slideWrapperEl.innerHTML = '';
console.log(slideWrapperEl);


// genera il contenuto dello slider

for (let i = 0; i < slides.length; i++) {
  const src = slides[i];
//   console.log(src);



//creando li
 const li = document.createElement('li');

//agg. la classe slide al li 
  li.className = 'slide';

  if (i === 0){
    li.classList.add('active');
  }
  // creazione img

const img = document.createElement('img');
// assegnazione src valore preso
img.src = src

// img dentro all'li

li.append(img);

console.log(li);

// inserendo li dentro slides wrapper 
slideWrapperEl.append(li);
}
console.log(slideElements);

const nextArrowEl = document.querySelector('.arrow-next');
console.log(nextArrowEl);

nextArrowEl.addEventListener('click', function(){
    // togliere la classe active dalla slide attiva
    const slideAttiva = slideElements[0];
     
    slideAttiva.classList.remove('active');
})



