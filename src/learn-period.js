let model_confirm_point = false;

function settings_confirm () { //Проверка того, что данные введены 
                            //+ предложить выбрать дополнительные параметры для ещё одной модели
                            // + сохранение параметров в JSON 
    const learn_start_input = document.getElementById("learn_start"); //Период обучения
    const learn_end_input= document.getElementById("learn_end");

    const valid_start_input = document.getElementById("valid_start"); //Период валидации
    const valid_end_input= document.getElementById("valid_end");

    const settings_confirm_butt = document.getElementById("settings_confirm_butt");
    const next_page_a = document.getElementById("next_page_a");

    let learn_start = learn_start_input.value; //Период обучения
    let learn_end = learn_end_input.value;

    let valid_start = valid_start_input.value; //Период валидации
    let valid_end = valid_end_input.value;

    console.log(learn_start, learn_end, valid_start,valid_end)

    if ((learn_start == "" || learn_end == "") || (valid_start == "" || valid_end == ""))  { /*Проверка выбора модели*/
       return alert ('Не указан период обучения или валидации');
    } else { 

      localStorage.setItem("learn_start", learn_start);
      localStorage.setItem("learn_end", learn_end);
      localStorage.setItem("valid_start", valid_start);
      localStorage.setItem("valid_end", valid_end);

      console.log(localStorage.getItem("learn_start"));
      console.log(localStorage.getItem("learn_end"));
      console.log(localStorage.getItem("valid_start"));
      console.log(localStorage.getItem("valid_end"));

      model_confirm_point = true;
      return alert ('Периоды обучения и валидации отправлены');
    }                            
}

function next_page() { //Проверка на то, что пользователь ввёл параметры хотя бы один раз, 
    if (model_confirm_point == true) { //Проверка подтверждения модели
        window.location.href = 'confurm_setings.html';//спросить, не хочет ли он внести корректировки перед переходом на след.страницу
    } else {
      return alert ('Не введён период обучения и валидации');
    }                        
}


function learn_start_change() { //Ввод начала периода обучения
  const learn_start_input = document.getElementById("learn_start");
  const learn_end_input = document.getElementById("learn_end");  
  learn_end_input.min = learn_start_input.value; //Конец обучения не может быть раньше начала
  learn_end_input.disabled = false; //Активируем ввод следующей даты
}

function learn_end_change() { //Ввод конца периода обучения
  const learn_end_input = document.getElementById("learn_end");
  const valid_start_input = document.getElementById("valid_start");
  valid_start_input.min = learn_end_input.value;
  valid_start_input.disabled = false; 
}

function valid_start_change() { //Ввод начала периода валидации
  const valid_start_input = document.getElementById("valid_start");
  const valid_end_input = document.getElementById("valid_end");
  valid_end_input.min = valid_start_input.value;
  valid_end_input.disabled = false
}
function valid_end_change() { //Ввод конца периода валидации. В данный момент - не нужна.
  const valid_end_input = document.getElementById("valid_end");
}