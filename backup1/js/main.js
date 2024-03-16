$(function(){
    
   $('.load-more').on('click', function(){
       const btn = $(this)
       const loader = btn.find('span');
       
       $.ajax({
           url: '../data.html',
           type: 'GET',
           beforeSend: function(){
               btn.attr('disabled', true);
               loader.addClass('d-inline-block');
           },
           
           success: function(response){
               btn.attr('disabled', true);
               loader.removeClass('d-inline-block');
               console.log(response)
           },
           error: function(){
               alert('Error');
               btn.attr('disabled', false)
               loader.removeClass('d-inline-block');
           }
       });
   });    
    
});