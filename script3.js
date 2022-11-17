let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let total = document.getElementById('total');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp;

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = 'green';
    } else {
        total.innerHTML = '';
        total.style.backgroundColor = 'rgb(141, 25, 17)';
    }
}


let allData;
if (localStorage.products != null) {
    allData = JSON.parse(localStorage.products)
} else {
    allData = [];
}
submit.onclick = function () {
    let prod = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        count: count.value,
        category: category.value.toLowerCase(),
        total: total.innerHTML,
    };
    if (title.value != '' && price.value != '' && taxes.value != '' && ads.value != '' && discount.value != '' && category.value != '' && total.value != '' && prod.count <= 100) {
        if (mood === 'create') {
            if (prod.count > 1) {
                for (let i = 0; i < prod.count; i++) {
                    allData.push(prod)
                }
            } else {
                allData.push(prod)
            }
        } else {
            allData[tmp] = prod;
            mood = 'create';
            submit.innerHTML = 'create';
            count.style.display = "block";
        }
        clearData();
    }

    localStorage.setItem('products', JSON.stringify(allData));
    showProd();
}
function clearData() {
    title.value = '',
        price.value = '',
        taxes.value = '',
        ads.value = '',
        discount.value = '',
        count.value = '',
        category.value = '',
        total.innerHTML = ''
}
function showProd() {
    getTotal();
    let table = '';
    for (let i = 0; i < allData.length; i++) {
        table += `
        <tr>
            <td>${i + 1}</td>
            <td>${allData[i].title}</td>
            <td>${allData[i].price}</td>
            <td>${allData[i].taxes}</td>
            <td>${allData[i].ads}</td>
            <td>${allData[i].count}</td>
            <td>${allData[i].total}</td>
            <td>${allData[i].discount}</td>
            <td>${allData[i].category}</td>
            <td> <button id="update" onclick="updateProd(${i})" >update</button></td>
            <td> <button id="delete" onclick="deleteProd(${i})">delete</button></td>
        </tr>
        `
    }
    document.getElementById("table").innerHTML = table;
    let btnDeleteAll = document.getElementById("deleteAll");
    if (allData.length > 0) {
        btnDeleteAll.innerHTML = `<button onclick="deleteAll()">Delete All(${allData.length})</button>`
    } else {
        btnDeleteAll.innerHTML = '';
    }
}
showProd();

function deleteProd(i) {
    allData.splice(i, 1);
    localStorage.products = JSON.stringify(allData);
    showProd();
}
function deleteAll() {
    localStorage.clear();
    allData.splice(0);
    showProd();
}

function updateProd(i) {
    title.value = allData[i].title;
    price.value = allData[i].price;
    taxes.value = allData[i].taxes;
    ads.value = allData[i].ads;
    getTotal();
    count.style.display = "none";
    count.value = allData[i].count;
    discount.value = allData[i].discount;
    category.value = allData[i].category;
    submit.innerHTML = 'update';
    mood = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: "smooth"
    });
}

let searchMood = "By title";
function search(id) {
    let inputSearch = document.getElementById('search');
    if (id == "searchBytitle") {
        searchMood = "By title";

    } else {
        searchMood = "By category";

    }
    inputSearch.placeholder = "search " + searchMood;
    inputSearch.focus();
    inputSearch.value = '';
    showProd();

}

function searchData(value) {
    let table = '';
    for (let i = 0; i < allData.length; i++) {
        if (searchMood == "By title") {

            if (allData[i].title.includes(value.toLowerCase())) {
                table += `
                <tr>
                <td>${i + 1}</td>
                    <td>${allData[i].title}</td>
                    <td>${allData[i].price}</td>
                    <td>${allData[i].taxes}</td>
                    <td>${allData[i].ads}</td>
                    <td>${allData[i].count}</td>
                    <td>${allData[i].total}</td>
                    <td>${allData[i].discount}</td>
                    <td>${allData[i].category}</td>
                    <td> <button id="update" onclick="updateProd(${i})" >update</button></td>
                    <td> <button id="delete" onclick="deleteProd(${i})">delete</button></td>
                </tr>
                `

            }
        } else {

            if (allData[i].category.includes(value.toLowerCase())) {
                table += `
                <tr>
                <td>${i + 1}</td>
                    <td>${allData[i].title}</td>
                    <td>${allData[i].price}</td>
                    <td>${allData[i].taxes}</td>
                    <td>${allData[i].ads}</td>
                    <td>${allData[i].count}</td>
                    <td>${allData[i].total}</td>
                    <td>${allData[i].discount}</td>
                    <td>${allData[i].category}</td>
                    <td> <button id="update" onclick="updateProd(${i})" >update</button></td>
                    <td> <button id="delete" onclick="deleteProd(${i})">delete</button></td>
                </tr>
                `
            }

        }
        document.getElementById("table").innerHTML = table;
    }
}

