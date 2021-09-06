//Soal 1
console.log("SOAL 1");
let jarijari=7;
let luas;
let keliling;

const luasLingkaran = (jarijari) => {
    return luas = 22/7*jarijari*jarijari;
};
const kelilingLingkaran = (jarijari) => {
    return keliling = 22/7*(2*jarijari);
};

console.log(luasLingkaran(jarijari));
console.log(kelilingLingkaran(jarijari));
console.log("=================");

//Soal 2
console.log("SOAL 2");
let panggilan;
const introduce = (...params) => {
    let [nama, umur, jk, pekerjaan] = params;
    if( jk == "Laki-Laki"){
        panggilan = "pak"
    }     
    return panggilan +` ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
}
 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"
console.log("=================");

//Soal 3
console.log("SOAL 3");
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName(){
        console.log(firstName + " " + lastName)
        }
    }
}
    
  // kode di bawah ini jangan diubah atau dihapus sama sekali
  console.log(newFunction("John", "Doe").firstName)
  console.log(newFunction("Richard", "Roe").lastName)
  newFunction("William", "Imoh").fullName()
  console.log("=================");

//Soal 4
console.log("SOAL 4");

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
let {name : phoneName, brand: phoneBrand, year: year, colors} = phone
let [colorBronze, colorWhite, colorBlack] = colors

  // kode di bawah ini jangan dirubah atau dihapus
  console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)
  console.log("=================");

//Soal 5
console.log("SOAL 5");
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

let gabung ={
    ...buku,
    ...dataBukuTambahan,
    warnaSampul : [...buku.warnaSampul,...warna]
}

console.log(gabung);
console.log("=================");