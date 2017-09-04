

$(document).ready(function(){

   $("#btnopenpopup").click(function(){
		
		$.get("popup.html", function(data){
			$("#popup1").html(data);
			$("#popup1").show();
		});
		
   });

   $("#btnnext").click(function(){
		$.get("ajax?next", function(data, success){
			// Visueel maken dat volgende track is geselecteerd.
		});
   });
   
   $("#btndown").click(function(){
		$.get("ajax?down", function(data, success){
			// Visueel maken dat volgende track is geselecteerd.
		});
   });
   
   $("#btnup").click(function(){
		$.get("ajax?up", function(data, success){
			// Visueel maken dat volgende track is geselecteerd.
		});
   });

   $("#btntime-out").click(function(){
		$.get("ajax?time-out", function(data, success){
			// Visueel maken dat volgende track is geselecteerd.
		});
   });
   $("#stations").change(function(){
		$.get("goto?id="+$('#stations').val(), function(data, success){
			// Visueel maken dat volgende track is geselecteerd.
		});
   });

   
});