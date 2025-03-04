const STORAGE_KEY = "feedback-form-state";

let formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[type='email']");
const textarea = form.querySelector("textarea");


populateForm();

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);

function onFormSubmit(event) {
    event.preventDefault();
    
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }
    
    console.log(formData); 

    localStorage.removeItem(STORAGE_KEY);
    form.reset();

    formData = { email: "", message: "" };
}

function onFormInput() {
    formData.email = emailInput.value.trim();
    formData.message = textarea.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if (!savedData) {
        return;
    }

    formData = JSON.parse(savedData); 
    emailInput.value = formData.email || "";
    textarea.value = formData.message || "";
}





