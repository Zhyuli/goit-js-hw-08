import throttle from 'lodash.throttle';


const KEY_STORAGE = "feedback-form-state";
// const parse_el = JSON.parse(localStorage.getItem(KEY_STORAGE));
// console.log(parse_el);
feedbackForm = document.querySelector('.feedback-form');
console.log(feedbackForm);

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

let dataForm = JSON.parse(localStorage.getItem(KEY_STORAGE)) || {};
const { email, message } = feedbackForm.elements;
reloadPage();

function onInput(evt) { 
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataForm));
}

function reloadPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}

function onSubmit(evt) { 
    evt.preventDefault();
    console.log({ email: email.value, message: message.value });
    
    if (email.value === '' || message.value === '') {
        return alert('Please fill the fields!');
    }

    localStorage.removeItem(KEY_STORAGE);
    evt.currentTarget.reset();
    dataForm = {};
}






// function onSubmit(evt) {
//    evt.preventDefault();

//     const { email, message } = evt.target.elements;
//     console.log({ email: email.value, message: message.value });
//     localStorage.removeItem(KEY_STORAGE);  

// }


// function onInput(evt) {
//     let dataInput = localStorage.getItem(KEY_STORAGE);
//     dataInput = dataInput ? JSON.parse(dataInput) : {};
//     let { email, message } = feedbackForm.elements;
//     dataInput = {
//         email: email.value.trim(),
//         message: message.value.trim(),
//     }
//     dataInput[evt.target.name] = evt.target.value.trim();
//     localStorage.setItem(KEY_STORAGE, JSON.stringify(dataInput));
    
// }