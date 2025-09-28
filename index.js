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
let letterskill = 0
const BAshar = document.getElementById('Bashar')

function skilltext(){
    BAshar.innerHTML =`<p>${arrayskill[indexskill].slice(0 , letterskill)}</p>`
    letterskill++;
    setTimeout(() => {
        skilltext()
    }, 20);
    

}
const navbar = document.querySelectorAll('.navbar li')
navbar.forEach((nav)=>{
    nav.addEventListener('click' , ()=>{
        navbar.forEach((i)=>{
            i.classList.remove('active')
        })
   nav.classList.add('active')
    })
})



const btn = document.querySelector('.btn')

btn.addEventListener("mousemove", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;

  btn.style.setProperty("--xPos", x + "px");
  btn.style.setProperty("--yPos", y + "px");
});
