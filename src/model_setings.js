let model_confirm_point = false;
var j = 0; //Счётчик количества заданных моделей

function settings_confirm () { //Проверка того, что данные введены 
                            //+ предложить выбрать дополнительные параметры для ещё одной модели
                            // + сохранение параметров в JSON 

    const settings_confirm_butt = document.getElementById("settings_confirm_butt")

    var model = document.getElementsByName("model_set");
    var check1 = 0;
    for(i=0;i<model.length;i++){
      if(model[i].checked){
        var model_set = model[i].value;
        check1++;
        break;
      }
    }
    var product = document.getElementsByName("product_set");
    var check2 = 0;
    for(i=0;i<product.length;i++){
      if(product[i].checked){
        var product_set = product[i].value;
        check2++;
        break;
      }
    }

    if (check1 && check2)  { /*Проверка выбора модели*/
      j++;  //key number для localStorage
      let set_value = model_set + " " + product_set;
      let key_value = "model_settings" + " " + j.toString();
      localStorage.setItem(key_value, set_value);
      console.log(set_value, j, key_value);     
      let mod_choose_confurm = confirm("Тип модели выбран \n Желаете ли вы выбрать дополнительные параметры обучения?");
      if (!mod_choose_confurm) {
        settings_confirm_butt.disabled = "disabled";
      } 
    return model_confirm_point = true;
    } else {
      return alert ('Не выбраны все параметры модели');
    }                                     
}

function next_page() { //Проверка на то, что пользователь ввёл параметры хотя бы один раз, 
    if (model_confirm_point == true) { //Проверка подтверждения модели
        window.location.href = 'learn_period.html';//спросить, не хочет ли он внести корректировки перед переходом на след.страницу
    } else {
      return alert ('Не выбран тип модели');
    }                        
}