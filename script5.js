const warpper = document.querySelector(".warpper");
const BtnGenerate = document.querySelector(".form button");
const InputGenerate = document.querySelector(".form input");
const ImgGenerate = document.querySelector(".qr-code img");


BtnGenerate.addEventListener('click', () => {
    let qrValue = InputGenerate.value;
    if (!qrValue) return;
    ImgGenerate.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    ImgGenerate.addEventListener('load', () => {
        warpper.classList.add('active');
        BtnGenerate.innerHTML = "Generate your URL...!!";
    })
})

if (!InputGenerate.value) {
    BtnGenerate.addEventListener("keyup", () => {
        warpper.classList.remove('active');
    })

}
