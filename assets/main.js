// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// for (let i = 1; i <= 100; i++) {
//     // console.log(i);
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('fizzbuzz');
//     } else if (i % 5 === 0){
//         console.log('buzz');
//     } else if (i % 3 === 0){
//         console.log('fizz');
//     } else {
//         console.log(i);
//     }
// }

let fuzzbuzz = document.getElementById('fuzzbuzz');

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0){
        fuzzbuzz.innerHTML += `<div class="x ratio ratio-1x1 m-2 col bg-danger">fizzbuzz</div>`
    }   else if (i % 8 === 0){
        fuzzbuzz.innerHTML += `<div class="w-100"></div>`
    }
        else if (i % 5 === 0){
        fuzzbuzz.innerHTML += `<div class="x ratio ratio-1x1 m-2 col bg-success">buzz</div> `
    } else if (i % 3 === 0){
        fuzzbuzz.innerHTML += `<div class="x ratio ratio-1x1 m-2 col bg-warning">fizz</div>`
    } else {
        fuzzbuzz.innerHTML += `<div class="x ratio ratio-1x1 m-2 col bg-info">${i}</div>`
    }
}

