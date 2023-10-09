/*파일 목록 읽고 js파일이면 경로에 파일 붙여서 출력, 
디렉토리면 그 디렉토리로 다시 함수 호출
js파일 먼저 출력해야하니 비동기로 짜면 될 듯*/
const fs = require('fs');
const path = require('path');

const dir = './test';

const myfunc = dir => fs.readdir(dir, (err, files) => {
    if (err) console.error(err);
    else {
        files.forEach(file => {
            const filePath = path.join(dir, file);
            
            fs.stat(filePath, (err,stats)=> {
            if (err) console.error(err);
            else {
                if (stats.isDirectory()) myfunc(filePath);
                else if (path.extname(filePath) === '.js') console.log(filePath);
            }
        })})
    }
});
myfunc(dir);