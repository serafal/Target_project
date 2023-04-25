let model_confirm_point = false;

function settings_confirm () { //Проверка того, что данные введены 
                            //+ предложить выбрать дополнительные параметры для ещё одной модели
                            // + сохранение параметров в JSON 
    const vae_input = document.getElementById("vae"); //типы моделей
    const dae_input= document.getElementById("dae");
    const ncf_input= document.getElementById("ncf");

    const new_input = document.getElementById("only_new"); //настройки товаров
    const buyed_input= document.getElementById("only_buyed");
    const all_input= document.getElementById("all");

    const settings_confirm_butt = document.getElementById("settings_confirm_butt")
    const next_page_a = document.getElementById("next_page_a")

    let vae = vae_input.checked; //типы моделей
    let dae = dae_input.checked;
    let ncf = ncf_input.checked;

    let only_new = new_input.checked; //настройки товаров
    let only_buyed = buyed_input.checked;
    let all = all_input.checked;

    if ((vae !== true && dae !== true && ncf !== true) || (only_new !== true && only_buyed !== true && all !== true))  { /*Проверка выбора модели*/
       return alert ('Не выбран тип модели');
    } else {
        let mod_choose_confurm = confirm("Тип модели выбран \n Желаете ли вы выбрать дополнительные параметры обучения?");
        console.log (mod_choose_confurm);
        if (mod_choose_confurm) {
            
        } else {
            settings_confirm_butt.disabled = "disabled";
            
        }
      return model_confirm_point = true;
    }                                     
}

function next_page() { //Проверка на то, что пользователь ввёл параметры хотя бы один раз, 
    if (model_confirm_point == true) { //Проверка подтверждения модели
        window.location.href = 'learn_period.html';//спросить, не хочет ли он внести корректировки перед переходом на след.страницу
    } else {
      return alert ('Не выбран тип модели');
    }                        
}