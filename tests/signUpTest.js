var SignUp_Page = require("../pages/SignUp_Page.js");
var globals = require("../helper.js");
var Email= globals.randomEmail;

beforeEach(function() {
	browser.url('/signup');
	browser.setViewportSize({
		width: 1536,
		height: 800
	})
})

describe('Test SignUp Page for Wunderflats', function() {
	it('User should be able to Signup successful via Signup page', function(done) {

		SignUp_Page.submitAllInformationViaSignUpForm('joe','bob',Email,'49','3526533240','123456789','123456789');

	});

});