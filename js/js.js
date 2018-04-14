

var miMapa;

require(["esri/map",
"esri/dijit/BasemapToggle",
"esri/dijit/BasemapGallery",
"esri/dijit/OverviewMap",
"esri/dijit/HomeButton",
"esri/dijit/Scalebar",
"dojo/domReady!"],






function (Map,BasemapToggle,BasemapGallery,OverviewMap,HomeButton,Scalebar) {
  miMapa = new Map ("mapaCont", {
  basemap: "topo",
  center: [-16.28, 28.465],
  zoom: 8


});


var params = {
  map: miMapa,
  basemap: "hybrid"




};

var miBasemapToggle = new BasemapToggle(params, "widgetBMToggle");

miBasemapToggle.startup();





var params = {
  map: miMapa
};


/*var miwidgetBasemapGallery = new BasemapGallery(params, "widgetBasemapGallery");

miwidgetBasemapGallery.startup();*/








/*var params1 = {
  map: miMapa,
  visible: true

};
*/

var miWidgetHomeButton = new HomeButton({
  map: miMapa,
  visible: true

}, "widgetHomeButton");

miWidgetHomeButton.startup();









var params = {
  map: miMapa,
  attachTo: "bottom-right"

};


var miwidgetOverviewMap = new OverviewMap(params);

miwidgetOverviewMap.startup();









var params = {
  map: miMapa,
  attachTo: "bottom-left"

};


var miwidgetScalebar = new Scalebar(params);







var id=
arcgisUtils.createMap(id,"mapaCont")










});
