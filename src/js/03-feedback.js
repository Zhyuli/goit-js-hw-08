import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
// console.dir(feedbackForm);

const KEY_STORAGE = "feedback-form-state";
// const parse_el = JSON.parse(localStorage.getItem(KEY_STORAGE));
// console.log(parse_el);

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);


function onSubmit(evt) {
   evt.preventDefault();

    const { email, message } = evt.target.elements;
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(KEY_STORAGE);  

}


function onInput(evt) {
    let dataInput = localStorage.getItem(KEY_STORAGE);
    dataInput = dataInput ? JSON.parse(dataInput) : {};
    let { email, message } = feedbackForm.elements;
    dataInput = {
        email: email.value.trim(),
        message: message.value.trim(),
    }
    dataInput[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataInput));
    
}