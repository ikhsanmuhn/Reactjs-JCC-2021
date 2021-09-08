var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let waktu = 10000;

const execute = (waktu, i, tmp) =>{
    readBooksPromise(waktu, books[i]).then(function(params){
        tmp--
        i++
        if(tmp > 0){
            execute(params, i, tmp)
        }
    }).catch(function(err){
    console.log(err)
    })
}

execute(waktu, 0, books.length)