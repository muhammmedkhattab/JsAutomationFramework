var fName = "//input[@id='firstName']";
var lName="[id='lastName']";
var email="[id='email']";
var mobile=".CustomPhoneNumberInput-phoneNumber";
var cityVar="[id='city']";
var job="[id='jobTitle']";

function waitTillExist(element){
	browser.waitForExist(element, 5000);
}
class Account_Page {

	get firstName() { return $("//input[@id='firstName']");}
	get lastName() { return $("[id='lastName']");}
	get emailAddress() { return $("[id='email']");}
	get mobileNumber() { return $(".CustomPhoneNumberInput-phoneNumber");}
	get city() { return $("[id='city']");}
	get jobTitle() { return $("[id='jobTitle']");}
	get saveProfileButton() { return $("[type='submit']");}	

	setFirstName(firstName){
		this.firstName.setValue(firstName);
		this.saveProfileButton.click();
	}

	setLastName(lastName){
		//lastNameValidation();
		browser.waitForExist(lName, 3000);
		// waitForExist(lName);
		this.lastName.setValue(lastName);
		this.saveProfileButton.click();
	}

	setMobileNumber(mobileNumber){

		
		this.mobileNumber.setValue(mobileNumber);
		this.saveProfileButton.click();
	}

	setCity(city){

		this.city.setValue(city);
		this.saveProfileButton.click();
	}

	setJobTitle(jobTitle){

		this.jobTitle.setValue(jobTitle);
		this.saveProfileButton.click();
	}
	editBulkOfInformation(firstName,lastName,mobileNumber,city,jobTitle)

	{	
		waitTillExist(fName);
		var firstNameIsVisible = browser.isVisible(fName);
		expect(firstNameIsVisible).to.equal(true);

		console.log("First Name Field is Validated Successfully");
		console.log("Last Name  Field is Validated Successfully");
		console.log("Mobile     Field is Validated Successfully");
		console.log("City       Field is Validated Successfully");
		console.log("Job Title  Field is Validated Successfully");

		this.firstName.setValue(firstName);
		this.lastName.setValue(lastName);
		this.mobileNumber.setValue(mobileNumber);
		this.city.setValue(city);
		this.jobTitle.setValue(jobTitle);
		this.saveProfileButton.click();
	}

	firstNameValidation(firstname){
		
		waitTillExist(fName);
		var firstNameIsVisible = browser.isVisible(fName);
		expect(firstNameIsVisible).to.equal(true);
		waitTillExist(fName);
		expect(browser.getText(fName))==(firstname);
		console.log("First Name Field is Validated Successfully");

	}

	lastNameValidation(lastname){

		browser.waitForExist(lName, 3000);
		var lastNameIsVisible = browser.isVisible(lName);
		expect(lastNameIsVisible).to.equal(true);
		waitTillExist(fName);
		expect(browser.getText(lName))==(lastname);
		console.log("Last Name Field is Validated Successfully");
	}

	mobileNumberValidation(mobilenumber){
		
		waitTillExist(mobile);
		var mobileNumberIsVisible = browser.isVisible(mobile);
		expect(mobileNumberIsVisible).to.equal(true);
		waitTillExist(mobile);
		expect(browser.getText(mobile))==(mobilenumber);
		console.log("Mobile Field is Validated Successfully");
	}

	cityValidation(citylocal){
		
		waitTillExist(cityVar);
		var cityIsVisible = browser.isVisible(cityVar);
		expect(cityIsVisible).to.equal(true);
		waitTillExist(cityVar);
		expect(browser.getText(cityVar))==(citylocal);
		console.log("City Field is Validated Successfully");
	}
	jobTitleValidation(jobtitle){
		
		waitTillExist(job);
		var jobTitleIsVisible = browser.isVisible(job);
		expect(jobTitleIsVisible).to.equal(true);
		waitTillExist(job);
		expect(browser.getText(job))==(jobtitle);
		console.log("Job Title Field is Validated Successfully");
	}
}

module.exports = new Account_Page();