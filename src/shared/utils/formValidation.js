export class formValidation{
	isEmpty = function(formData){
		return formData === '';
	}

	isEmail = function(formData){
		//regex for the email stuff
	}

	isSame = function(formData1,formData2){
		return formData1 === formData2;

	}
	length = function(formData){
		//count length of email
		return formData.length;
	}	
}



