var LoadMore = function(userOptions) {
  this.options = {
    "pageSize": 6,
    "dataUrl": "",
    "container": "#list-produk",
    "triggerText": "Produk Lainnya",
    "triggerLoadingText": "Loading...",
    "trigger": "#produk-lainnya",
    "callback": null
  };
  $.extend(this.options, userOptions);
  this._index = 0;
  this._itemsCurrentlyDisplayed = 0;
};

LoadMore.prototype.scrollToElement = function(selector, time, verticalOffset) {
  time = typeof(time) != 'undefined' ? time : 1000;
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  var element = $(selector);
  var offset = element.offset();
  var offsetTop = offset.top + verticalOffset;

};

LoadMore.prototype.loadData = function() {
  var self = this;
  self.triggerFeedback(true);
  $.getJSON(self.options.dataUrl,
    function(data) {
      self.triggerFeedback(false);
      var totalResults = data.produk.length;
      var items = [];
      var dataArr = data.produk.splice(self._index, self.options.pageSize);
      if (dataArr.length > 0) {
        $.each(dataArr, function(key, val) {
          items.push("<li><div class='produk-card shadow'><a href=" + val.link + " target='_blank'><div class='poster-produk'><img id='poster' src=" + val.foto + " alt='' width='100%' height='100%' style='object-fit:cover'></div><div class='nama-produk'><h7 style'text-transform: capitalize;'>" + val.nama + "</h7></div><div class='harga-produk'><p>Rp" + val.harga + "</p></div></a></div></li>");
        });
        $(items.join("")).appendTo(self.options.container);
        var scrollToEl = $(".result").get(self._index);
        self._index += self.options.pageSize;
        if (scrollToEl) {
          // occurs only when not the initial
          // load of data
          self.scrollToElement(scrollToEl);
        }
        self._itemsCurrentlyDisplayed += dataArr.length;
        if (self._itemsCurrentlyDisplayed >= totalResults) {
          self._trigger.hide();
        }
        if (self.options.callback != null) {
          self.options.callback();
        }
      }
    });
};

LoadMore.prototype.triggerFeedback = function(isLoading) {
  if (isLoading) {
    this._trigger.text(this.options.triggerLoadingText);
  } else {
    this._trigger.text(this.options.triggerText);
  }
};

LoadMore.prototype.init = function() {
  var self = this;
  $(document).ready(
    function() {
      self._trigger = $(self.options.trigger);
      self.loadData();
      self._trigger.on("click", function() {
        self.loadData();
      });
    });
};

// example usage
var loadMore = new LoadMore({
  "dataUrl": "https://raw.githubusercontent.com/maspannn/maspannn.github.io/master/produk.json",
  "pageSize": 4
});

loadMore.init();

function mySearchProduct() {
  // Declare variables
  var input, filter, ul, li;
  input = document.getElementById("cariProduk");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list-produk");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}