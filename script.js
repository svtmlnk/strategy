// Демо-обработка формы: проверка полей и сообщение. Подключите свой backend.
const form = document.getElementById("contact-form");
const status = form.querySelector(".form__status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    status.textContent =
      "Заполните ФИО, телефон, почту и подтвердите согласие.";
    return;
  }
  status.textContent =
    "Заявка отправлена. Мы свяжемся с вами в ближайшее время.";
  form.reset();
});

AOS.init({
  once: true,
});
