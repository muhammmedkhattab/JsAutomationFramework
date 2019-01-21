var Account_Page = require("../pages/Account_Page.js");
var Login_Page = require("../pages/Login_Page.js");
var Email ="Kristoffer_Buckridge@gmail.com";
var randomFirstName = faker.name.findName();
var randomLastName = faker.name.findName();
var randomJobTitle = faker.name.jobTitle();
var randomCity =faker.address.city();

beforeEach(function() {
	browser.url('/my/account');
	this.timeout(20000);
	browser.setViewportSize({
		width: 1536,
		height: 800
	})
})
//In This Test I called Login Test to access the AccountTest to be able to access and edit 
describe('Test User Account Page for Wunderflats', function() {
	
	it('user should be able to change bulk of his/her information successfully', function(done) {

		Login_Page.login("Kristoffer_Buckridge@gmail.com","123456789");
		Account_Page.editBulkOfInformation(randomFirstName,randomLastName,'5324333450','Alex','QA Engineer');

	});

	it('user should be able to change his/her first name successfully', function(done) {
		
		Account_Page.setFirstName(randomFirstName);
		Account_Page.firstNameValidation(randomFirstName);
	

	});
	it('user should be able to change his/her last name successfully', function(done) {
	
		Account_Page.setLastName(randomLastName);
		Account_Page.lastNameValidation(randomLastName);

	});
	it('user should be able to change his/her mobile number successfully', function(done) {
		
		Account_Page.setMobileNumber('9324633440');
		Account_Page.mobileNumberValidation('9324633440');
	});	
	it('user should be able to change his/her City successfully', function(done) {
		
		Account_Page.setCity(randomCity);
		Account_Page.cityValidation(randomCity);
	});

	it('user should be able to change his/her Job Title successfully', function(done) {
		
		Account_Page.setJobTitle(randomJobTitle);
		Account_Page.jobTitleValidation(randomJobTitle);
	});

});
