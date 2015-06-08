$(document).ready(function(){
	$("#btn").click(function(){
	$.getJSON("../JQ/practice.json", function(obj){
		$.each(obj, function(value){
			console.log(value.age);
			
		});
		
	})
});
})