$(document).ready(function() {
	var students = [ {
		"fname" : "anu",
		"lname" : "nandeesh"
	},

	{
		"fname" : "gayatri",
		"lname" : "padmakar"
	},

	{
		"fname" : "natasha",
		"lname" : "samoj"
	},

	{
		"fname" : "roja",
		"lname" : "annam"
	} ];

	$("#mybtn").click(function() {
		
		$("#student tr td:first-child").each(function(i) {
			$(this).html(students[i].fname);
			$(this).next().html(students[2].lname);
		});

	});

});