let peopleInfo = [];

document.querySelector('.login-form').style.display = 'none';
document.querySelector('.welcome-page').style.display = 'none';

const submitRegistrationForm = (event) =>{
    
    event.preventDefault();

        const person = {
            firsName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword:  document.getElementById('confirm-password').value
        }
        const isSuccessfullyRegistered = document.querySelector('.checkbox-input').checked && passCheck(person.password, person.confirmPassword);

        if(isSuccessfullyRegistered){
            document.querySelector('#success-registration').innerHTML="Congratulation! You are successfully registered!";

            setTimeout(() =>{
                document.querySelector('#success-registration').style.display='none';
            }, 5000);

            document.querySelector('#success-registration').style.display='block';
            peopleInfo.push(person);
        }

        document.querySelector('.checkPolicy').style.display = document.querySelector('.checkbox-input').checked ? 'none' : 'block';
        
        document.querySelector('.confirmPass').style.display = passCheck(person.password, person.confirmPassword) ? 'none' : 'block'; 
        
        {isSuccessfullyRegistered &&
            showLoginPage();
        }
}

const passCheck = (password, confirmPassword) =>{   //перевіряти чи не пусті поля
    return password === confirmPassword ? true : false;
}

const getPeopleInfo = () => {
    return peopleInfo;
}

const showLoginPage = () => {
    document.querySelector('.registration-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
}

const submitLoginForm = (event) =>{
    
    event.preventDefault();

    const personEmail = document.getElementById('logIn-email').value;
    const personPassword = document.getElementById('logIn-password').value;

    const isExist = peopleInfo.includes(person);

    checkPerson();

        const isSuccessfullyLogined = document.querySelector('.checkbox-input').checked && passCheck(person.password, person.confirmPassword);

        if(isSuccessfullyLogined){
            document.querySelector('#success-registration').innerHTML="Congratulation! You are successfully registered!";

            setTimeout(() =>{
                document.querySelector('#success-registration').style.display='none';
            }, 5000);

            document.querySelector('#success-registration').style.display='block';
            peopleInfo.push(person);
        }

        document.querySelector('.checkPolicy').style.display = document.querySelector('.checkbox-input').checked ? 'none' : 'block';
        
        document.querySelector('.confirmPass').style.display = passCheck(person.password, person.confirmPassword) ? 'none' : 'block'; 
        
        {isSuccessfullyLogined &&
            showWelcomePage();
        }
}

const checkPerson = (i, personEmail, personPassword) => {

}
const showWelcomePage = () => {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.welcome-page').style.display = 'block';
}