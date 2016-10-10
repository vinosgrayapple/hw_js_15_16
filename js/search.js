function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
   $("form").on("click", function(e) {
       e.preventDefault();
        $("#results").html("");

  var  qn= $("#search-field").val();
  
  $.get('https://www.googleapis.com/youtube/v3/search',{
    part:'snippet',
    key:'AIzaSyDtDjgdi39C0x4DZIpb0GKJE7dUS9z8leY',
    q: qn,
    regionCode:'UA'
  },
  function(data) {
    $.each(data.items, function(i,item) {
      // console.log(item);

        $.get("tpl/item.html", function(data) {
                    $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
                });
    });

  });


});

});

