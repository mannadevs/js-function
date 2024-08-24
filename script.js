'use strict';

// let paymentSuccess = true;
// const marks = 80;

// function enroll(callback) {
//     console.log('Course enrollment is in progress.');

//     setTimeout(function () {
//         if(paymentSuccess) {
//             callback();
//         } else {
//             console.log('Payment faild!')
//         }
//     }, 2000);
// }

// function progress(callback) {
//     console.log('Course on progress...');
//     setTimeout(function() {
//         if(marks >= 80) {
//             callback();
//         } else {
//             console.log('you could not get enough marks to get the certificate.');
//         }
//     }, 3000)
// }

// function getCertificate() {
//     console.log('Preparing your certificate!');

//     setTimeout(function(){
//         console.log('you got certificate!')
//     }, 1000);
// }

// enroll(function () {
//     progress(getCertificate)
// });


// const paymentSuccess = true;
// const marks = 80;

// function enroll(callback) {
//     console.log('Course enrollment is in progress.');
//     setTimeout(function() {
//         if (paymentSuccess) {
//             callback();
//         } else {
//             console.log('payment failed!');
//         }
//     }, 2000);
// }

// function progress(callback) {
//     console.log('Course on progress...');

//     setTimeout(function() {
//         if (80 <= marks) {
//             callback();
//         } else {
//             console.log('you are not get enough marks')
//         }
//     }, 3000);
// }
// function getCertificate() {
//     console.log('Prearing your certificate');

//     setTimeout(function() {
//         console.log('congrats! you got the certificate.')
//     }, 1000);
// }

// enroll(function() {
//     progress(getCertificate);
// });



// promise definition
// let status = true;

// const promise = new Promise (function (resolve, reject) {

//     setTimeout(() => {
//         if (status) {
//             resolve('task one');
//         } else {
//             reject('failed');
//         }
//     }, 2000);

// });


// promise call 
// promise
//     .then(function (value) {
//         console.log(value)
//     })
//     .catch(function(err) {
//         console.log(err)
//     })



// use of promise 
const marks = 80;
const paymentSuccess = false;

function enroll() {
    console.log('Course enrollment is in progress.');

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if (paymentSuccess) {
                resolve();
            } else {
                reject('payment failed!');
            }
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log('Course on progress...');

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject('You could not get enough marks to get the certificate');
            }
        }, 3000);
    });

    return promise;
}

function getCertificate() {
    console.log('Preparing your certificate!');

    const promise = new Promise(function (resolve) {
        setTimeout(function() {
            resolve('Congrats! you got the certificate')
        }, 1000);
    });

    return promise;

}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function (value) {
        console.log(value)
    })
    .catch(function (err) {
        console.log(err);
    })
