let btn = document.querySelector(".btn");
let select1 = document.querySelector(".select1");
let select2 = document.querySelector(".select2");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

input1.focus();
let a;
let lang = function () {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", input1.value);
  encodedParams.append("target", select2.value);
  encodedParams.append("source", select1.value);

  const options1 = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "d96eedff8amshdd02469b5410f36p180a4fjsn615e157008b4",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    options1
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

  const options1 = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "d96eedff8amshdd02469b5410f36p180a4fjsn615e157008b4",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options1
  )
    .then((response) => response.json())
    .then(
      (response) =>
        (input2.value = response.data.translations[0].translatedText)
    )
    .catch((err) => console.error(err));
});
