var Login_Page = require("../pages/Login_Page.js");

beforeEach(function() {
	browser.url('/login');
	browser.setViewportSize({
		width: 1536,
		height: 800
	})
})
//This test may fail if the user and password are deleted from the database 
//so in this case SignUpTest.js need to be execuated before it
describe('Test basic Login for Wunderflats', function() {
	it('User should be able to login successful', function(done) {
		
		Login_Page.login('Kristoffer_Buckridge@gmail.com','123456789');

	});
});