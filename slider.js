const slider = document.querySelectorAll('.slider-img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove ('on'));
}

function showSlider(){
    slider[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0;
    } else{
        currentSlide++
    }
    showSlider();
}

function prevSlider(){
    hideSlider()
    if(currentSlide == 0){
        currentSlide = slider.length -1
    } else{
        currentSlide--
    }
    showSlider();
}

next.addEventListener('click', nextSlider);
prev.addEventListener('click', prevSlider);

