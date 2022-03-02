/*---==== Arrows; destination: Start ====---*/
const conteiner    = document.querySelector('.conteiner-options');
let sliderWord     = document.querySelectorAll('.option');
let sliderWordLast = sliderWord[sliderWord.length -1];
conteiner.insertAdjacentElement('afterbegin', sliderWordLast);

document.getElementById('destination').addEventListener('click',e =>{
    if(e.target.tagName == 'I' && e.target.classList.contains('next')){
        let sliderWordFirst = document.querySelectorAll('.option')[0];
        sliderWord.forEach(word => word.style = 'transform: translateX(-200%);');
        setTimeout(()=>{
            conteiner.insertAdjacentElement('beforeend', sliderWordFirst);
            sliderWord.forEach(word => word.style = 'transition: none; transform: translateX(-100%);');
        },400);
    }else if(e.target.tagName == 'I' && e.target.classList.contains('prev')){
            let sliderWord     = document.querySelectorAll('.option');
            let sliderWordLast = sliderWord[sliderWord.length -1];
            sliderWord.forEach(word => word.style = 'transform: translateX(0);');
            setTimeout(()=>{
                conteiner.insertAdjacentElement('afterbegin', sliderWordLast);
                sliderWord.forEach(word => word.style = 'transition: none; transform: translateX(-100%);');
            },400);
    }
});
/*---==== Arrows; destination: End ====---*/