import Splide from '@splidejs/splide';

const splide = new Splide( '.splide', {
    type   : 'loop',
    width: '100%',
    height: '550px',
    autoplay: true,
    focus: 0,
    accessibility: true,
    pagination: false,
  } );


  
  
  splide.mount();
