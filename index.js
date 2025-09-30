const text = document.getElementById('chart-text')
let array = ['I’m a passionate web developer who loves creating clean and modern websites Always learning new technologies to bring ideas to life.']
let index = 0;
let letter = 0
function charttext(){
    text.innerHTML = `<p>${array[index].slice(0 , letter)}</p>`
    letter++;

    setTimeout(charttext , 20)
  
}
charttext()



const preHtml = document.getElementById('htmlpre')
const barHtml = document.getElementById('bar-html')
let indexHtml = 0;

function updatepre(){
    preHtml.innerHTML = indexHtml + "%";
    barHtml.style.width = indexHtml + "%";
    
    setTimeout(()=>{
           if(indexHtml < 91){
        updatepre()
indexHtml++;
    }
    } , 20)
 


}


const precss =document.getElementById('css')
const barcss = document.getElementById('bar-css')
const prejs =document.getElementById('js')
const barjs = document.getElementById('bar-js')
const home = document.getElementById('home')

let indexcss = 0;
let indexjs = 0;

function updatepre1(){
    precss.innerHTML = indexcss + '%'
    barcss.style.width = indexcss + '%'
    prejs.innerHTML = indexjs + '%'
    barjs.style.width = indexjs + '%'
    
   
    setTimeout(()=>{
        if(indexcss < 81){
            updatepre1()
            indexcss++;
        }
        else if(indexjs < 71){
            updatepre1()
            indexjs++
        }
    },20)    
}

let running = false;

window.addEventListener('scroll' , ()=>{
    setTimeout(()=>{
        if(!running && window.scrollY > home.offsetTop + 200){
            running =true
        updatepre()
        updatepre1()
        skilltext()
     }    
    },20)

         
})

let arrayskill = ['I have strong front-end development skills, with solid knowledge of HTML5, CSS3, and JavaScript. I enjoy building clean, responsive, and user-friendly websites while continuously improving my coding and design abilities.']
let indexskill = 0;
let letterskill = 0;
let font = 16
const BAshar = document.getElementById('Bashar')

function skilltext(){
    BAshar.innerHTML =`<p>${arrayskill[indexskill].slice(0 , letterskill)}</p>`
    letterskill++;
    BAshar.style.setProperty( "--w", font + "px");
    setTimeout(() => {
        skilltext()
    }, 20);
    

}




const btn = document.querySelector('.btn')

btn.addEventListener("mousemove", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;

  btn.style.setProperty("--xPos", x + "px");
  btn.style.setProperty("--yPos", y + "px");
});

const nav = document.querySelector('.navbar')
const open1 = document.querySelector('.open-sidebar')
const close = document.querySelector('.close-sidebar')

function opensidebar(){
    nav.classList.add('active')
}
function closesidebar(){
    nav.classList.remove('active')
}

const imgs = document.querySelectorAll('.pictures a')
let invalid =  null;
 let indeximg  = 0
document.addEventListener('DOMContentLoaded' , upadteimg)
 function upadteimg(){
    if(window.innerWidth < 1000  && imgs.length > 0){
        imgs[indeximg].classList.add('displayimg')
    }
     invalid = setInterval(next , 5000)
 }
 function show(index){
   if(index >= imgs.length){
    indeximg = 0;
   }
   else if(index < 0){
    indeximg = imgs.length -1
   }


    imgs.forEach(img =>{
        img.classList.remove('displayimg')
    })
    imgs[indeximg].classList.add('displayimg')

 }
 function pre(){
    clearInterval(invalid)
    indeximg--;
    show(indeximg)
    

 }
 function next(){
   
    indeximg++;
    show(indeximg)
 }