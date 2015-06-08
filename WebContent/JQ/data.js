$(document).ready(function(){
	$("#mybtn").click(function(){
		$.ajax({
			url:"../JQ/data.json",
			type:"GET",
			dataType:"json",
			success:function(resp)
			{
				$("#student tr td:first-child").each(function(i) {
					$(this).html(resp[i].fname);
					$(this).next().html(resp[i].lname);
				});
			}
		});
		
	});
});