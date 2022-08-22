import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const KEY_STORAGE = "feedback-form-state";
// const formData = {
//     email: input.value,
//     message: message.value,
// };
// const selectedFilters = {};

form.addEventListener('submit', formSend);
form.addEventListener('input', throttle(onInputFormState, 500));
saveState();

function formSend (e) {
    e.preventDefault();
    const formData = new FormData(form);
    formData.forEach((name, value) => {
        
        console.log(name, value);
    })   
    if (formData.value === "") {
        return alert('Заплните все поля');
    }
    
    console.log("Form to send:", JSON.parse(localStorage.getItem(KEY_STORAGE)));
    form.reset();
    localStorage.removeItem(KEY_STORAGE);
}



function onInputFormState(e) {
    const email = input.value;
    const message = messageEl.value;
    const selectedFilters = {
        email,
        message,
    }
    localStorage.setItem(KEY_STORAGE, JSON.stringify(selectedFilters))
}

function saveState() {
    let saveForm = localStorage.getItem(KEY_STORAGE);
    saveForm = JSON.parse(saveForm);
    if (saveForm) {
        input.value = saveForm.email
        messageEl.value = saveForm.message;
    }
}

// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
