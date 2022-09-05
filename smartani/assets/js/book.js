var book = [
    {
        "title": "Budidaya Sayuran Dataran Rendah",
        "poster": "7450b09e1436f87783179.jpg",
        "link": "https://drive.google.com/file/d/1lYa5_rZqugP-ZPW2nnF9om26gmKtCgXJ/preview"
    },
    {
        "title": "Budidaya Sayuran di Pekarangan",
        "poster": "6598748def97258a694a6.jpg",
        "link": "https://drive.google.com/file/d/1OASGOs59_GRxZwCCOox3HjPm6LYa33Hd/preview"
    },
    {
        "title": "Budidaya Tanaman Sayuran",
        "poster": "c553ed1accf842a405955.jpg",
        "link": "https://drive.google.com/file/d/1a4Cgm_2D9_KAcgZBj4kQ4T4YDKb190aR/preview"
    },
    {
        "title": "Dasar - Dasar Agronomi",
        "poster": "00ee93a5b3afe8c8b8375.jpg",
        "link": "https://drive.google.com/file/d/1RMsXIsS9u4oHrzGrUrI5Vrk7qZixaloo/preview"
    },
    {
        "title": "Hama, Penyakit, dan Gulma pada Tanaman Ubi Kayu",
        "poster": "3b5bf1eac024fefc0b8fa.jpg",
        "link": "https://drive.google.com/file/d/1cF9r8IKOK4lyAD8fbaUsPoTAWHxC7tQy/preview"
    },
    {
        "title": "Morfologi dan Klasifikasi Tanah",
        "poster": "704d5412c8879e89de1c2.jpg",
        "link": "https://drive.google.com/file/d/1CDkbZvluZTsz5DruWshDhhEt2DI4t9IV/preview"
    },
    {
        "title": "SOP Budidaya Jamur Tiram",
        "poster": "7afb8da309627afe56fa6.jpg",
        "link": "https://drive.google.com/file/d/1Fmz2aqjoVoQOfo2Si_oVTFGth6O6YXgB/preview"
    },
    {
        "title": "Teknologi Biochar",
        "poster": "86b0cbbc0a9b5044fa62d.jpg",
        "link": "https://drive.google.com/file/d/1RGw2nHCdPTgr81aJhSOV2VEbNul5Mc8a/preview"
    },
    {
        "title": "Untung Besar Budidaya Tanaman Anggrek",
        "poster": "2f8ae11d17a0b0cf20100.jpg",
        "link": "https://drive.google.com/file/d/1udvw42V7h3TTlqURoGoazKyT4ZPNzu_6/preview"
    }
];

var books = "";
	  
for (var i = 0; i < book.length; i++) {
	var nama = book[i].title,
		link = book[i].link,
		poster = book[i].poster;
	
	books += "<div class='book-card' data-nama='" + nama + "' data-preview='" + link + "' data-poster='"+ poster +"'><a class='button-book' href='' data-bs-toggle='modal' data-bs-target='#preview' data-obj='"+i+"'><div class='card'><img src='https://telegra.ph/file/"+ poster +"' alt='" + nama + "' width='100%' style='aspect-ratio: 3/4;object-fit: cover;' class='card-img-top'><div class='card-body'><p class='card-title'><b>"+ nama +"</b></p></div></div></div>";
}

$("#list-ebook").html(books);

var bookLength = book.length;
var thisElement2 = 0;

function innerContent2(content){
  $(".inner-link-preview").attr("src",book[content].link);
};

$(".button-book").click(function(e){
  e.preventDefault();
  thisElement2 = $(this).attr("data-obj");
  innerContent2(thisElement2);
});

$(function() {
  $("#cariEbook").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#list-ebook .book-card").filter(function() {
        $("#list-ebook").show();
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
});

$(document).ready(function(){
  var list = $("#list-ebook .book-card");
  var numToShow = 9;
  var button = $("#ebook-lainnya");
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
