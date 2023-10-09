const permutation = (n, r) => {
    let ret = 1;
    for (let i = 0; i < n; i++){
        ret *= i+1;
    }
    for (let i = 0; i < n-r; i++){
        ret /= i+1;
    }
    return ret;
}

const combination = (n, r) => {
    let ret = 1;
    for (let i = 0; i < n; i++){
        ret *= i+1;
    }
    for (let i = 0; i < r; i++){
        ret /= i+1;
    }
    for (let i = 0; i < n-r; i++){
        ret /= i+1;
    }
    return ret;
}

const multiPermutation = (n, r) => {
    return n**r;
}

const multiCombination = (n, r) => {
    return combination(n+r-1,r);
    
}
module.exports = {
    permutation,
    combination,
    multiCombination,
    multiPermutation,
};
