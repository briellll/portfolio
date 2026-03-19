const btn = document.querySelector('.btn-default');
const result = document.querySelector('.result');
const headImg = document.querySelector('.coin-head');
const tailsImg = document.querySelector('.coin-tails');
const coinContainer = document
.querySelector('.coin');

function flipCoin (){
    coinContainer.classList.add('animate-spin');

    result.textContent= "...";

    setTimeout(()=>{

    const flip = Math.random() < 0.5 ? 'Cara' : 'Coroa';
    result.textContent = flip

    if (flip ==='Cara'){
        headImg.classList.remove('hide');
        tailsImg.classList.add('hide');
    } else {
        headImg.classList.add('hide');
        tailsImg.classList.remove('hide');
        }
        coinContainer.classList.remove('animate-spin');
    },1000);

}


btn.addEventListener('click', flipCoin);

coinContainer.addEventListener('click',flipCoin);