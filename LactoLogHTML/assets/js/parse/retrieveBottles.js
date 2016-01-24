function retrieveBottles(){
	var Bottle = Parse.Object.extend("Bottle");
	
	var query = new Parse.Query(Bottle);
	query.equalTo("momToBabyId", "eP9av3J5cN");
	query.notEqualTo("qtyCurrent", 0);

	query.find({
		success: function(results) {
			alert("Successfully retrieved " + results.length + " scores.");
			
			/*for (var i = 0; i < results.length; i++) {
			  var object = results[i];
			  alert(object.id + ' - ' + object.get('playerName'));
			}*/
		},
		error: function(error) {
		// The object was not retrieved successfully.
		// error is a Parse.Error with an error code and message.
		}
	});
}