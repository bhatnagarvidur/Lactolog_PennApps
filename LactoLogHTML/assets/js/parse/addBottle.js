function addBottle(){
	var Bottle = Parse.Object.extend("Bottle");
	bottle = new Bottle();

	bottle.set("momToBabyId","eP9av3J5cN");
	bottle.set("breastSide","left");
	bottle.set("qtyInitial",20);
	bottle.set("qtyCurrent",20);
	bottle.set("qrCode", "123");
	that = this;
	
	bottle.save(null,{
		success: function(bottle) {
			alert("Bottle Added :: " + bottle.id);
		}});
}