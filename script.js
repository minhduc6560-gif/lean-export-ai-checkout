(() => {
  "use strict";

  const form = document.querySelector("#demo-form");
  const status = document.querySelector("#form-status");

  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Vui lòng hoàn thành các trường bắt buộc và kiểm tra lại email.";
      status.classList.add("is-error");
      return;
    }

    status.textContent = "Đăng ký demo đã được ghi nhận trong bản mẫu. Biểu mẫu này không gửi dữ liệu ra ngoài.";
    status.classList.add("is-success");
    status.focus();
  });
})();
