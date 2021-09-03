//Soal 1
console.log("SOAL 1");
function luasPersegiPanjang(panjang, lebar){
    return panjang*lebar;
}

function kelilingPersegiPanjang(panjang, lebar){
    return (2*panjang) + (2*lebar);
}

function volumeBalok(panjang, lebar, tinggi){
    return panjang*lebar*tinggi;
}
 
var panjang= 12;
var lebar= 4;
var tinggi = 8;
 
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log("Luas Persegi Panjang : "+luasPersegiPanjang+" cm2"); 
console.log("Keliling Persegi Panjang : "+kelilingPersegiPanjang+" cm");
console.log("Volume Balok : "+volumeBalok+" cm3");
console.log("=========================");

//Soal 2
console.log("SOAL 2");

function introduce(name, age, address, hobby){
    return "Nama saya " +name+", umur saya "+age+", alamat saya di "+address+", dan saya mempunyai hobby yaitu "+hobby+"!";
}
 
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
console.log("=========================");

//Soal 3
console.log("SOAL 3");

var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992];
var objDaftarPeserta= {
    nama : arrayDaftarPeserta[0],
    "jenis kelamin" : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    "tahun lahir" : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta);
console.log("=========================");

///Soal 4
console.log("SOAL 4");

var buah =[
    {nama:"Nanas", warna:"Kuning", "ada bijinya" : "tidak", harga:9000},
    {nama:"Jeruk", warna:"Oranye", "ada bijinya" : "ada", harga:8000},
    {nama:"Semangka", warna:"Hijau & Merah", "ada bijinya" : "ada", harga:10000},
    {nama:"Pisang", warna:"Kuning", "ada bijinya" : "tidak", harga:5000}
]

var arrayFilterBuah = buah.filter(function(item){
    return item["ada bijinya"] != "ada";
})
console.log(arrayFilterBuah);
console.log("=========================");

//Soal 5
console.log("SOAL 5");

function tambahDataFilm(film, durasi, genre, tahun){
    var objDataFilm = {fim: film, durasi:durasi, genre:genre, tahun:tahun};
    return dataFilm.push(objDataFilm);
}

var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");
console.log(dataFilm);
console.log("=========================");
