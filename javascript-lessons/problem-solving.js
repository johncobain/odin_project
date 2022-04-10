// recieves an input
// starts counting up to the input number
// when is multiple of three print fizz
// when is multiple of five print buzz
// when is multiple of fifteen print fizzbuzz

num = parseInt(prompt('Please enter the number you would like to FizzBuzz up to: '));

for(let i = 1; i <= num; i++){
    if(i%3===0 && i%5===0){
        console.log('FizzBuzz')
    }else if(i%3===0){
        console.log('Fizz');
    }else if(i%5===0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}