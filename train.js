// console.log("train area");

// TASK-C
class Shop {
        constructor(non, lagmon, cola) {
          this.non = non;
          this.lagmon = lagmon;
          this.cola = cola;
        }
      
        qoldiq() {
          const now = new Date().toLocaleTimeString();
          console.log(`Hozir ${now}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud!`);
        } 

        sotish(product, minus) {
                if (product === 'non') {
                    this.non -= minus;
                } else if (product === 'lagmon') {
                    this.lagmon -= minus;
                } else if (product === 'cola') {
                    this.cola -= minus;
                } else {
                        console.log("Sotiladigan Mahsulot tanlanmadi!");
                }
                const now = new Date().toLocaleTimeString();
                console.log(`Hozir ${now}da ${minus}ta ${product} sotildi!`);
            }
      
        qabul(product, add) {
                if (product === 'non') {
                    this.non += add;
                } else if (product === 'lagmon') {
                    this.lagmon += add;
                } else if (product === 'cola') {
                    this.cola += add;
                } else {
                        console.log("Qabul qilinadigan Mahsulot tanlanmadi!");
                }
                const now = new Date().toLocaleTimeString();
                console.log(`Hozir ${now}da ${add}ta ${product} qabul qilindi!`);
            }
        }
            
      
      const shop = new Shop(4, 5, 2);
      shop.qoldiq(); 
      shop.sotish('non', 4); 
      shop.qabul('cola', 4);
      shop.qoldiq(); 
      
      

//TASK -B

// function findNum(a) {
//     let count = 0;
//     for(let i = 0; i < a.length; i++) {
//         if (! isNaN(a[i])) {
//             count++;
//         }
//     }
//         return count;
// }
// console.log(findNum("1tsdfs5fs8asdsa9"));




// // A-TASK
// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countLetter("e", "engineer"));


// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", //0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ];

// Callback functions
// function maslahatBering(a, callback) {
// if (typeof a !== "number") callback("insert a number", null); 
// else if (a <= 20) callback(null, list[0]); 
// else if (a > 20 && a <= 30) callback(null, list[1]);
// else if (a > 30 && a <= 40) callback(null, list[2]);
// else if (a > 40 && a <= 50) callback(null, list[3]); 
// else if (a > 50 && a <= 60) callback(null, list[4]);
// else {

//     setTimeout(function () {
//         callback(null, list[5]);
//     }, 5000);
    
//     // setInterval(function () {
//     //     callback(null, list[5]);
//     //  }, 5000);
    
//   }
// }

// console.log("passed here 0");
// maslahatBering(61, (err, data) => { 
//     if (err) console.log("ERROR:", err);
//     console.log("javob:", data);
// });

// console.log("passed here 1");


//ASYNC functions 
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number"); 
//     else if (a <= 20) return list[0]; 
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3]; 
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         // return list[5];
        
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {                            
//                 resolve(list[5]);
//             }, 5000); 
//         }); 

        // return new Promise((resolve, reject) => {                        //keyin tushuntiriladi.     
        //     setInterval(() => {
        //         resolve(list[5]);
        //     }, 5000); 
        // });
       
//     }
// }


    
// call via then/catch 
// console.log("passed here 0");
// maslahatBering(25)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");


// call via async/ await

// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
   
//     javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
    
// }

// run();
// console.log("hi");

// async function run() {
//     let javob = await maslahatBering(65);          
//     console.log(javob);
// }
// run();







