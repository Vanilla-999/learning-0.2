window.onload = function() {

    const btn = document.getElementById('contact-btn');

btn.addEventListener('click', function() {
  alert("Спасибо! Я свяжусь с тобой скоро!"); 
  // 1. Сохраняем старый текст, чтобы вернуть его потом
  const originalText = btn.textContent;

  // 2. Меняем текст на кнопке
  btn.textContent = 'Message send';
  
  // 3. Блокируем кнопку
  btn.disabled = true;

  // 4. Через 3 секунды возвращаем всё как было
  setTimeout(function() {
    btn.textContent = originalText; // Возвращаем "Contact Me"
    btn.disabled = false;
  }, 3000);
});
}