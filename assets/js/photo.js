var photo =[
    {
        "link": "https://telegra.ph/file/fb34b4f3d8e1808322921.jpg"
    },
    {
        "link": "https://telegra.ph/file/b9081c67b4c272c8f5e35.jpg"
    },
    {
        "link": "https://telegra.ph/file/03a3132ad2cf0d4e4a325.jpg"
    },
    {
        "link": "https://telegra.ph/file/20a327cca629b4f7ae0d6.jpg"
    },
    {
        "link": "https://telegra.ph/file/e95b6cd3bc619b493cb57.jpg"
    },
    {
        "link": "https://telegra.ph/file/0f373f346ec12d2ddba99.jpg"
    },
    {
        "link": "https://telegra.ph/file/c23842805aca75a84e6a0.jpg"
    },
    {
        "link": "https://telegra.ph/file/a8d7a695a77f060296ef7.jpg"
    },
    {
        "link": "https://telegra.ph/file/c775343ff6e5d237eca74.jpg"
    },
    {
        "link": "https://telegra.ph/file/fb39b43c0e2369233b55f.jpg"
    },
    {
        "link": "https://telegra.ph/file/89dc5f0df2acddb9c49e6.jpg"
    },
    {
        "link": "https://telegra.ph/file/b99cab9dc730e6a8eadaf.jpg"
    },
    {
        "link": "https://telegra.ph/file/71cec16bf0320077781b5.jpg"
    },
    {
        "link": "https://telegra.ph/file/fa6938e1f227a335edacc.jpg"
    }
];


var photoLength = photo.length;

$("#list-photo").empty();

for (i=0; i<photoLength; i++) {
  let random = photo[Math.floor(Math.random() * photo.length)];
  var listItemphoto =
    '<div class="grid"><img src="'+ random.link +'" style="margin-bottom:10px;width:100%;border-radius:13px"></div>';
  $("#list-photo").append(listItemphoto);
};

$(document).ready(function(){
  var list = $("#list-photo div");
  var numToShow = 7;
  var button = $("#photo-lainnya");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
});

$("#photo-lainnya").on("click", function() {
  $(window).scrollTop(0);
});