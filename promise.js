// create a promise
// create another promise
// create a async function that will run and return the concat result of the above promises

const promise1 = new Promise((res, rej) => {
    console.log('💆‍♂️Promise 1 Log - Before resolve !');
    setTimeout(() => {
        console.log('🧶 Promise 1 Log - Timeout !');
        rej('One Fail');
        // res('One Done ');
    }, 3000);
});
const promise2 = new Promise((res, rej) => {
    console.log('💆‍♂️Promise 2 Log - Before resolve !');
    setTimeout(() => {
        console.log('🧶 Promise 2 Log - Timeout !');
    }, 3000);
    res('Two Done ');
});

const asyFun = async (data) => {
    try {
        console.log('🙁Before  the promise 1 = ', promise1);
        const result1 = await promise1;
        console.log('🌻 After  the promise 1 = ', result1);
        console.log('🙁Before  the promise 2 = ', promise2);
        const result2 = await promise2;
        console.log('🌻 After  the promise 2 = ', result2);

        console.log('👨‍👨‍👧‍👦 Async function end');

        return result1 + result2;
    } catch (error) {
        console.log('😌', error);
    }
};

Promise.any([promise1, promise2])
    .then((params) => {
        console.log('🚀 ~ Promise.race ~ Success:', params);
    })
    .catch((params) => {
        console.log('🚀 ~ Promise.race ~ Error:', params);
    });

console.log('🧛‍♀️ Before function ');
const x = asyFun();
console.log('🧛‍♀️ After function ', x);
