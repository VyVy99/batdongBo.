// // minh muon tao 3 function ve: nau com, giat do, lau nha
function nauCom() {
    console.log('da nau com');
}

async function giatDo() {
 
    setTimeout(() => {
        console.log('da giat do');
        return "toi giat do r"
    }, 2000)

}

// function lauNha() {
//     console.log('da lau nha');
// }
// nauCom();
// giatDo();// bat dong bo
// lauNha();
// // ES5=>callbcak function
// // ES6=>PROMISE,
// // ES7=>Async, Await 
// // XU LI BAT DONG BO BANG ES5
// function diHoc() {
//     console.log('toi di hoc');
// }
// function diVe(hamDiHoc) {
//     setTimeout(() => {
//         hamDiHoc()
//         console.log('toi di ve');
//     }, 3000)
// }
// function diChoi() {
//     console.log('toi di choi');
// }
// //truyen function diHoc vao function diVe theo dang tham so
// diVe(diHoc);
// // Xu ly bat dong bo vs Promise (loi hua),
// // resolve, reject hai tham so dai dien
// let promise = new Promise((resolve, reject) => {
//     let soHocSinh = 400;
//     setTimeout(() => {
//         if (soHocSinh == 500) {
//             resolve("so hoc sinh dat 500");
//         } else {
//             reject(new Error("so hoc sinh ko dat du"));
//         }
//     }, 5000);

// });
// // then giup xu ly khi cac tac vu chay thanh cong
// //catch giups xu luy khi co loi xay ra or that bai
// promise
//     .then((result, resolve) => {
//         // noi xu ly cac tac vu sau khi chay xong bat dong bo
//         giatDo()// bat dong bo
//         resolve('da chay xong giat do')

//     })
//     // .then((result) => {
//     //     console.log(result);
//     //     nauCom();
//     // })
//     .catch((err) => {
//         console.log(err);
//     });

// dung async await de xu ly bat dong bo
async function getAllData() {

    try {
        let data = await axios({
            method: "GET",
            url: "https://shop.cyberlearn.vn/api/Product",
        });
        let ketQua = await giatDo();
    } catch (error) {
        console.log(error);
        // thong bao cho ng dung
    }
};
console.log(getAllData());


