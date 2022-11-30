const consolelog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#Alert');
const Prompt = document.querySelector('#Prompt');

consolelog.addEventListener('click', () =>{
alert('Служит для вывода информации в консоль');
})

Alert.addEventListener('click', () =>{
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
    })

Prompt.addEventListener('click', () =>{
    prompt('Отображает диалоговое окно с запросом на ввод текста');
    })