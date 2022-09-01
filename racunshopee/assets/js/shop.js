var shop = [
    {
        "nama": "Original Jeans Denim",
        "photo": "https://telegra.ru.com/p/4fba95cx4b258366a041da1fc258c55d8e2de2f1d3a4b747",
        "link": "https://shope.ee/2AcZFx8Lkv"
    },
    {
        "nama": "YS_scraf",
        "photo": "https://telegra.ru.com/p/4fba95cxfae5804f26b200c42f45aafeabd9e28bd3a4b747",
        "link": "https://shope.ee/5Ut1E6uvAG"
    },
    {
        "nama": "Demigodd.official",
        "photo": "https://telegra.ru.com/p/4fba95cx291d75525db215625930bb012dd9e8f2d3a4b747",
        "link": "https://shope.ee/3fRN2lRpH3"
    },
    {
        "nama": "grotasimport",
        "photo": "https://telegra.ru.com/p/4fba95cx6f514dd9b6b45a98fabf1db1df11ebfbd3a4b747",
        "link": "https://shope.ee/3V7wqTWJpB"
    },
    {
        "nama": "ANDAS Official Store",
        "photo": "https://telegra.ru.com/p/4fba95cx16bc71c031c677214fef4805c5446ddbd3a4b747",
        "link": "https://shope.ee/5KZb1rP0K0"
    },
    {
        "nama": "Viana Official Store",
        "photo": "https://telegra.ru.com/p/4fba95cx1e1eed080dc0a24fe167b1d92c2d20f6d3a4b747",
        "link": "https://shope.ee/89tmP5Mt8q"
    },
    {
        "nama": "Gridline Official",
        "photo": "https://telegra.ru.com/p/4fba95cx208ff3de0a1b75d559af6a22562dc96fd3a4b747",
        "link": "https://shope.ee/5fCRQVa7u4"
    },
  ];

var list_toko = "";
	  
for (var i = 0; i < shop.length; i++) {
  let random = shop[Math.floor(Math.random() * shop.length)];
	var nama = random.nama,
		photo = random.photo,
		link = random.link;
	
	list_toko += "<div class='block' data-photo='" + photo + "' data-nama='" + nama + "' data-link='"+ link +"'><a href='" + link + "'><img src='" + photo  + "' alt='' class='block__image' /><h5 class='block__title'>" + nama + "</h5></a></div>";
	
}

$("#toko").html(list_toko);