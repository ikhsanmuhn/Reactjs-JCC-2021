// di index.js
var readBooks = require('./callback.js')

 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

const execute = (time,i,tmp) =>{
    readBooks(time, books[i], function (params) {
        tmp--
        i++
        if(tmp > 0){
            execute (params, i,tmp)
        }
    })
}

execute(10000, 0, books.length)
 