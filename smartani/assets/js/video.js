var video =[
    {
        "title": "Pertanian Dunia. Cara Panen Jutaan Buah Mangga dan Pengolahanya",
        "link": "https://youtube.com/embed/A2y2OXxr-do",
    },
    {
        "title": "Cara Mudah Menanam Tanaman Tomat dalam Botol Gantung Plastik | Menanam Tomat dari Biji",
        "link": "https://youtube.com/embed/-VkJIf4Nmck",
    },
    {
        "title": "Cara menanam mangga agar berbuah lebat, Cara Menanam mangga agar cepat Berbuah, Tabulampot Mangga..!",
        "link": "https://youtube.com/embed/ud-xGb2fNkE",
    },
    {
        "title": "TUTORIAL BUDIDAYA KACANG PANJANG BUAH LEBAT | TIPS DAN TRIK KIAT SUKSES TANAM KACANG PANJANG",
        "link": "https://youtube.com/embed/w5y3EAZ4C14",
    },
    {
        "title": "VIRAL !!! BUDIDAYA KUNYIT HITAM SAMPAI HARGA 5 JUTA PERKILO - JURAGAN LAHAN",
        "link": "https://youtube.com/embed/y5nZOhsqb2U",
    },
];

var videoLength = video.length;
$("#list-video").empty();
for (i=0; i<videoLength; i++) {
  var listItemvideo =
    '<div id="video-pertanian">'+
      '<div class="card shadow" style="margin-bottom:10px">'+
      '<a class="button" href="'+video[i].link+'" data-obj="'+i+'">'+
      '<div style="--aspect-ratio: 16/9;">' +
      '<iframe src="' +video[i].link+ '">' +
      '</iframe>' +
      '</div>' +
      '</a>' +
      '<div style="padding-top:5px;padding-left:10px;margin-bottom:0px"><h6>'+ video[i].title +'</h6></div>'+
      '</div>'+
    '</div>';
  $("#list-video").append(listItemvideo);
};

$(document).ready(function(){
  var list = $("#list-video #video-pertanian");
  var numToShow = 4;
  var button = $("#video-lainnya");
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