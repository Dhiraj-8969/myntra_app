let para=document.querySelector('body');
let mode='night';
let btn=document.querySelector('button');
    btn.innerText='Light-mode';
function day() {
    if (mode==='day') {
        para.classList.remove('night');
        para.classList.add('day');
        mode='night';
        btn.innerText='Dark-mode';
        btn.style.backgroundColor=' #080808';
        btn.style.color='white';
    }
    else{
        para.classList.remove('day');
        para.classList.add('night');
        mode='day';
        btn.innerText='Light-mode';
        btn.style.backgroundColor='white';
        btn.style.color=' #080808';
    }
}
let img=document.querySelector('img');



