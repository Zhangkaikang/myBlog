// 这是斐波纳切数
function fibo(num) {
    if (num<3) {
        return 1;
    } else {
        return fibo(num-1)+fibo(num-2);
    }
}
// console.log(fibo(9));