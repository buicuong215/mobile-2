class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
    *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: sans-serif;
  height: 120vh;
}


    .header{
    background-color: red;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 150px;
    z-index: 9999;
}

.logo a{
color: #fff;
text-decoration: none;
font-size: 28px;
font-weight:500;

}

.logo a:hover{
    color:black;
}

.input {
  height: 36px; 
  display: flex;
  align-items: center;
}


.search-input{
    height: 100%;
    border-radius: 8px;
    border: transparent;
    padding:0 20px;
    width: 300px;
}

.search-input:focus{
    outline: none;
}

.btn-search {
  display: flex;
  align-items: center;  
  width: 40px;
  height: 30px;
  background-color: red;
  align-items: center;
  justify-content: center;
  margin-left: -45px;
}

.btn-search ion-icon{
    font-size: 20px;
    color: #fff;
}

.btn-search:hover ion-icon{
    color: black;
}

.nav{
    font-size: 14px;
    display: flex;
}

.nav-item{
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    transition: all 0.3s;
   
}

.nav-item:not(:last-child){
    margin-right: 30px;
}

.nav-item ion-icon{
    font-size: 20px;
}

.nav-item:hover{
    color: black;
}

        </style>
         <header class="header">
      <div class="logo"><a href="/index.html">Mobile Store</a></div>
       <div class="input">
            <input type="text" class="search-input" placeholder="Bạn cần tìm gì?" required>
            <a class="btn-search"  href="#"><ion-icon name="search-outline"></ion-icon></a>
        </div>
        <nav class="nav">
            <a href="./src/pages/products/products.html" class="nav-item">
                <ion-icon name="phone-portrait-outline"></ion-icon>
                <div>Điện Thoại</div>
            </a>
            <a href="./src/pages/cart/cart.html" class="nav-item">
                <ion-icon name="cart-outline"></ion-icon>
               <div>Giỏ Hàng</div> 
            </a>
            <a href="./src/pages/sign/sign.html" class="nav-item">
                <ion-icon name="person-circle-outline"></ion-icon>
                <div>Đăng kí</div>
            </a>
        </nav>
    </header>`;
  }
}

export default Header;
