function updateBottle(){
	var Bottle = Parse.Object.extend("Bottle");
	
	var currentDate = new Date();
	var numberOfDaysToAdd = 3;
	currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd); 

	var query = new Parse.Query(Bottle);
	query.get(bottle.id, {
		success: function(bottle) {
			bottle.set("qtyCurrent",10);
			bottle.set("expiry", currentDate);
			bottle.set("storageLoc", "Fridge1");
			bottle.set("checkedIn", true);
			
			bottle.save(null,{
				success: function(bottle) {
					alert("Bottle Updated" + bottle.id);  
				}}
			);
		},
		error: function(object, error) {
		// The object was not retrieved successfully.
		// error is a Parse.Error with an error code and message.
		}
	});
}