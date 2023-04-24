function sending_files() {
    const history_input = document.getElementById('purchase-history');
    const product_input= document.getElementById('product-catalog');
    const history = history_input.value;
    const product = product_input.value;

    console.log(product, history);

    if (product != '' && history != '') { /*Заглушка проверки загруженных файлов. В дальнейшем потребуется
                                          переделать корректно - как минимум, проверка на валидность файла*/
        window.location.href = './rec_model_choose.html';
    } else {
      return alert ('Не выбран один или несколько файлов для загрузки');
    } 
}