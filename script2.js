// let img = document.getElementById("img");
// img.setAttribute('alt', 'mouazzzzz')
// img.setAttribute('title', 'myyyy')
// img.removeAttribute("title")
// console.log(img.attributes);

// let dollar = document.getElementById("dollar");
// let lira = document.getElementById("lira");

// dollar.onkeyup = function () {
//     lira.value = dollar.value * 5000;
// }
// lira.onkeyup = function () {
//     dollar.value = lira.value / 5000;
// }

// let after = document.getElementById("after");
// let before = document.getElementById("before");
// let append = document.getElementById("append");
// let text = document.getElementById("text");
// let container = document.getElementById("container");

// container.style.backgroundColor = '#FF8';
// container.style.height = '100px';

// after.onclick = function () {
//     container.after(text);
// }
// before.onclick = function () {
//     container.before(text);
// }
// append.onclick = function () {
//     container.append(text);
// }

// let container = document.getElementById("container");

// // container.onclick = function () {
// //     container.classList.add("name");
// // }
// container.onclick = function () {
//     container.classList.toggle("name");
// // }
// let input = document.getElementById("input");
// window.onload = function () {
//     input.focus();
// }
// let btn = document.getElementById("btn");
// window.onscroll = function () {
//     if (this.scrollY >= 400) {
//         btn.style.display = 'block';
//     } else {
//         btn.style.display = 'none';
//     }
// }
// btn.onclick = function () {
//     scroll({
//         left: 0,
//         top: 0,
//         behavior: "smooth"
//     })
// }

// let x = 0;
// let y = setInterval(function () {
//     console.log(x++);
//     if (x > 3) {
//         clearInterval(y);
//     }
// }, 1000);

// localStorage.name = "mouaz alkhateeb";
// localStorage.setItem("skills", JSON.stringify([1, 2, 3]))
// localStorage.setItem("users", JSON.stringify({
//     name: "mouaz alkhateeb",
//     age: 23
// }))
// console.log(JSON.parse(localStorage.getItem("skills")));
// console.log(JSON.parse(localStorage.getItem("users")));
// console.log(localStorage.key(2));

//console.log(typeof localStorage.getItem("skills"));
//console.log(typeof localStorage.getItem("users"));

//localStorage.removeItem("users");
// localStorage.clear();