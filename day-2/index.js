function onSubmitClick() {
    const emailid = document.querySelector('[type=email]').value;
    console.log('Emailid :: ', emailid);
    if (emailid) {
        const index = emailid.indexOf('@');
        document.querySelector('#user').value = emailid.substr(0, index);
        document.querySelector('#domain').value = emailid.substr(index);
        document.querySelector('#error').innerText = 'Successfully email and domain sperated';
        document.querySelector('#error').style.color = 'green';
    } else {
        document.querySelector('#error').innerText = 'Please enter a valid email id.'
        document.querySelector('#error').style.color = 'red';
    }
}

document.querySelector('button').addEventListener('click', onSubmitClick);