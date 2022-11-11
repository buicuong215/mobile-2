class Footer extends HTMLElement {
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


  .footer {
  padding: 50px 150px;
  border-top: 4px solid #f0f0f0;
  padding-bottom: 0;
}

.footer,
.footer a {
  color: #999;
  font-size: 1.4rem;
}

.footer p {
  margin-bottom: 1.5rem;
}

.footer .footer-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
}

.footer ul {
  list-style: none;
}

.footer li {
  line-height: 1.9;
}

.footer a:hover {
  color: #000;
}

.footer .lang-select {
  margin-top: 2rem;
  color: #999;
  background-color: #000;
  background-image: none;
  border: 1px solid #333;
  padding: 1rem 1.2rem;
  border-radius: 5px;
}

.img {
  display: inline-block;
}

.copyright {
  text-align: center;
  margin-top: 20px;
}

.footer:hover {
  border-top: 4px solid red;
}
a{
    text-decoration:none;
}
        </style>
       <footer class="footer">
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
    </footer>`;
  }
}

export default Footer;
