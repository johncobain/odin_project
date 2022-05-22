function alertFunction(){
    alert('YAY! YOU DID IT!')
}

const btn0 = document.querySelector('#btn0');
btn0.onclick = alertFunction;
btn0.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
});

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', alertFunction);


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        console.log(button.id);
    })
})