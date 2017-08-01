var sliders = document.getElementsByClassName('sliders')[0],
    next    = document.getElementsByClassName('btn-next')[0],
    prev    = document.getElementsByClassName('btn-prev')[0],
    initialRotate = 0;
next.addEventListener('click',()=>{
    if(initialRotate>-450){
        initialRotate -= 150;
        sliders.style.transform = `translateX(${initialRotate}px)`;
    }
})

prev.addEventListener('click',()=>{
    if(initialRotate<450){
        initialRotate += 150;
        sliders.style.transform = `translateX(${initialRotate}px)`;
    }
})
