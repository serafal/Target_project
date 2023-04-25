let model_confirm_point = false;

function sending_files() {
    const history_input = document.getElementById('purchase-history');
    const product_input= document.getElementById('product-catalog');
    const history = history_input.value;
    const product = product_input.value;

    console.log(product, history);

    if (product != '' && history != '') { /*Заглушка проверки загруженных файлов. В дальнейшем потребуется
                                          переделать корректно - как минимум, проверка на валидность файла*/
    alert ('Файлы отправлены')    
     return model_confirm_point = true;
    } else {
      return alert ('Не выбран один или несколько файлов для загрузки');
    } 
}

function next_page() {
    if (model_confirm_point == true) { //Проверка подтверждения модели
      window.location.href = './rec_model_choose.html';
  } else {
    return alert ('Не выбран один или несколько файлов для загрузки');
  } 
}