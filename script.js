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
let a;
let lang = function () {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", "Hello, world!");
  encodedParams.append("target", "es");
  encodedParams.append("source", "en");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "968eebc5f3mshb49fccc8305d273p164495jsn40395bd1cdf1",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    options
  )
    .then((response) => response.json())
    .then((response) =>
      response.data.languages.forEach((element) => {
        let html = `<option value="${element.language}">${element.language}</option>;`;
        select1.insertAdjacentHTML("beforeend", html);
        select2.insertAdjacentHTML("beforeend", html);
      })
    )
    .catch((err) => console.error(err));
};

lang();

btn.addEventListener("click", function () {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", input1.value);
  encodedParams.append("target", select2.value);
  encodedParams.append("source", select1.value);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "968eebc5f3mshb49fccc8305d273p164495jsn40395bd1cdf1",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options
  )
    .then((response) => response.json())
    .then(
      (response) =>
        (input2.value = response.data.translations[0].translatedText)
    )
    .catch((err) => console.error(err));
});
