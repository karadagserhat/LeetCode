function rev(x){

    absRev = Math.abs(x).toString().split('').reverse().join('');
    if( absRev > 2 ** 32) return 0;
    return absRev * Math.sign(x)
}


console.log(rev2(120));


console.log(021*1);