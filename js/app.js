$(document).ready(function() {
	for(var i=1; i<=100; i++){
		if(i%3 == 0){
			$("body").append("fizz");
		}
		if(i%5 == 0){
			$("body").append("buzz");
		}
		if(i%5 != 0 && i%3 != 0) {
			$("body").append(i);
		}
		$("body").append("<br>");
	}
});