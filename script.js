// const functionRet = async function () {
//   // 1 - usul;
//   // console.time("s");

//   // const data1 = await fetch("https://restcountries.com/v2/name/uzbekistan");
//   // const data1Json = await data1.json();

//   // const data2 = await fetch("https://restcountries.com/v2/name/uzbekistan");
//   // const data2Json = await data2.json();

//   // const data3 = await fetch("https://restcountries.com/v2/name/uzbekistan");
//   // const data3Json = await data3.json();

//   // const data4 = await fetch("https://restcountries.com/v2/name/uzbekistan");
//   // const data4Json = await data4.json();

//   // const data5 = await fetch("https://restcountries.com/v2/name/uzbekistan");
//   // const data5Json = await data5.json();

//   // const data6 = await fetch("https://restcountries.com/v2/name/uzbekistan");
//   // const data6Json = await data6.json();
//   // console.log(data1Json, data2Json, data3Json, data4Json, data5Json, data6Json);
//   // console.timeEnd("s");

//   // 2 - usul;
//   const time = function (sec) {
//     return new Promise(function (resolve) {
//       setTimeout(() => {
//         resolve("Network connection error");
//       }, sec * 1000);
//     });
//   };

//   const data = Promise.all([
//     fetch("https://restcountries.com/v2/name/uzbekistan"),
//     fetch("https://restcountries.com/v2/name/usa"),
//     fetch("https://restcountries.com/v2/name/russia"),
//   ]);

//   const data1 = await Promise.race([time(2), data]);
//   console.log(data1);
// };

// functionRet();

let btn = document.querySelector(".btn");
let select1 = document.querySelector(".select1");
let select2 = document.querySelector(".select2");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

input1.focus();
const encodedParams = new URLSearchParams();
encodedParams.append("q", "Hello, my world I love you !");
encodedParams.append("target", "ru");
encodedParams.append("source", "en");

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    "X-RapidAPI-Key": "c645510d69msha399047b649c2b1p1b85dbjsn8531fb6c7dc4",
  },
  body: encodedParams,
};

function convert() {
  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
convert();
