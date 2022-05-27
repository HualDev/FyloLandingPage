


function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
        error.className='show'
    }
    else{
        error.className='close_error'
    }
}