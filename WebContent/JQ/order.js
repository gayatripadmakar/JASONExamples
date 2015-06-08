$(document).ready(function(){
	$("#button").click(function(){
		var $data=$("#data");  //data is the id of ul
		$.ajax({
			url:"../JQ/order.json",
			type:"GET",
			dataType:"JSON",
			success:function(data){
				//console.log('success', data);
			$.each(data, function(i, items){  //index:0,1, 2, 3 items is the value.
		    $data.append('<li>Name '+ items.name+'</li>'); 
		    $data.append('<li>drink: '+ items.drink +'</li>');
		    $data.append('<li>Id: '+items.id +'</li>');
		    
		    })
				
			}
			
		});
		
	});
})