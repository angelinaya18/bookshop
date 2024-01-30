import "./slider.css";
import banner1 from "../images/banners/banner-1.png";
import banner2 from "../images/banners/banner-2.png";
import banner3 from "../images/banners/banner-3.png";

const imgContainer1=document.querySelector('.slider-img');
//Кружочки под слайдером
const circles=document.querySelectorAll('.slider-control__circle');

let slides=[banner1,banner2,banner3];
let index_img=0;
//Устанавливаем значения по умолчанию
setSlideContent(index_img);

setInterval(()=>{
    setNone(index_img);

    if(index_img>=slides.length-1) index_img=0;
    else index_img++;

    setSlideContent(index_img);    
}, 5000);

function setSlideContent(index){
    //При max-width>1300px
    imgContainer1.style.backgroundImage=`url(${slides[index]})`;
    //Меняем класс ссылки
    setActive(index);
}

//Изменение класса ссылки на none-select
function setNone(index){
    circles[index].classList.remove('circle-active');
    circles[index].classList.add('circle-not-active');
}

//Изменение класса ссылки на select
function setActive(index){
    circles[index].classList.remove('circle-not-active');
    circles[index].classList.add('circle-active');
}

//Нажатия на кружочки
for(let i=0;i<circles.length;i++){
    circles[i].addEventListener('click',()=>{
        setNone(index_img);
        index_img=i;
        setSlideContent(index_img);
    });
}