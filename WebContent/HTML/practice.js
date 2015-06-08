$(document).ready(function(){
	$("#btn").click(function(){
	$.ajax({
		url:"../JQ/data.json",
		type:"GET",
		dataType:"json",
		success: function(data){
			$(data.fname);
			
		}
	});
	});
})