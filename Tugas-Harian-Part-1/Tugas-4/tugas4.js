//Soal 1

console.log("SOAL 1");
console.log("LOOPING PERTAMA");
var i = 1;
while(i<=20){
    if(i%2 == 0){
        console.log(i +" - I love coding");
    }
    i++;
}

console.log("LOOPING KEDUA");
var j = 20;
while(j>=1){
    if(j%2 == 0){
        console.log(j +" - I will become a frontend developer");
    }   
    j--;
}
console.log("==================");

//Soal 2
console.log("SOAL 2");
var i;
for(i=1;i<=20;i++){
    if(i%2 != 0){
        if(i%3 == 0){
            console.log(i +" - I love coding");
        }
        else{
            console.log(i +" - Santai");
        }
    }
    else if(i%2 == 0){
        console.log(i +" - Berkualitas");
    }
}
console.log("==================");

//Soal 3
console.log("SOAL 3");
var i;
var j;
var hasil = '';

for(i=1;i<=7;i++){
    
    for(j=1;j<=i;j++){
        hasil+= "# ";
        
    }
    hasil += '\n';
}
console.log(hasil);
console.log("==================");

//Soal 4
console.log("SOAL 4");
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"];
var hasil;

kalimat.shift();
kalimat.splice(2,1);
console.log(kalimat);

hasil = kalimat.join(" ");
console.log(hasil);
console.log("==================");

//Soal 5
console.log("SOAL 5");
var sayuran=[]
var i;
var j;

sayuran.push("Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge");
sayuran.sort();
for(i=0;i<=sayuran.length -1;i++){
    j = i+1;
    console.log(j+". "+sayuran[i]);
}
console.log("==================");



