$(document).ready(function(){
    $('.topten').click(function(){
      $('.nothingten').addClass('topsongs');
      $('.nothingten').empty();
        $.getJSON('js/top100.json', function(data){
            $.each(data, function(k, v){
                $.each(v.songs, function(i, t) {
                   if (i < 10){
                       $('.nothingten').append(t.title+','+'</br>'+t.artist+'</br>'+'<br>')
                   }
                });
            });
        });
    });
});

$(document).ready(function(){
    $('.top100').click(function(){
      $('.nothing100').addClass('topsongs');
      $('.nothing100').empty();
        $.getJSON('js/top100.json', function(data){
            $.each(data, function(k, v){
                $.each(v.songs, function(i, t) {
                   if (i < 100){
                       $('.nothing100').append(t.title+','+'</br>'+t.artist+'</br>'+'<br>')
                   }
                });
            });
        });
    });
});


// $('button').click(function() {
//     $(this).hide();
// });