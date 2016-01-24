function signIn(){
	var username = $('.form-control')[0].value;
	var password = $('.form-control')[1].value;
	
	Parse.User.logIn(username, password, 
		{
		success: function(user) {
			alert("done");  
		},
		error: function(user, error) {
			
		}
	});
}