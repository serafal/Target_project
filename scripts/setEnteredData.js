function setEnteredData() {
   let LS = localStorage;
   
   //Связь со всеми необходимыми элементами формы
   let username = document.getElementById("username"); //Введённое имя

   let model_base = document.getElementById("model_base"); //База модели

   let model_and_product = document.getElementById("model_and_product"); //div типа модели и продуктов
   let model_type = document.getElementById("model_type"); //тип модели
   let product_type = document.getElementById("product_type"); //типы учтённых продуктов

   let learn_start = document.getElementById("learn_start"); // начало обучения
   let learn_end = document.getElementById("learn_end"); //конец обучения
   let valid_start = document.getElementById("valid_start"); //начало валидации
   let valid_end = document.getElementById("valid_end");//конец валидации
   //Ввод в форму сохранённых данных

    username.textContent = LS.getItem("username");
    model_base.textContent = LS.getItem("model_base");

   // model_type.textContent = LS.getItem("model_type");
    //product_type.textContent = LS.getItem("product_type");
    //Из-за особенностей ввода этих параметров требуется написание отдельной логики

    learn_start.value = LS.getItem("learn_start");
    learn_end.value = LS.getItem("learn_end");
    valid_start.value = LS.getItem("valid_start");
    valid_end.value = LS.getItem("valid_end");
}

setEnteredData();