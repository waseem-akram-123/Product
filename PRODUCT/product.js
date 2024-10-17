let b1 = document.querySelector (".btn1");
let b2 = document.querySelector (".btn2");
let b3 = document.querySelector (".btn3");

let image = document.querySelector ("#one");

b1.addEventListener ("click",()=>{
    image.src = "img1.jpg";
});

b2.addEventListener ("click",()=>{
    image.src = "img2.jpg";
});

b3.addEventListener ("click",()=>{
    image.src = "img3.jpg";
});