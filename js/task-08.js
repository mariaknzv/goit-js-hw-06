const loginFrom = document.querySelector('.login-form');

loginFrom.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email === '' || password === '') {
        alert('Будь ласка, заповніть всі поля')
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
    }
    event.currentTarget.reset();
}
