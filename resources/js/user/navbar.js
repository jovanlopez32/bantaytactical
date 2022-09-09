import anime from 'animejs/lib/anime.es.js';



const exitpath = 'M6 18L18 6M6 6l12 12';
const menupath = 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12';


/* Navigation */
var button_nav = document.getElementById('button-nav');
var nav = document.getElementById('nav');
let toggle = true;


button_nav.addEventListener('click', function(x) {
    nav.classList.toggle('-right-full');
    nav.classList.toggle('right-0');

    const timeline = anime.timeline({
        duration: 1000,
        easing: "easeOutExpo",
    });

    timeline.add({
        targets: '.menupath',
        d: [
            {value: toggle ? exitpath : menupath}
        ]
    })
    
   !toggle ? toggle=true : toggle=false;

});

