
var pins_config = {
  "pins":[
  ]
};
for(let i =0;i<js_obj_data.length;i++){
    console.log(js_obj_data[i])
    let c ={
            "shape": "circle",//either "circle" or "square"
            "hover": "<center><b><u>"+js_obj_data[i].title+"</u></b></center><br><img style='height: 50px;width: 50px' src="+js_obj_data[i].image+">",//info of the popup
            "pos_X": js_obj_data[i].x_coordinat,//check the X, Y coordinates guide in the documentation
            "pos_Y": js_obj_data[i].y_coordinat,
            "size": 12,//size of the pin
            "outline": "#fff",//outline color of the pin
            "upColor": "#2e52ff  ",//color of the pin when map load
            "overColor": "#ffd480",//color of the pin when mouse hover
            "url": 'country/'+js_obj_data[i].url,//link to any webpage
            "target": "new_window",// use "new_window", "same_window", "modal", or "none"
            "active": true//true/false to activate/deactivate this pin
        }
    pins_config.pins.push(c)
}

// The following is the script for pins interaction DON'T EDIT !!!
function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(function () {
  var pins_len = pins_config.pins.length;
  if(pins_len > 0) {
    var xmlns = "http://www.w3.org/2000/svg";
    var tsvg_obj = document.getElementById("wdctjspins");
    var svg_circle, svg_rect;
    for (var i = 0; i < pins_len; i++) {
      if (pins_config.pins[i].shape === "circle") {
        svg_circle = document.createElementNS(xmlns, "circle");
        svg_circle.setAttributeNS(null, "cx", pins_config.pins[i].pos_X + 1);
        svg_circle.setAttributeNS(null, "cy", pins_config.pins[i].pos_Y + 1);
        svg_circle.setAttributeNS(null, "r", pins_config.pins[i].size / 2);
        svg_circle.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
        tsvg_obj.appendChild(svg_circle);
        svg_circle = document.createElementNS(xmlns, "circle");
        svg_circle.setAttributeNS(null, "cx", pins_config.pins[i].pos_X);
        svg_circle.setAttributeNS(null, "cy", pins_config.pins[i].pos_Y);
        svg_circle.setAttributeNS(null, "r", pins_config.pins[i].size / 2);
        svg_circle.setAttributeNS(null, "fill", pins_config.pins[i].upColor);
        svg_circle.setAttributeNS(null, "stroke", pins_config.pins[i].outline);
        svg_circle.setAttributeNS(null, "stroke-width", 1);
        svg_circle.setAttributeNS(null, "id", "wdctjspins_" + i);
        tsvg_obj.appendChild(svg_circle);
        wdctjsAddEvent(i);
      }
      else if (pins_config.pins[i].shape === "square") {
        svg_rect = document.createElementNS(xmlns, "rect");
        svg_rect.setAttributeNS(null, "x", pins_config.pins[i].pos_X - pins_config.pins[i].size / 2 + 1);
        svg_rect.setAttributeNS(null, "y", pins_config.pins[i].pos_Y - pins_config.pins[i].size / 2 + 1);
        svg_rect.setAttributeNS(null, "width", pins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "height", pins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
        tsvg_obj.appendChild(svg_rect);
        svg_rect = document.createElementNS(xmlns, "rect");
        svg_rect.setAttributeNS(null, "x", pins_config.pins[i].pos_X - pins_config.pins[i].size / 2);
        svg_rect.setAttributeNS(null, "y", pins_config.pins[i].pos_Y - pins_config.pins[i].size / 2);
        svg_rect.setAttributeNS(null, "width", pins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "height", pins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "fill", pins_config.pins[i].upColor);
        svg_rect.setAttributeNS(null, "stroke", pins_config.pins[i].outline);
        svg_rect.setAttributeNS(null, "stroke-width", 1);
        svg_rect.setAttributeNS(null, "id", "wdctjspins_" + i);
        tsvg_obj.appendChild(svg_rect);
        wdctjsAddEvent(i);
      }
    }
  }
});
function wdctjsAddEvent(id) {
  var obj = jQuery("#wdctjspins_" + id);
  if(pins_config.pins[id].active === true){
    obj.attr({"cursor": "pointer"});
    obj.hover(function () {
      jQuery("#wdctjstip").show().html(pins_config.pins[id].hover);
      obj.css({"fill":pins_config.pins[id].overColor});
    }, function () {
      jQuery("#wdctjstip").hide();
      obj.css({"fill":pins_config.pins[id].upColor});
    });
    obj.mouseup(function(){
      obj.css({"fill":pins_config.pins[id].overColor});
      if (pins_config.pins[id].target === "new_window"){
        window.open(pins_config.pins[id].url);
      } else if (pins_config.pins[id].target === "same_window") {
        window.parent.location.href = pins_config.pins[id].url;
      } else if (pins_config.pins[id].target === "modal") {
        jQuery(pins_config.pins[id].url).modal("show");
      }
    });
    obj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wdctjstip").outerWidth(), tiph =jQuery("#wdctjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wdctjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      obj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw=jQuery("#wdctjstip").outerWidth(), tiph=jQuery("#wdctjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#wdctjstip").show().html(pins_config.pins[id].hover);
        jQuery("#wdctjstip").css({left:x, top:y});
      });
      obj.on("touchend", function () {
        jQuery("#" + id).css({"fill":pins_config.pins[id].upColor});
        if (pins_config.pins[id].target === "new_window") {
          window.open(pins_config.pins[id].url);
        } else if (pins_config.pins[id].target === "same_window") {
          window.parent.location.href = pins_config.pins[id].url;
        } else if (pins_config.pins[id].target === "modal") {
          jQuery(pins_config.pins[id].url).modal("show");
        }
      });
    }
  }
}
