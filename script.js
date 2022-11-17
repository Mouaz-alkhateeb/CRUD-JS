// fetch("https://www.breakingbadapi.com/api/").then(function (response) {
//     return response.json();
// }).then(function (data) {
//     console.log(data);
// })

// const api = "https://www.breakingbadapi.com/api/characters/";
// async function get() {
//     const response = await fetch("https://www.breakingbadapi.com/api/characters/");
//     const data = await response.json();
//     const value = Object.en(data).map(m => m);
//     console.log(value);

//     document.querySelector("#content h1").innerHTML = `<h3>${data[0].name}(${data[0].nickname})</h3>`;
//     document.querySelector("#content img").src = data[0].img;

    // const print = data.map(m => m.name);
    // console.log(print);

    // data.map(function (actor) {
    //     console.log(actor.name);
    // })

//     document.querySelector("#select").innerHTML =
//         `<select onchange="getch(this.value)">
//         <option>please select name</option>
//              ${data.map(actor => `<option>${actor.name}</option>`)}
//         </select>`;
// }
// get();
// async function getch(val) {
//     if (val != 'please select name') {
//         const response = await fetch(`${api}?name=${val}`);
//         const data = await response.json();
//         document.querySelector("#content h1").innerHTML = `<h3>${data[0].name}(${data[0].nickname})</h3>`;
//         document.querySelector("#content img").src = data[0].img;
//     } else {
//         console.log("errrrrrrrrrrrrrrrrrrrrrrorrr.....!!!");
//     }
// }



