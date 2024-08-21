'use strict';

let paymentSuccess = true;
const marks = 80;

function enroll(callback) {
    console.log('Course enrollment is in progress.');

    setTimeout(function () {
        if(paymentSuccess) {
            callback();
        } else {
            console.log('Payment faild!')
        }
    }, 2000);
}

function progress(callback) {
    console.log('Course on progress...');
    setTimeout(function() {
        if(marks >= 80) {
            callback();
        } else {
            console.log('you could not get enough marks to get the certificate.');
        }
    }, 3000)
}

function getCertificate() {
    console.log('Preparing your certificate!');

    setTimeout(function(){
        console.log('Certificate done!')
    }, 1000);
}

enroll(function () {
    progress (getCertificate)
})