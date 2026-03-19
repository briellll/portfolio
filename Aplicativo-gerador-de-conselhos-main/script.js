const btn = document.querySelector('.btn-default');
const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-content');

const API_URL = 'https://api.adviceslip.com/advice'


async function getAdvice() {
    try {
        const response = await fetch(API_URL);
        const dados =  await response.json();

        adviceId.innerHTML = `ADVICE #${dados.slip.id}`;
        adviceText.innerHTML = `"${dados.slip.advice}"`;

    } catch (error) {
        console.error('Erro ao gerar requisição', error);
    }

}

btn.addEventListener('click',getAdvice)



