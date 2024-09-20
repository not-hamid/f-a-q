const button = document.querySelectorAll('#expand');
const main = document.querySelectorAll('.question-main');

main.forEach((ques)=>{
    const btn = ques.querySelector('#expand');
    btn.addEventListener('click',()=>{
        ques.classList.toggle('show-answer')
    })
})

// button.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-answer');
//     });
// })