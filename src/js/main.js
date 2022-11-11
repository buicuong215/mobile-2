

const host = window.location.host;
console.log(host);

const header = `
      <div class="logo"><a href="/index.html">Mobile Store</a></div>
       <div class="input">
            <input type="text" class="search-input" placeholder="Bạn cần tìm gì?" required>
            <a class="btn-search"  href="#"><ion-icon name="search-outline"></ion-icon></a>
        </div>
        <nav class="nav">
            <a href="http://${host}/src/pages/products/products.html" class="nav-item">
                <ion-icon name="phone-portrait-outline"></ion-icon>
                <div>Điện Thoại</div>
            </a>
            <a href="http://${host}/src/pages/cart/cart.html" class="nav-item">
                <ion-icon name="cart-outline"></ion-icon>
               <div>Giỏ Hàng</div> 
            </a>
            <a href="http://${host}/src/pages/sign/sign.html" class="nav-item">
                <ion-icon name="person-circle-outline"></ion-icon>
                <div>Đăng kí</div>
            </a>
        </nav>`;

document.querySelector(".header").innerHTML = header;
const footer = `
    <div class="footer-cols">
        <ul>
          <li>
            <a href="#">Tìm cửa hàng gần nhất </a>
          </li>
          <li><a href="#">Mua hàng từ xa</a></li>
          <li>
            <a href="#">Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</a>
          </li>
        </ul>
        <ul>
          <li><a href="#">Gọi mua hàng 1800.2097 (8h00 - 22h00)</a></li>
          <li><a href="#">Gọi mua hàng 1800.2097 (8h00 - 22h00)</a></li>
          <li><a href="#">Gọi khiếu nại 1800.2063 (8h00 - 21h30)</a></li>
        </ul>
        <ul>
          <li><a href="#">Mua hàng và thanh toán Online</a></li>
          <li><a href="#">Mua hàng trả góp Online</a></li>
          <li><a href="#">Tra thông tin đơn hàng</a></li>
          <li><a href="#">Tra điểm Smember</a></li>
          <li><a href="#">Tra thông tin bảo hành</a></li>
          <li><a href="#">Tra cứu hoá đơn điện tử</a></li>
          <li><a href="#">Trung tâm bảo hành chính hãng</a></li>
          <li><a href="#">Quy định về việc sao lưu dữ liệu</a></li>
          <li><a href="#">Dịch vụ bảo hành điện thoại</a></li>
        </ul>
        <ul>
          <li><a href="#">Khách hàng doanh nghiệp (B2B)</a></li>
          <li><a href="#">Ưu đãi thanh toán</a></li>
          <li><a href="#">Quy chế hoạt động</a></li>
          <li><a href="#">Chính sách Bảo hành</a></li>
          <li><a href="#">Liên hệ hợp tác kinh doanh</a></li>
          <li><a href="#">Tuyển dụng</a></li>
        </ul>
      </div>

      <p class="copyright">Copyright &copy;by <strong>Nhóm 2</strong></p>
   `;

document.querySelector(".footer").innerHTML = footer;
































