//Soal 1
console.log('SOAL 1');
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar"; 
var kataKeempat = "javascript";

console.log(kataPertama.concat(" ",kataKedua," ",kataKetiga," ",kataKeempat));
console.log('=======================');

//Soal 2
console.log('SOAL 2');
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga= "6";
var tinggiSegitiga = "7";

var kelilingPersegiPanjang = (2* parseInt(panjangPersegiPanjang)) + (2 * parseInt(lebarPersegiPanjang));
var luasSegitiga = parseInt(alasSegitiga) * parseInt(tinggiSegitiga) / 2;
console.log(kelilingPersegiPanjang + " cm");
console.log(luasSegitiga + " cm2");
console.log('=======================');

//Soal 3
console.log('SOAL 3');
var sentences= 'wah javascript itu keren sekali'; 

var firstWord= sentences.substring(0, 3); 
var secondWord= sentences.substring(4, 14); 
var thirdWord= sentences.substring(15, 18); 
var fourthWord= sentences.substring(19, 24); 
var fifthWord= sentences.substring(25, 31); 

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);
console.log('=======================');

//soal 4
console.log('SOAL 4');
var nilaiJohn = 80;
var nilaiDoe = 50;
var index;

if(nilaiJohn >= 80){
    
    index = 'A';
    console.log('Nilai John: ' + index);
}
else if(nilaiJohn >= 70 && nilaiJohn < 80 ){
    index = 'B';
    console.log('Nilai John: ' + index);
}
else if(nilaiJohn >= 60 && nilaiJohn < 70 ){
    index = 'C';
    console.log('Nilai John: ' + index);
}
else if(nilaiJohn >= 50 && nilaiJohn < 60 ){
    index = 'D';
    console.log('Nilai John: ' + index);
}
else if(nilaiJohn < 50){
    index = 'E';
    console.log('Nilai John: ' + index);
}

if(nilaiDoe >= 80){
    index = 'A';
    console.log('Nilai Doe: ' + index);
}
else if(nilaiDoe >= 70 && nilaiDoe < 80 ){
    index = 'B';
    console.log('Nilai Doe: ' + index);
}
else if(nilaiDoe >= 60 && nilaiDoe < 70 ){
    index = 'C';
    console.log('Nilai Doe: ' + index);
}
else if(nilaiDoe >= 50 && nilaiDoe < 60 ){
    index = 'D';
    console.log('Nilai Doe: ' + index);
}
else if(nilaiDoe < 50){
    index = 'E';
    console.log('Nilai Doe: ' + index);
}
console.log('=======================');

//Soal 5
console.log('SOAL 5');
var tanggal = 29;
var bulan = 12;
var tahun = 2002;

switch(bulan) {
    case 1:   { console.log(tanggal+' Januari '+ tahun); break; }
    case 2:   { console.log(tanggal+' Februari '+ tahun); break; }
    case 3:   { console.log(tanggal+' Maret '+ tahun); break; }
    case 4:   { console.log(tanggal+' April '+ tahun); break; }
    case 5:   { console.log(tanggal+' Mei '+ tahun); break; }
    case 6:   { console.log(tanggal+' Juni '+ tahun); break; }
    case 7:   { console.log(tanggal+' Juli '+ tahun); break; }
    case 8:   { console.log(tanggal+' Agustus '+ tahun); break; }
    case 9:   { console.log(tanggal+' September '+ tahun); break; }
    case 10:   { console.log(tanggal+' Oktober '+ tahun); break; }
    case 11:   { console.log(tanggal+' November '+ tahun); break; }
    case 12:   { console.log(tanggal+' Desember '+ tahun); break; }
    default:  { console.log('Bulan Tidak Terdaftar'); }
}
console.log('=======================');