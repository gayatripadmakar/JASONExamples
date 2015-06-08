$(document).ready(function(){
	$("#btn").click(function(){
		//var $data=$("#data");
	$.ajax({
		url:"../JQ/data.json",
		type:"GET",
		daytaType:"json",
		success:function(data){
			//console.log('success',data);
			
		$.each(data, function(index, value){
			$("#data").append(value.fname +"<br>");
		})	
			}
		});
		
		
	});
})