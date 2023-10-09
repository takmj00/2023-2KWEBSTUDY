const getStatusCode = res => {
    try {
        console.log('try');
        return res.status.code;
    } catch (err) {
        console.log('catch');
        return 0;
    } finally {
        console.log('finally');
    }
};
const code1 = getStatusCode({ status: { code: 400 } });
console.log(code1);
const code2 = getStatusCode({});
console.log(code2);