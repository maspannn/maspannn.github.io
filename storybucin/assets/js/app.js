var data = [
    {
        "poster": "poster/46.jpg",
        "link": "story/46.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/46.html"
    },
    {
        "poster": "poster/45.jpg",
        "link": "story/45.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/45.html"
    },
    {
        "poster": "poster/44.jpg",
        "link": "story/44.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/44.html"
    },
    {
        "poster": "poster/43.jpg",
        "link": "story/43.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/43.html"
    },
    {
        "poster": "poster/42.jpg",
        "link": "story/42.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/42.html"
    },
    {
        "poster": "poster/41.jpg",
        "link": "story/41.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/41.html"
    },
    {
        "poster": "poster/40.jpg",
        "link": "story/40.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/40.html"
    },
    {
        "poster": "poster/39.jpg",
        "link": "story/39.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/39.html"
    },
    {
        "poster": "poster/38.jpg",
        "link": "story/38.html",
        "share": "whatsapp://send?text=https://maspannn.github.io/storybucin/story/38.html"
    },
];

var html = "";
	  
for (var i = 0; i < data.length; i++) {
	var poster = data[i].poster,
		share = data[i].share,
		link = data[i].link;
	
	html += "<div class='movie-card' data-link='" + link + "' data-poster='"+ poster +"' data-share='"+ share +"'><a class='button-movie' href='' data-bs-toggle='modal' data-bs-target='#player' data-obj='"+i+"'><img src='"+ poster +"' alt='" + link + "' width='100%' style='aspect-ratio: 4/6;object-fit:cover;padding:1px'><div class='modal-footer text' style='border-style:none;margin-top:-120px;padding-right:58px'><img src='assets/img/play.png' height='30px'></div></a></div>";
	
}

$("#list-movie").html(html);

$(document).ready(function(){
  var list = $("#list-movie .movie-card");
  var numToShow = 30;
  var button = $("#movie-lainnya");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

  button.click(function(){
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
  });

});

var dataLength = data.length;
var thisElement = 0;

function innerContent(content){
  $(".inner-link-download").attr("href",data[content].link);
  $(".inner-link-share").attr("href",data[content].share);
  $(".inner-link-streaming").attr("src",data[content].link);
};

$(".button-movie").click(function(e){
  e.preventDefault();
  thisElement = $(this).attr("data-obj");
  innerContent(thisElement);
});