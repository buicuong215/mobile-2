const btnPay = document.querySelector(".btn-pay");
const notification = document.querySelector(".notification");
const btnClose = document.querySelector(".btn-close");


btnPay.addEventListener("click", (e) => {
    notification.classList.add("open");
})

btnClose.addEventListener("click", (e) => {
    notification.classList.remove("open");
})

