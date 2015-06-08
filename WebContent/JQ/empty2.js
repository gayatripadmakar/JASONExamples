$(document).ready(function(){
 $("#generate").click(function(){
	 $.ajax({
		 url:"../JQ/empty2.json",
		 type:"GET",
		 datatype:"json",
		 success:function(resp)
		 {
			 ("#table tr td:first-child").each(function(i){
				 $(this).html(resp[i].FirstName);
			 $(this).next().html(resp[i].LastName);
			 
			 });
		 }
		 
	 });
 })
 $("#btn").click(function(){
	$(this).parent()siblings().empty();
 });
})
 