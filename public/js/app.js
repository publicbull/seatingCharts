// window.onload = function () {
// 	$('#paper').click(function() {
		
// 	});
// };

$('#rose_original').click(function(){
	$('#myCanvas').hide();
	$('#rosebowl_gif').show();
});
$('#paper_js').click(function(){
	$('#rosebowl_gif').hide();
	$("#myCanvas").show();
});
$('#hb_original_gif').click(function(){
	$('#canvas_container').hide();
	$('#hb_original').show();
});
$('#raph_js').click(function(){
	$('#hb_original').hide();
	$('#canvas_container').show();
});