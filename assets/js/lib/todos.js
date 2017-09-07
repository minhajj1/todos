$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});


//click on X to delete the todo
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();

});


//Adding a new ToDo
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//getting the text of the input
		var todoText = $(this).val();
		$(this).val("");
		//creating a new li to add to the ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil").on("click", function(){
	$("input[type='text']").fadeToggle(150);
});
