class SignUp_Page {

	get firstName() { return $("[name='firstName']");}
	get lastName() { return $("[name='lastName']");}
	get emailAddress() { return $("[name='email']");}
	get mobileCode() { return $(".CustomPhoneNumberInput-dialCode");}
	get mobileNumber() { return $(".CustomPhoneNumberInput-phoneNumber");}
	get password() { return $("[name='password']");}
	get passwordConfirm() { return $("[name='passwordConfirmation']");}
	get checkBox() { return $("[type='checkbox']");}
	get signUpButton() { return $("//form[@action='/signup']/button[@type='submit']");}



	submitAllInformationViaSignUpForm(firstName,lastName,emailAddress,mobileCode,mobileNumber,password,passwordConfirm){
		
		if(firstName) {
			this.firstName.setValue(firstName);
		}
		if(lastName) {
			this.lastName.setValue(lastName);
		}
		if(emailAddress) {
			this.emailAddress.setValue(emailAddress);
		}
		if(mobileCode) {
			this.mobileCode.setValue(mobileCode);
		}


		if(mobileNumber) {
			this.mobileNumber.setValue(mobileNumber);
		}

		if(password) {
			this.password.setValue(password);
		}
		if(passwordConfirm) {
			this.passwordConfirm.setValue(passwordConfirm);
		}
		//browser.isElementDisplayed(elementId)
		this.checkBox.click();
		
		this.signUpButton.click();
		

	}	
}
module.exports = new SignUp_Page();