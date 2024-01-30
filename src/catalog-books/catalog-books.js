import "./catalog-books.css";
import {getBooks} from './books-api.js';
import plcBook from '../images/plc-book.png';

const books_container=document.querySelector('.book-items');
books_container.addEventListener('click',handle_click_books);

let cart_length=0;
const cart_length_container=document.querySelector('.bag-items-count');
cart_length_container.textContent=cart_length;

//Добавляем категории книг
const categoriesContainer=document.querySelector(".categories");
const categories = [
{
    name: 'Architecture',
    subject: 'Architecture'
},
{
    name: 'Art & Fashion',
    subject: 'Art'
},
{
    name: 'Biography',
    subject: 'Biography&Autobiography'
},
{
    name: 'Business',
    subject: 'Business'
},
{
    name: 'Crafts & Hobbies',
    subject: 'Crafts&Hobbies'
},
{
    name: 'Drama',
    subject: 'Drama'
},
{
    name: 'Fiction',
    subject: 'Fiction'
},
{
    name: 'Food & Drink',
    subject: 'Cooking'
},
{
    name: 'Health & Wellbeing',
    subject: 'Health&Fitness'
},
{
    name: 'History & Politics',
    subject: 'History'
},
{
    name: 'Humor',
    subject: 'Humor'
},
{
    name: 'Poetry',
    subject: 'Poetry'
},
{
    name: 'Psychology',
    subject: 'Psychology'
},
{
    name: 'Science',
    subject: 'Science'
},
{
    name: 'Technology',
    subject: 'Technology'
},
{
    name: 'Travel & Maps',
    subject: 'Travel'
},
];

let startIndex=0;
//LOAD MORE  
const button_load_more=document.querySelector(".load-more");

button_load_more.addEventListener('click',async function(){
    startIndex+=6;
    let books_in_category=await getBooks(isCategory['subject'], startIndex);
    addBooks(books_in_category);
})

//Выбранная категория
let isCategory=categories[0];
selectCategory(categories[0]['subject']);

categories.forEach(category => {
    categoriesContainer.innerHTML += 
        `<li class="categories__item ${isCategory.name===category.name ? 'categories__item-select' : 'categories__item-not-select'}">
            <a data-category="${category.subject}">${category.name}</a>
            ${isCategory.name===category.name ? '<div class="circle-selected-categories"></div>' : ''}
        </li>`
});

//Назначаем действия при клике на категорию
const categories_items=document.querySelectorAll('.categories__item');
categories_items.forEach(item=>{
    let item_subject=item.getElementsByTagName('a')[0].attributes['data-category'].nodeValue;
    item.addEventListener('click',function(){
        selectCategory(item_subject);
        const last_select=document.querySelector('.categories__item-select');
        item.classList.remove('categories__item-not-select');
        last_select.classList.remove('categories__item-select');
        item.classList.add('categories__item-select');
        last_select.classList.add('categories__item-not-select');

        const circle_selected=document.querySelector('.circle-selected-categories');
        item.appendChild(circle_selected);
    });
});

//Выбор категории книг
async function selectCategory(subject){
    if(isCategory.subject!==subject){
        removeAllBooks();
    }

    isCategory=categories.find(c=>c.subject===subject);
    let books_in_category=await getBooks(subject, startIndex);
    addBooks(books_in_category);
}

//Очищаем контейнер с книгами
function removeAllBooks(){
    books_container.innerHTML='';
    startIndex=0;
}

//Добавляем в контейнер книги
function addBooks(books){
    books.map(item_book=>{
        let stars='';
        if(item_book['volumeInfo']['averageRating']!==undefined){
            for(let i=0;i<item_book['volumeInfo']['averageRating'];i++){
                stars+=`<svg class="c-icon-star active" width="12" height="12">
                            <use xlink:href="#star"></use>
                        </svg>`
            }

            for(let i=item_book['volumeInfo']['averageRating'];i<5;i++){
                stars+=`<svg class="c-icon-star" width="12" height="12">
                            <use xlink:href="#star"></use>
                        </svg>`
            }
        }

        let book_in_cart=check_cart(item_book['id']);
        let button_class=book_in_cart ? 'button-not-active' : 'button-active';
        let button_text=book_in_cart ? 'IN THE CART' : 'BUY NOW';

        let new_book=
        `<div class="book-item" book-id="${item_book['id']}">
            <div class="book-img">
                <image src=
                    ${item_book['volumeInfo']['imageLinks']!==undefined ? 
                    item_book['volumeInfo']['imageLinks']['thumbnail']
                    : plcBook}>
                </image>
            </div>
            <div class="book-info">
                <div class="book-info__container">
                    <p class="book-info__level-3 text-max-3-stroke">${item_book['volumeInfo']['authors'] ? item_book['volumeInfo']['authors'].join(', ') : ''}</p>
                    <p class="book-info__level-1 text-max-3-stroke">${item_book['volumeInfo']['title']}</p>
                    <div class="book-rating m-b-16">
                        <div class="stars">
                            ${stars}
                        </div>
                        
                        <p class="book-info__level-3">
                            ${item_book['volumeInfo']['ratingsCount']!==undefined ? 
                                `${item_book['volumeInfo']['ratingsCount']} review`: ' '
                            }
                        </p> 
                    </div>
                    <p class="book-info__level-3 m-b-16 text-max-3-stroke">
                        ${item_book['volumeInfo']['description']!==undefined ? `${item_book['volumeInfo']['description']}` : ''}
                    </p>
                    <p class="book-info__level-2 m-b-16 text-max-3-stroke">
                        ${item_book['saleInfo']['retailPrice']!==undefined ? `${item_book['saleInfo']['retailPrice']['currencyCode']} ${item_book['saleInfo']['retailPrice']['amount']}`
                        : `<div style='height: 16px'></div>`}
                    </p>
                    <button class="button-base ${button_class}">${button_text}</button>
                </div>
            </div>
        </div>`;

        books_container.innerHTML += new_book;
    })
}

function handle_click_books(event){
    const button_buy = event.target.closest('.button-base');
    if(!button_buy) return;

    const book_item=button_buy.closest('.book-item');
    const book_id=book_item.attributes['book-id'].nodeValue;

    let books=get_cart();
    let index_book=books.findIndex(i=>i==book_id);

    if(index_book>-1){
        books.splice(index_book, 1);
        button_buy.textContent="BUY NOW";
        button_buy.classList.remove('button-not-active');
        button_buy.classList.add('button-active');
    }else{
        books.push(book_id);
        button_buy.textContent="IN THE CART";
        button_buy.classList.remove('button-active');
        button_buy.classList.add('button-not-active');
    }

    set_cart(books);
}

function check_cart(book_id){
    let books=get_cart();
    let index_book=books.findIndex(i=>i==book_id);
    cart_length=books.length;
    cart_length_container.textContent=cart_length;
    return index_book>-1;
}

function get_cart(){
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function set_cart(books){
    localStorage.setItem('cart',JSON.stringify(books));
    cart_length=books.length;
    cart_length_container.textContent=cart_length;
}