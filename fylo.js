let error = document.getElementById('error')
let error1 = document.getElementById('error1')
const mail = document.getElementById('mail')
const email = document.getElementById('email')


function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
        error.className='show'
        mail.style.border='solid 1px red'       
    }
    else{
        error.className='nShow'
        mail.style.border='solid 1px black'
    }
}

function pruebaemail1 (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
        error1.className='show'
        email.style.border='solid 1px red'       
    }
    else{
        error1.className='nShow'
        email.style.border='solid 1px black'
    }
}