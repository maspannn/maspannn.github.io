var book = [
    {
        "title": "Tanah Sawah dan Teknologi Pengelolaannya",
        "poster": "book/011.png",
        "link": "https://drive.google.com/file/d/1q5v-9xXoku2IREOnMt-RX9pYrMJhR-JK/preview"
    },
    {
        "title": "Teknologi Pengendalian Hama Lalat Buah",
        "poster": "book/010.png",
        "link": "https://drive.google.com/file/d/1KOIKsAP0ozFZHKaRZ_bG_uikHttq3qNm/preview"
    },
    {
        "title": "Benih Unggul Jurus Sukses Swasembada Pangan",
        "poster": "book/009.png",
        "link": "https://drive.google.com/file/d/1NMn_BaHeHCwGRc41iKyLemLB2Q9L_LK9/preview"
    },
    {
        "title": "Jurus Jitu Menyikapi Iklim Ekstrim El Nino Dan La Nina",
        "poster": "book/008.png",
        "link": "https://drive.google.com/file/d/1SjleHoSp-IryBpb5Ic-LNzHYfbfseRav/preview"
    },
    {
        "title": "Tanah Sawah Bukaan Baru",
        "poster": "book/007.png",
        "link": "https://drive.google.com/file/d/1qDb9QGMahh05X5nYDcc3hk85L7cNL7JM/preview"
    },
    {
        "title": "Membangkitkan Kejayaan Rempah Nusantara",
        "poster": "book/006.png",
        "link": "https://drive.google.com/file/d/1glK522yxEFJixnylN7-MO_QKfidd6AfW/preview"
    },
    {
        "title": "Menjaring Investasi Meraih Swasembada Gula",
        "poster": "book/005.png",
        "link": "https://drive.google.com/file/d/1IInUVzc5NlCOKG05Cn70q1Tb2_h9TU0L/preview"
    },
    {
        "title": "Membangkitkan Lahan Rawa, Membangun Lumbung Pangan Indonesia",
        "poster": "book/004.png",
        "link": "https://drive.google.com/file/d/1zdRz6zBht_71aeL62HCCIbmauDcGnGQP/preview"
    },
    {
        "title": "Manajemen Kebijakan Teknologi Dan Kelembagaan Mendukung Pertanian Modern",
        "poster": "book/003.png",
        "link": "https://drive.google.com/file/d/1anU62ucCkpg9nmmWNrLPFKBmDscFjDgB/preview"
    },
    {
        "title": "Teknologi Pengolahan dan Pengembangan Produk Olahan Daun Gambir",
        "poster": "book/002.png",
        "link": "https://drive.google.com/file/d/1JYWXSJ8oBg-80bzyr4A2jWH25g0Qbz0w/preview"
    },
    {
        "title": "Pengelolaan Sumberdaya Menuju Pertanian Modern Berkelanjutan",
        "poster": "book/001.png",
        "link": "https://drive.google.com/file/d/1cf7U9JLjB_thFFfsft9CcQEptv-L_hVB/preview"
    }
];

var books = "";
	  
for (var i = 0; i < book.length; i++) {
	var nama = book[i].title,
		link = book[i].link,
		poster = book[i].poster;
	
	books += "<div class='book-card' data-nama='" + nama + "' data-preview='" + link + "' data-poster='"+ poster +"'><a class='button-book' href='' data-bs-toggle='modal' data-bs-target='#preview' data-obj='"+i+"'><div class='card'><img src='"+ poster +"' alt='" + nama + "' width='100%' style='aspect-ratio: 3/4;object-fit: cover;' class='card-img-top'><div class='card-body'><p class='card-title'><b>"+ nama +"</b></p></div></div></div>";
}

$("#list-ebook").html(books);

$(document).ready(function(){
  var list = $("#list-ebook .book-card");
  var numToShow = 30;
  var button = $("#ebook-lainnya");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

});

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
    if (value.length) {
      $("#list-ebook .book-card").filter(function() {
        $("#list-ebook").show();
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    } else {
      $("#list-ebook").hide();
    }
  });
});