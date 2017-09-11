

$(document).ready(function(){

   $("#btnopenpopup").click(function(){
		
		$.get("popup.html", function(data){
			$("#popup1").html(data);
			$("#popup1").show();
		});
		
   });

   $("#btnnext").click(function(){
		$.get("ajax?next", function(data, success){
			if(data.succes)
			{
				$('#stations').val(data.station);
			}
		});
   });
   
   $("#btndown").click(function(){
		$.get("vol?down", function(data, success){
			 $("#volslider").val(parseInt($("#volslider").val())-5);
		});
   });
   
   $("#btnup").click(function(){
		$.get("vol?up", function(data, success){
			 $("#volslider").val(parseInt($("#volslider").val())+5);
		});
   });

   $("#btntime-out").click(function(){
		$.get("ajax?time-out", function(data, success){
		});
   });
   
   $("#stations").change(function(){
		$.get("goto?id="+$('#stations').val(), function(data, success){
		});
   });
   $("#volslider").change(function(){
	   var vol = (($(this).val()));
		$.get("vol?set="+vol, function(data, success){
		});
	   
	   
   });

   
   setInterval(function(){
		$.get("data.json", function(data, success){
			if ($("#volslider").val() != data.volume) $("#volslider").val(data.volume);
			if ($('#stations').val() != data.playing) $('#stations').val(data.playing);
			if (data.timeout > 0) {
				$('#divprogress').show();
				$('#divbar').css('width', String(data.timeout) + '%');
			} else {
				$('#divprogress').hide();
			}
		});
   }, 500);
  

});