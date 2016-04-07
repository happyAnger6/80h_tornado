if(jQuery){
 $(document).ready(function(){
	var $right_answer = $("#right_answer");

 	$(".daan-button-text").click(function(){
	if($(this).val() == $right_answer.val())
		{
		$("#right-img").css("display", "block");
		$("#wrong-img").css("display", "none");
		$("#btn_submit").click();
		}else
		{
		$("#right-img").css("display", "none");
		$("#wrong-img").css("display", "block");
		}
	});


    //var $btn = $("#btn_submit");
	
	//var $options = $(".answer");
	//$options.change(function(){
		//alert("changed!")
		//if($right_answer.val() == $(this).val())//right answer selected
		//{
			//alert("right!")	;
			//alert($("#index").val());
			//$("#btn_submit").click();
		//}
		//alert($(this).val())
	//})
	
    //$btn.click(function(){
      //  alert("click")
       // alert($right_answer[0].value)
		//var $answer = $(".answer:checked");
		//$answer.css("color","#bbffaa");
		//alert($answer.val())
    //})
 })
};