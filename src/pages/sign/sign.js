// Event click to button

$(function () {
  let email =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let password = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
  let username = /[a-z0-9_-]{3,15}$/;

  $("#button1").click(function () {
    if ($("#username").val() == "") {
      $(".error-username").css("color", "red");
      $(".error-username").text("Không được để trống tài khoản");
    } else if ($("#username").val() != username) {
      $(".error-username").text("Tài khoản không hợp lệ");
    }

    if ($("#password").val() == "") {
      $(".error-password").css("color", "red");
      $(".error-password").text("Không được để trống mật khẩu");
    }
  });

  $("#button2").click(function () {
    alert("Đăng ký thành công");
  });
});

// JS
