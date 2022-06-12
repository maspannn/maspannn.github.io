var map = L.map('map', {
    center: [-7.68167, 110.32333],
    zoomControl: false,
    zoom: 15,
});
      
var basemap = L.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '<a href="https://maspannn.github.io" target="_blank">Mas Pannn</a>'
});
basemap.addTo(map);

var adminkecamatanColors = {"Tinggi":"#bd0026", "Sedang":"#fd8d3c", "Rendah":"#ffffb2"};
var adminkecamatan = L.geoJson(null, {
  style: function (feature) {
    return {
      fillColor: adminkecamatanColors[feature.properties.klas_jml],
      fillOpacity: 0.7,
      color: "gray",
      weight: 1,
      opacity: 1,
    };
  },
  onEachFeature: function (feature, layer) {
    var content = '<table class="table table-striped table-bordered table-sm">' +
      '<tr><th>Kabupaten</th><td>' + feature.properties.KABUPATEN + '</tr>' +
      '<tr><th>Jumlah Laki-laki</th><td>' + feature.properties.LAKI_LAKI + ' Jiwa</tr>' +
      '<tr><th>Jumlah Perempuan</th><td>' + feature.properties.PEREMPUAN + ' Jiwa</tr>' +
      '<tr><th>Jumlah Penduduk</th><td>' + feature.properties.JML_PDD + ' Jiwa</tr>' +
      '<tr><th>Jumlah Keluarga</th><td>' + feature.properties.KK + '</tr>' +
      '<tr><th>Luas</th><td>' + feature.properties.Luas_km2 + ' Km<sup>2</sup></tr>' +
      '<tr><th>Kepadatan Penduduk</th><td>' + feature.properties.KPDT_PDD + ' Jiwa/Km<sup>2</sup></tr>' +
      '</table>' +
      '<small class="text-primary">Sumber: PODES BPS 2011</small>';
    layer.on({
      mouseover: function (e) { 
        var layer = e.target;
        layer.setStyle({ 
          weight: 1, 
          color: "gray", 
          opacity: 1,
          fillColor: "cyan",
          fillOpacity: 0.7, 
        });
        adminkecamatan.bindTooltip(feature.properties.KECAMATAN + ", " + feature.properties.KABUPATEN , {sticky: true});
      },
      mouseout: function (e) { 
        adminkecamatan.resetStyle(e.target);
        map.closePopup();
      },
      click: function (e) {
        $("#feature-title").html("Kec. " + feature.properties.KECAMATAN);
        $("#feature-info").html(content);
        $("#featureModal").modal("show");
      }
    });
  }
});


$.getJSON("assets/penduduk_kecamatan_diy_polygon.geojson", function (data) {
  adminkecamatan.addData(data);
});

var kht = L.esri.dynamicMapLayer({ 
    url: 'https://momi.minerba.esdm.go.id/gisserver/rest/services/Pusat/KawasanHutan/MapServer', 
    layers: [0],
    f: 'feature'
}).bindPopup(function (error, featureCollection) {
  if (error || featureCollection.features.length === 5) {
    return false;
  } else {
    return "<b>SK :</b>&nbsp;" + featureCollection.features[0].properties.nskjuk + "<br>" +
    "<b>Kawasan :</b>&nbsp;" + featureCollection.features[0].properties.kawasan;
  }
});

var stasiunbmkg = L.esri.dynamicMapLayer({ 
    url: 'https://sig01.pertanian.go.id/arcgis/rest/services/Daerah/Stasiun_Iklim_BMKG/MapServer', 
    layers: [1],
    f: 'feature'
}).bindPopup(function (error, featureCollection) {
  if (error || featureCollection.features.length === 5) {
    return false;
  } else {
    return "<b>No Stasiun :</b>&nbsp;" + featureCollection.features[0].properties.No__Stasiu + "<br>" +
    "<b>Nama Stasiun :</b>&nbsp;" + featureCollection.features[0].properties.Nama_Stasi + "<br>" +
    "<b>Jenis Stasiun :</b>&nbsp;" + featureCollection.features[0].properties.Jenis_Stas + "<br>" +
    "<b>Region :</b>&nbsp;" + featureCollection.features[0].properties.Region + "<br>" +
    "<b>Propinsi :</b>&nbsp;" + featureCollection.features[0].properties.Propinsi + "<br>" +
    "<b>Kabupaten :</b>&nbsp;" + featureCollection.features[0].properties.Kabupaten + "<br>" +
    "<b>Lintang :</b>&nbsp;" + featureCollection.features[0].properties.Lintang__ + "<br>" +
    "<b>Bujur :</b>&nbsp;" + featureCollection.features[0].properties.Bujur___;
  }
});

var bptph = L.esri.dynamicMapLayer({ 
    url: 'https://sig01.pertanian.go.id/arcgis/rest/services/Daerah/Stasiun_Iklim_BMKG/MapServer', 
    layers: [0],
    f: 'feature'
}).bindPopup(function (error, featureCollection) {
  if (error || featureCollection.features.length === 5) {
    return false;
  } else {
    return "<b>Provinsi :</b>&nbsp;" + featureCollection.features[0].properties.Provinsi + "<br>" +
    "<b>Kabupaten :</b>&nbsp;" + featureCollection.features[0].properties.Kabupaten_ + "<br>" +
    "<b>Nama Unit :</b>&nbsp;" + featureCollection.features[0].properties.Nama_Unit + "<br>" +
    "<b>Nama Pimpinan :</b>&nbsp;" + featureCollection.features[0].properties.Nama_Pimpi + "<br>" +
    "<b>No HP Pimpinan :</b>&nbsp;" + featureCollection.features[0].properties.No_HP_Pimp + "<br>" +
    "<b>Alamat Unit :</b>&nbsp;" + featureCollection.features[0].properties.Alamat_Uni + "<br>" +
    "<b>Kode Pos :</b>&nbsp;" + featureCollection.features[0].properties.Kode_Pos + "<br>" +
    "<b>No Telp Unit :</b>&nbsp;" + featureCollection.features[0].properties.No_Telp_Un;
  }
});
        
function sptonEachFeature(feature, layer) {
      sptpopUpFeature(feature, layer);
    }
function spt2onEachFeature(feature, layer) {
        spt2popUpFeature(feature, layer);
    }

function sptpopUpFeature(feature, layer){
    var sptsukoharjo =
      "<h5><b>" + feature.properties.KABKOT + "<br></b></h5>"
      + "<b>SPT : </b>" + feature.properties.SPT + "<br>"
      + "<b>USDA14_1 : </b>" + feature.properties.USDA14_1 + "<br>"
      + "<b>USDA14_2 : </b>" + feature.properties.USDA14_2;
      layer.bindPopup(sptsukoharjo);
    }
    
var sptsukoharjo = L.geoJson(sptsukoharjo, {
      style : function(feature) {switch (feature.properties.SPT){
            case 1 : return {color: "#6E6E6E", weight:0.9,fillColor:"#61FFA8",fillOpacity:"#61FFA8"};
            case 2 : return {color: "#6E6E6E", weight:0.9,fillColor:"#50F286",fillOpacity:"#50F286"};
            case 3 : return {color: "#6E6E6E", weight:0.9,fillColor:"#40E664",fillOpacity:"#40E664"};
            case 4 : return {color: "#6E6E6E", weight:0.9,fillColor:"#30D941",fillOpacity:"#30D941"};
            case 5 : return {color: "#6E6E6E", weight:0.9,fillColor:"#23CC23",fillOpacity:"#23CC23"};
            case 6 : return {color: "#6E6E6E", weight:0.9,fillColor:"#29BF15",fillOpacity:"#29BF15"};
            case 7 : return {color: "#6E6E6E", weight:0.9,fillColor:"#32B30B",fillOpacity:"#32B30B"};
            case 8 : return {color: "#6E6E6E", weight:0.9,fillColor:"#38A800",fillOpacity:"#38A800"};
            case 9 : return {color: "#6E6E6E", weight:0.9,fillColor:"#F7F7F7",fillOpacity:"#F7F7F7"};
            case 10 : return {color: "#6E6E6E", weight:0.9,fillColor:"#D4D4D4",fillOpacity:"#D4D4D4"};
            case 11 : return {color: "#6E6E6E", weight:0.9,fillColor:"#B3B3B3",fillOpacity:"#B3B3B3"};
            case 12 : return {color: "#6E6E6E", weight:0.9,fillColor:"#FFFFBF",fillOpacity:"#FFFFBF"};
            case 13 : return {color: "#6E6E6E", weight:0.9,fillColor:"#D69C9C",fillOpacity:"#D69C9C"};
            case 14 : return {color: "#6E6E6E", weight:0.9,fillColor:"#CC9391",fillOpacity:"#CC9391"};
            case 15 : return {color: "#6E6E6E", weight:0.9,fillColor:"#C48A86",fillOpacity:"#C48A86"};
            case 16 : return {color: "#6E6E6E", weight:0.9,fillColor:"#BD837D",fillOpacity:"#BD837D"};
            case 17 : return {color: "#6E6E6E", weight:0.9,fillColor:"#B37970",fillOpacity:"#B37970"};
            case 18 : return {color: "#6E6E6E", weight:0.9,fillColor:"#AB7368",fillOpacity:"#AB7368"};
            case 19 : return {color: "#6E6E6E", weight:0.9,fillColor:"#A36C5F",fillOpacity:"#A36C5F"};
            case 20 : return {color: "#6E6E6E", weight:0.9,fillColor:"#996556",fillOpacity:"#996556"};
            case 21 : return {color: "#6E6E6E", weight:0.9,fillColor:"#915F4D",fillOpacity:"#915F4D"};
            case 22 : return {color: "#6E6E6E", weight:0.9,fillColor:"#8A5B45",fillOpacity:"#8A5B45"};
            case 5555 : return {color: "#E69800", weight:0.9,fillColor:"#E69800",fillOpacity:"#E69800"};
            case 9999 : return {color: "#4065EB", weight:0.9,fillColor:"#97DBF2",fillOpacity:"#97DBF2"};
          }},
      onEachFeature : sptonEachFeature
    });
    
    
var chjun22 = L.tileLayer.wms('http://hidromet.sih3.bmkg.go.id/geoserver/sipitung/wms?', {
      layers: 'sipitung:PCH_0622_ver05_20220519130534',
      tiled: true,
      format: 'image/png',
      transparent: true,
      maxZoom: 16,
      minZoom: 0,
      continuousWorld: true
  });
var chjul22 = L.tileLayer.wms('http://hidromet.sih3.bmkg.go.id/geoserver/sipitung/wms?', {
      layers: 'sipitung:PCH_0722_ver05_20220519132829',
      tiled: true,
      format: 'image/png',
      transparent: true,
      maxZoom: 16,
      minZoom: 0,
      continuousWorld: true
  });
var chagt22 = L.tileLayer.wms('http://hidromet.sih3.bmkg.go.id/geoserver/sipitung/wms?', {
      layers: 'sipitung:PCH_0822_ver05_20220519135812',
      tiled: true,
      format: 'image/png',
      transparent: true,
      maxZoom: 16,
      minZoom: 0,
      continuousWorld: true
  });

var provitas = L.esri.dynamicMapLayer({ 
    url: 'https://sig01.pertanian.go.id/arcgis/rest/services/Provitaspenyuluh/MapServer', 
    layers: [0],
    f: 'feature'
}).bindPopup(function (error, featureCollection) {
  if (error || featureCollection.features.length === 5) {
    return false;
  } else {
    return "<b>Provinsi :</b>&nbsp;" + featureCollection.features[0].properties.Provinsi + "<br>" +
    "<b>Kabupaten :</b>&nbsp;" + featureCollection.features[0].properties.Kabupaten + "<br>" +
    "<b>Luas_Panen :</b>&nbsp;" + featureCollection.features[0].properties.Luas_Panen + "<br>" +
    "<b>Produksi :</b>&nbsp;" + featureCollection.features[0].properties.Produksi + "<br>" +
    "<b>Yealt (Ha) :</b>&nbsp;" + featureCollection.features[0].properties.Yealt__Ha_ + "<br>" +
    "<b>Penyuluh PNS :</b>&nbsp;" + featureCollection.features[0].properties.pns + "<br>" +
    "<b>Penyuluh THL :</b>&nbsp;" + featureCollection.features[0].properties.thl + "<br>" +
    "<b>Penyuluh :</b>&nbsp;" + featureCollection.features[0].properties.Penyuluh + "<br>" +
    "<b>Luas Wilayaj :</b>&nbsp;" + featureCollection.features[0].properties.Luas_wil;
  }
});

var sawah = L.esri.dynamicMapLayer({ 
    url: 'https://sig01.pertanian.go.id/arcgis/rest/services/TanamanPangan/sawah/MapServer', 
    layers: [0],
    f: 'feature'
}).bindPopup(function (error, featureCollection) {
  if (error || featureCollection.features.length === 5) {
    return false;
  } else {
    return "<b>PROVINSI :</b>&nbsp;" + featureCollection.features[0].properties.PROVINSI + "<br>" +
    "<b>KABKOT :</b>&nbsp;" + featureCollection.features[0].properties.KABKOT + "<br>" +
    "<b>KECAMATAN :</b>&nbsp;" + featureCollection.features[0].properties.KECAMATAN + "<br>" +
    "<b>ID :</b>&nbsp;" + featureCollection.features[0].properties.ID + "<br>" +
    "<b>LUAS CEA :</b>&nbsp;" + featureCollection.features[0].properties.Luas_CEA + "<br>" +
    "<b>ID IRIGASI :</b>&nbsp;" + featureCollection.features[0].properties.ID_Irigasi + "<br>" +
    "<b>LUAS (Ha) :</b>&nbsp;" + featureCollection.features[0].properties.luas_Ha;
  }
}).addTo(map);

var ippadi = L.esri.dynamicMapLayer({ 
    url: 'https://sig01.pertanian.go.id/arcgis/rest/services/Pangan/padi/MapServer', 
    layers: [0],
    f: 'feature'
}).bindPopup(function (error, featureCollection) {
  if (error || featureCollection.features.length === 5) {
    return false;
  } else {
    return "<b>Provinsi :</b>&nbsp;" + featureCollection.features[0].properties.PROVINSI + "<br>" +
    "<b>Kabupaten :</b>&nbsp;" + featureCollection.features[0].properties.Kabupaten + "<br>" +
    "<b>LBS ATRBPN :</b>&nbsp;" + featureCollection.features[0].properties.LBS_ATRBPN + "<br>" +
    "<b>Luas Panen Jan_Des18 :</b>&nbsp;" + featureCollection.features[0].properties.Jan_Des18 + "<br>" +
    "<b>Luas Panen Jan_Des19 :</b>&nbsp;" + featureCollection.features[0].properties.Jan_Des181 + "<br>" +
    "<b>Luas Panen Jan_Des20 :</b>&nbsp;" + featureCollection.features[0].properties.Jan_Des20 + "<br>" +
    "<b>Luas Panen Jan_Des21 :</b>&nbsp;" + featureCollection.features[0].properties.Jan_Des21 + "<br>" +
    "<b>IP 2018 :</b>&nbsp;" + featureCollection.features[0].properties.P_IP2018 + "<br>" +
    "<b>IP 2019 :</b>&nbsp;" + featureCollection.features[0].properties.P_IP2019 + "<br>" +
    "<b>IP Jan_Des 2020 :</b>&nbsp;" + featureCollection.features[0].properties.IPJanDes20;
  }
});

var kantorPusat = L.esri.Cluster.featureLayer({
    url: 'https://sig01.pertanian.go.id/arcgis/rest/services/SDM/Lokasi_Kantor_Pusat/MapServer/0'
}).bindPopup(function (layer) {
   return "<b>Unit Kerja :&nbsp;</b>" + layer.feature.properties.UnitKerja + "<br>" +
    "<b>Eselon 1 :&nbsp;</b>" + layer.feature.properties.Eselon1 + "<br>" +
    "<b>Jenis Unit :&nbsp;</b>" + layer.feature.properties.JenisUnit + "<br>" +
    "<b>Jumlah Pegawai :&nbsp;</b>" + layer.feature.properties.JumlahPeg + "<br>" +
    "<b>S3 :&nbsp;</b>" + layer.feature.properties.S3 + "<br>" +
    "<b>S2 :&nbsp;</b>" + layer.feature.properties.S2 + "<br>" +
    "<b>S1 :&nbsp;</b>" + layer.feature.properties.s1 + "<br>" +
    "<b>D4 :&nbsp;</b>" + layer.feature.properties.D4 + "<br>" +
    "<b>SM :&nbsp;</b>" + layer.feature.properties.SM + "<br>" +
    "<b>D3 :&nbsp;</b>" + layer.feature.properties.D3 + "<br>" +
    "<b>D2 :&nbsp;</b>" + layer.feature.properties.D2 + "<br>" +
    "<b>D1 :&nbsp;</b>" + layer.feature.properties.D1 + "<br>" +
    "<b>SMA :&nbsp;</b>" + layer.feature.properties.SMA + "<br>" +
    "<b>SMP :&nbsp;</b>" + layer.feature.properties.SMP + "<br>" +
    "<b>SD :&nbsp;</b>" + layer.feature.properties.SD;
});

var baseMaps = {
     "Basemap": basemap,
    };
var groupedOverlays = {
     "<b>Peta Tematik Umum</b>": {
      "Lokasi BPTPH LPHP LAH": bptph,
      "Kawasan Hutan": kht,
      "Podes DI. Yogyakarta": adminkecamatan,
      },
      "<b>Peta Tematik Kementan</b>": {
        "Index Panen Padi" : ippadi,
        "Peta Sawah 2019": sawah,
        "Provitas Penyuluh" : provitas,
        "Lokasi BPP": kantorPusat,
      },
      "<b>Peta Tematik BBSDLP</b>": {
        "SPT Kab. Sukoharjo 50K" : sptsukoharjo,
      },
      "<b>Peta Tematik BMKG</b>": {
        "Lokasi Stasiun Iklim BMKG": stasiunbmkg,
        "Prakiraan Curah Hujan Juni 2022": chjun22,
        "Prakiraan Curah Hujan Juli 2022": chjul22,
        "Prakiraan Curah Hujan Agustus 2022": chagt22,
      },
    };
    
map.addControl(new L.Control.Fullscreen({
  title: {
      'false': 'View Fullscreen',
      'true': 'Exit Fullscreen'
  }
}));

var zoomHome = L.Control.zoomHome({
    position: 'topleft'
});
zoomHome.addTo(map);

L.control.groupedLayers(baseMaps, groupedOverlays).addTo(map)
    
var locateControl = L.control
  .locate({
    position: "bottomright",
    drawCircle: true,
    follow: true,
    setView: true,
    keepCurrentZoomLevel: true,
    markerStyle: {
      weight: 1,
      opacity: 0.8,
      fillOpacity: 0.8,
    },
    circleStyle: {
      weight: 1,
      clickable: false,
    },
    icon: "fa fa-crosshairs",
    metric: true,
    strings: {
      title: "Lokasi Anda",
      popup: "Lokasi Anda sekarang di sini<br>Akurasi {distance} {unit}",
      outsideMapBoundsMsg: "Sepertinya Anda berada di luar batas Peta.",
    },
    locateOptions: {
      maxZoom: 18,
      watch: true,
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 10000,
    },
  })
  .addTo(map);
  
  L.control.betterscale({metric:true, imperial: false}).addTo(map);