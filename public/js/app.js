let button1=document.querySelector(".button1")
let login=document.querySelector(".login")
let save=document.querySelector(".save")
let i=document.querySelector(".fa-xmark")
button1.addEventListener("click",() =>{
if (button1=login) {
    button1.style.display="block"
}
    i.addEventListener("click",() =>{
button1.style.display="none"
    })

})



// carosle
let carouselContainers = document.querySelectorAll('.carousel-container')

let nextBtns = document.querySelectorAll('.next')
let prevBtns = document.querySelectorAll('.prev')


let currentIndex = 0

const slider = (index, myBtn ) => {

    
    //* get the attribute of myBtn
    let target = myBtn.getAttribute('carouselBtn')
    carouselContainers.forEach(carousel => {
       
        //* find the carousel to slide
        if(carousel.id === target){
            
            
          let slides = carousel.querySelectorAll('.slide')
          let camera = carousel.querySelector('.carousel')
          console.log(camera);

          //^ ila kna f akhir tswira gha nrj3o l wayal tswira
          if(index >= slides.length){
            index = 0
          }else if(index < 0){
            //^ ila kna f awal tswira o bghina nrj3o ; akhir tswira
            index = slides.length  - 1
          }
            
          camera.style.transform = `translateX(-${slides[0].clientWidth * index}px)`
          currentIndex = index
        }

    })
    

}


nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener('click', () => {

        slider(currentIndex + 1, nextBtn)
    })
})

prevBtns.forEach(prevBtn => {
    prevBtn.addEventListener('click', () => {

        slider(currentIndex - 1, prevBtn)
    })
})



let b2 =document.querySelectorAll(".b2")
let carouselContainers1 = document.querySelector('.carousel-container')
let x=document.querySelector(".fa-x")
b2.forEach(e => {
    e.addEventListener("click",()=>{
        carouselContainers1.style.display="block"
    })
     x.addEventListener("click",() =>{
carouselContainers1.style.display="none"
    })
});




