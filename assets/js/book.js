var ebook =[
    {
        "id": "1",
        "link_id": "ebook-link1",
        "title": "600 Teknologi Inovatif Pertanian",
        "deskripsi": "Dukungan inovasi teknologi pertanian saat ini dan ke depan semakin penting seiring dengan perubahan dan gerak pembangunan pertanian nasional yang semakin dinamis menuju pertanian modern. Peran pentingnya inovasi teknologi pertanian menjadi sangat strategis sebagai alat, cara, atau metode yang digunakan dalam transformasi bahan mentah, setengah jadi, maupun siap pakai menjadi produk yang bernilai tinggi serta memiliki nilai tambah, utamanya bagi pelaku agribisnis. Teknologi pertanian juga berperan penting dalam meningkatkan produktivitas dan memperbaiki mutu produk, sehingga penerapan teknologi dapat meningkatkan nilai tambah yang tinggi dan pada akhirnya mendukung daya saing.",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5361/600%20Teknologi%20Inovatif%20Pertanian.pdf?sequence=4&isAllowed=y"
    },
    {
        "id": "2",
        "link_id": "ebook-link1",
        "title": "Inovasi Terkini Beternak Sapi",
        "deskripsi": "Buku ini menjadi solusi untuk peningkatan produksi daging melalui percepatan peningkatan populasi sapi secara terpadu, mulai dari pemilihan bibit, cara beternak sapi potong, pemberian pakan, pengelolaan kandang yang layak dan sehat, serta teknik inseminasi buatan. Selain itu, di akhir buku disajikan aneka olahan berbahan dasar daging sapi favorit yang bisa dijadikan peluang bisnis, baik untuk skala rumah tangga maupun menengah. Layak bagi siapa pun yang akan beternak sapi, baik skala kecil maupun besar.",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5363/2.%20COVER%20BETERNAK%20SAPI%20OK.pdf?sequence=1&isAllowed=y"
    },
    {
        "id": "3",
        "link_id": "ebook-link1",
        "title": "Outlook Tebu",
        "deskripsi": "Produksi Tebu Indonesia di tahun 2014, berdasarkan Angka Tetap Statistik Perkebunan Indonesia (Ditjen Perkebunan, 2015), tercatat sebesar 2.579.173 ton. Produksi ini berasal dari 477.123 ha luas panen perkebunan tebu yang hanya berada di Provinsi Sumatera Utara, Gorontalo, Lampung, Sumatera Selatan, Jawa Barat, DI Yogyakarta, Jawa Tengah, Jawa Timur, dan Sulawesi Selatan. Sentra produksi Tebu di Indonesia rata-rata tahun 2012-2016 (angka sementara) utamanya adalah Provinsi Jawa Timur dengan rata-rata produksi mencapai 1.283.810 ton atau 49,14% produksi tebu nasional. Sentra produksi tebu lainnya adalah Lampung dengan rata-rata produksi 759.935 ton (29,09%), Jawa Tengah dengan rata-rata produksi 274.946 ton (10,52%), Jawa Barat rata-rata produksi 87.211 ton (3,34%), dan Sumatera Selatan dengan rata-rata produksi 89.659 ton (3,43%).",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5365/OUTLOOK%20TEBU%202016.pdf?sequence=1&isAllowed=y"
    },
    {
        "id": "4",
        "link_id": "ebook-link1",
        "title": "Dongkrak Produksi Aneka Kacang",
        "deskripsi": "Kementerian Pertanian, Pusat Perpustakaan dan Penyebran Teknologi Pertanian",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5366/Dongkrak%20Produksi%20Kacang%20Rev4_9-10-2018.pdf?sequence=1&isAllowed=y"
    },
    {
        "id": "5",
        "link_id": "ebook-link1",
        "title": "Kiat berkebun lada",
        "deskripsi": "Kementerian Pertanian, Pusat Perpustakaan dan Penyebran Teknologi Pertanian",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5367/Kiat%20Berkebun%20Lada%2010%20September%202018%20Cetak%281%29.pdf?sequence=1&isAllowed=y"
    },
    {
        "id": "6",
        "link_id": "ebook-link1",
        "title": "Unggas Unggul: Ayam-Itik-Puyuh",
        "deskripsi": "Kementerian Pertanian, Pusat Perpustakaan dan Penyebran Teknologi Pertanian",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5368/Unggas%20Unggul%2013-7-2018%2016%20WIB%20Cetak%20Buku.pdf?sequence=1&isAllowed=y"
    },
    {
        "id": "7",
        "link_id": "ebook-link1",
        "title": "Budidaya Vanili",
        "deskripsi": "Tulisan ini menguraian pedoman teknis budidaya vanili yang baik dan bener, mulai dari penentuan lahan, penanaman, penggunaan pohon panjat, pemeliharaan, pola tanam hingga panen dan pasca panen.",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5369/Sirkuler-Budidaya%20Vanili-Andriana-ok.pdf?sequence=1&isAllowed=y"
    },
    {
        "id": "8",
        "link_id": "ebook-link1",
        "title": "Katalog varietas florikultura",
        "deskripsi": "Balai Penelitian Tanaman Hias",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5370/Katalog%20Florikultura.pdf?sequence=3&isAllowed=y"
    },
    {
        "id": "9",
        "link_id": "ebook-link1",
        "title": "Teknik ubinan pendugaan produktivitas padi untuk jarak tanam",
        "deskripsi": "Makarim, A Karim",
        "link": "http://repository.pertanian.go.id/bitstream/handle/123456789/5372/Teknik%20Ubinan.pdf?sequence=1&isAllowed=y"
    },
];

var ebookLength = ebook.length;
$("#list-ebook").empty();
for (i=0; i<ebookLength; i++) {
  var listItemebook =
    '<div id="data-book">'+
      '<div class="card shadow" style="width:100%">'+
      '<a class="button-ebook" href="'+ebook[i].id+'" data-obj="'+i+'">'+
      '<div class="card-body">'+
      '<div class="card-text nama-ebook"><h6>'+ ebook[i].title +'</h6></div>'+
      '<div class="desc-ebook"><h7>'+ ebook[i].deskripsi+'</h7>'+
      '</div>'+
      '</a>' +
      '</div>'+
    '</div>';
  //Append thumb:
  $("#list-ebook").append(listItemebook);
};

$(document).ready(function(){

      var list = $("#list-ebook #data-book");
      var numToShow = 4;
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

$(function() {
  $("#cariEbook").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    if (value.length) {
      $("#list-ebook #data-book").filter(function() {
        $("#list-ebook").show();
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    } else {
      $("#list-ebook").hide();
    }
  });
});

$("#ebook-lainnya").on("click", function() {
    $("#list-ebook").css({"display":"block"});
    $("#list-ebook").css({"display":"grid"});
    $("#list-ebook").css({"grid-template-rows":"108px"});
    $("#list-ebook").css({"grid-template-columns":"100%"});
    $("#list-ebook").css({"grid-row-gap":"10px"});
    $("#list-ebook").css({"grid-column-gap":"10px"});
});

var thisElement4 = 0;

function innerContent4(content){
  $(".inner-nama-ebook").html(ebook[content].title);
  $(".inner-deskripsi-ebook").html(ebook[content].deskripsi);
  $(".inner-link-ebook").attr("href",ebook[content].link);
};

//Open post:
$(".button-ebook").click(function(e){
  e.preventDefault();
  thisElement4 = $(this).attr("data-obj");
  innerContent4(thisElement4);
  $("#cariEbook").css({"display":"none"});
  $("#list-ebook").css({"display":"none"});
  $("#ebook-lainnya").css({"display":"none"});
  $("#daftar-ebook").css({"display":"block"});
  $(window).scrollTop(0);
});

//Close post:
$(".close-ebook").click(function(){
  $("#cariEbook").css({"display":"block"});
  $("#list-ebook").css({"display":"block"});
  $("#list-ebook").css({"display":"grid"});
  $("#list-ebook").css({"grid-template-rows":"108px"});
  $("#ebook-lainnya").css({"display":"block"});
  $("#daftar-ebook").css({"display":"none"});
  $(window).scrollTop(0);
});

//Next post:
$(".next-ebook").click(function(e){
  e.preventDefault();
  if (thisElement4<ebookLength-1) {
    thisElement4 = parseInt(thisElement4) + 1;
    innerContent4(thisElement4);
    dissBtn();
  };
});

//Prev post:
$(".prev-ebook").click(function(e){
  e.preventDefault();
  if (thisElement4>0) {
    thisElement4 = parseInt(thisElement4) - 1;
    innerContent4(thisElement4);
    dissBtn();
  };
});

//Button disable:
function dissBtn(){
  $(".prev-ebook, .next-ebook").removeClass("disabled");
  if (thisElement4<=0){
    $(".prev-ebook").addClass("disabled");
  }
  else if (thisElement4>=ebookLength-1){
    $(".next-ebook").addClass("disabled");
  };
};

$(".prev-ebook").on("click", function() {
    $(window).scrollTop(0);
});

$(".next-ebook").on("click", function() {
    $(window).scrollTop(0);
});

$(".close-ebook").on("click", function() {
    $(window).scrollTop(0);
});