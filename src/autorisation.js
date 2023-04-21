const log = console.log;

function autorisation_check() { //Проверка данных захода на главную страницу
    const login_input = document.getElementById('login-input');
    const password_input= document.getElementById('password-input');
    const login = login_input.value;
    const password = password_input.value;
    if (login === 'admin' && password === '123qwe') { //хардкод данных пользователя, нужно пределать под API
        window.location.href = '../index.html';
    } else {
      return alert ('Данные неверны');
    }
}