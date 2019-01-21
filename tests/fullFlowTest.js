	var Login_Page = require("../pages/Login_Page.js");
	var SignUp_Page = require("../pages/SignUp_Page.js");
	var Account_Page = require("../pages/Account_Page.js");
	var globals = require("../helper.js");
	var email= globals.randomEmail;
	var randomFirstName = faker.name.findName();
	var randomLastName = faker.name.findName();
	var randomJobTitle = faker.name.jobTitle();
	var randomCity =faker.address.city();
	var randomPassword = faker.internet.password();
	var pass= localStorage.getItem('myFirstKey');
	localStorage.setItem('myFirstKey', email);
	localStorage.setItem('mySecondKey', randomPassword);
	
	beforeEach(function() {
		browser.setViewportSize({
			width: 1536,
			height: 800
		})
		this.timeout(20000);
	})
	
	//This Test case cover the whole Edit Account ,Signup a new user and chang this data then validate it 
	describe('Full Test from Signup to Login to Edit Account for Wunderflats', function() {
		
		it('UUser should be able to Signup successful via Signup page then Login ending by changing his/her data', function(done) {
			browser.url('/signup');
			SignUp_Page.submitAllInformationViaSignUpForm(randomFirstName,randomLastName,email,'49','3526533240',pass,pass);

		});	

		it('user should be able to change bulk of his/her information successfully', function(done) {
			browser.url('/my/account');
			Account_Page.editBulkOfInformation(randomFirstName,randomLastName,'5324333450',randomCity,randomJobTitle);
			Account_Page.firstNameValidation(randomFirstName);
			Account_Page.lastNameValidation(randomLastName);
			Account_Page.mobileNumberValidation('5324333450');
			Account_Page.cityValidation(randomCity);
			Account_Page.jobTitleValidation(randomJobTitle);

		});


	});