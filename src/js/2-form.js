const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[type='email']");
const textarea = form.querySelector("textarea");

populateForm();

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);

function onFormSubmit(event) {
    event.preventDefault();
    if (!emailInput.value.trim() || !textarea.value.trim()) {
        alert("Fill please all fields");
        return;
    }
    
    console.log({ email: emailInput.value, message: textarea.value });

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}

function onFormInput() {
    const formData = {
        email: emailInput.value.trim(),
        message: textarea.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
        return;
    }

    const { email, message } = JSON.parse(savedData);
    emailInput.value = email || "";
    textarea.value = message || "";
}
