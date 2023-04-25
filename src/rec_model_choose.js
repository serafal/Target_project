let model_confirm_point = false; //Маркер проверки того, что модель выбрана

function model_confirm() {
    const user_set_input = document.getElementById("user_based");
    const item_set_input= document.getElementById("item_based");
    const user_set = user_set_input.checked;
    const item_set = item_set_input.checked;

    console.log(user_set, item_set, model_confirm_point);

    if (user_set !== true && item_set !== true) { /*Проверка выбора модели*/
    console.log(model_confirm_point);
       return alert ('Не выбран тип модели');
    } else {
        alert ('Тип модели выбран');
      return model_confirm_point = true;
    }
     
}

function setings_trans() {
    if (model_confirm_point == true) { //Проверка подтверждения модели
        window.location.href = 'model_setings.html';
    } else {
      return alert ('Не выбран тип модели');
    }
}
