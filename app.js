/* //毎回足すから計算する回数が多くなり、処理が遅い
'use strict';
function fib (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
 */

 //連結配列Mapを使用することで負荷軽減
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n-1) + fib(n-2);
    memo.set(n,value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}