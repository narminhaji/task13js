// 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.

let soz= prompt(" AD DAXIL EDIN ");
 let numbers = "ADIN UZUNLUĞU " + soz.length;
 console.log(numbers);

// 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.
 let simvol = prompt("SIMVOL DAXIL EDIN ");
 console.log(soz.includes(simvol));

// 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.
 console.log(soz.startsWith(simvol));

// 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.
 console.log(soz.endsWith(simvol));

// 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.
  console.log(soz.indexOf(simvol));

// 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.
function isUppercase(name) {
    return name === name.toUpperCase();
}