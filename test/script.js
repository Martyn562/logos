const foo = () => {
    if(document.getElementById('first').checked){
        first();
    }

    if(document.getElementById('second').checked){
        second();
    }

    if(document.getElementById('third').checked){
        third();
    }
}

const first = () => {
    console.log(1);
    document.querySelector('.block-right').style.width = '50%';
}

const second = () => {
    console.log(2);
    document.querySelector('.block-right').style.width = 'auto';
}

const third = () => {
    console.log(3);
    document.querySelector('.block-right').style.width = '100%';
}

first();