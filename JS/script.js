const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('.score');
let count = 0;

screen.orientation.lock("landscape");

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '')

    if (pipePosition <= 124 && pipePosition > 0 && marioPosition < 100){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom  = `${marioPosition}px`;

        // mario.src= './images/game-over.png'; 
        mario.src= 'https://pbs.twimg.com/media/EvQit5UXEAM7gAe.png'; 
        mario.style.width= '75px';
        mario.style.marginLeft = '60px';

        clouds.style.animation = 'none';
        clouds.style.right  = `${cloudsPosition}px`;

        clearInterval(loop)
        
        alert(`Game over! Seu score foi: ${count}`);
        count = 0; 
        location.reload() 
               
    }

    count++;
    score.innerHTML = `Score: ${count}`;
}, 10);


  document.addEventListener('keydown', jump);
  document.addEventListener('touchstart', jump);
  document.ontouchstart = (event) => {jump};