const D = document;

const gameWrap = D.querySelector('.game-wrapper');
const mouse = D.querySelector('.game-mouse');
const base = D.querySelector('.game-base');

let totalPoint = 0;
let countMove = 0;
gameWrap.addEventListener('mousemove', (e) => {
    
    if(e.target.classList == 'game-base') {
        totalPoint = totalPoint + countMove;
        base.innerHTML = Math.floor(totalPoint);
        countMove = 0;

        mouse.innerHTML = Math.floor(countMove)
    } else {
        let top = e.clientY;
        let left = e.clientX + 20;
    
        mouse.style.left = left + 'px';
        mouse.style.top = top + 'px';
    
    
        countMove = countMove + 0.1
        
        mouse.innerHTML = Math.floor(countMove)
    }

    
    
})
