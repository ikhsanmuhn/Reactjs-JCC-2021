var filterBooksPromise = require('./promise2.js')
 
let warna=true

filterBooksPromise(warna,40).then(function(books){
    console.log(books)
}).catch(function(err){
    console.log(err)
})

async function output2(){
    try {
     var result1 = await filterBooksPromise(false,250)
     console.log(result1)
     var result2 = await filterBooksPromise(warna,30)
     console.log(result2)
    } catch(err){
      console.log(err.message)
    }
  }
  
output2()

   