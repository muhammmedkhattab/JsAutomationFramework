class Login_Page {

	get emailAddress() { return $("[name='email']");}
	get password() { return $("[name='password']");}
	get loginButton() { return $("//form[1]/button[@type='submit']");}


	login(emailAddress,password){

			this.emailAddress.setValue(emailAddress);
			this.password.setValue(password);
		    this.loginButton.click();
	}
}
module.exports = new Login_Page();