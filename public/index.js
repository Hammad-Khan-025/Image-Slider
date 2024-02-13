        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const slides = document.querySelectorAll('.slide');

        slides.forEach((slide,index)=>{
            slide.style.left = `${index * 100}%`
        })

        let counter = 0;

        nextButton.addEventListener('click', ()=>{
            counter++;
            carousel();
        })
        prevButton.addEventListener('click', ()=>{
            counter--;
            carousel();
        })

        function carousel(){
            if(counter < 0){
                counter = slides.length - 1;
            }
            if(counter === slides.length){
                counter = 0;
            }
            slides.forEach((slide)=>{
                slide.style.transform = `translateX(-${counter * 100}%)`
            })
        }
