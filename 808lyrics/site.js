  $(document).ready(function(){

    $("#txt-search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#txt-search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});


$('#txt-search').keyup(function(){


            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}

            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.album.search(regex) != -1) || (val.title.search(regex) != -1) || (val.lyrics.search(regex) != -1)) {
				  output += '<div class="col-md-6 well">';
				//   output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.title + '</h5>';
                  output += '<p>' + val.album + '</p>';
                  output += '<p>' + val.lyrics + '</p>';
				  output += '</div>';
				  output += '</div>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#filter-records').html(output);
        });




  });