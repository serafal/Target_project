function setNowDate() {
    const learn_start_input = document.getElementById("learn_start"); //Период обучения
    const learn_end_input= document.getElementById("learn_end");

    const valid_start_input = document.getElementById("valid_start"); //Период валидации
    const valid_end_input= document.getElementById("valid_end");

    let date_now = () => { //Получение текущей даты в формате input
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
        if (month <= 9) {
          month = "0" + month;
        }
      let day = date.getDate();
      if (day <= 9) {
        day = "0" + day;
      }
      return year + "-" + month + "-" + day 
    };

    console.log(date_now());

    learn_start_input.min = date_now();
    learn_end_input.min = date_now();
    valid_start_input.min = date_now();
    valid_end_input.min = date_now(); //установка минимальной даты для выставления
}

setNowDate();