# 🪙 Flip the Coin (Cara ou Coroa)

![GitHub top language](https://img.shields.io/github/languages/top/seu-usuario/seu-repositorio?color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/seu-usuario/seu-repositorio)

Um projeto interativo de "Cara ou Coroa" desenvolvido para praticar conceitos fundamentais de **Front-end**, como manipulação do DOM, animações CSS complexas e lógica de probabilidade com JavaScript.

---

## 🚀 Sobre o Projeto

Este site permite ao usuário simular o lançamento de uma moeda com uma experiência visual fluida. O projeto foi construído focando em **UX (User Experience)**, utilizando transições suaves e estados de animação para dar feedback em tempo real ao usuário.

### 🛠 Funcionalidades Principais:
* **Sorteio Aleatório:** Lógica baseada em `Math.random()` para garantir resultados imparciais.
* **Animações 3D:** Uso de `@keyframes` e `rotateY` para simular o giro da moeda no ar.
* **Feedback Visual:** Efeito de "pulsar" (Hover) e delay proposital no resultado para criar suspense.
* **Responsividade:** Layout adaptável para diferentes tamanhos de tela.

---

## 🛠 Tech Stack

As tecnologias utilizadas foram escolhidas para manter o projeto leve e performático (GPU-friendly):

* **HTML5:** Estrutura semântica dos elementos.
* **CSS3:** Estilização avançada, uso de seletores específicos como `:not()` e animações 3D.
* **JavaScript (ES6+):** Manipulação de classes, controle de tempo com `setTimeout` e lógica de negócio.
* **Google Fonts:** Tipografia customizada com as fontes *Kanit* e *Manrope*.

---

## 🧠 Aprendizados e Desafios (Jargão Técnico)

Durante o desenvolvimento, foquei em aplicar as melhores **convenções do mercado**:

1.  **Manipulação do DOM:** Utilização de `querySelector` e `classList` para garantir um código limpo e moderno.
2.  **Performance de Animação:** Preferência pelo uso de `transform: scale()` e `rotateY()` em vez de alterar dimensões físicas, garantindo que o processamento seja feito pela placa de vídeo (GPU).
3.  **Controle de Estado:** Implementação de lógica para evitar conflitos entre o efeito de hover e a animação de giro.
4.  **UX Design:** Implementação de um "cronômetro" via `setTimeout` para que o resultado só apareça após a conclusão da animação.

---

![2026-03-13 01-00-28 (1)](https://github.com/user-attachments/assets/4402d9ff-51b9-45a6-a5f0-cce1c1e4bed0)



## 🏁 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
