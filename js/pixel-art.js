var nombreColores = ['White', 'LightYellow',
'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Variables
var colorPersonalizado = document.getElementById('color-personalizado');
let paleta = document.getElementById("paleta");
let grilla = document.getElementById("grilla-pixeles");
let mouseApretado = false;

//Funciones
colorPersonalizado.addEventListener('change', 
(function() {
  colorActual = colorPersonalizado.value;
  $("#indicador-de-color").css("backgroundColor", colorActual); 
})
);

var crearContenedoresPaleta = function(nombreColor){
  for(var i = 0; i < nombreColores.length; i++){

    var color = document.createElement("div");
    color.className = "color-paleta";
    paleta.appendChild(color);

    var st = color.style;
    st.backgroundColor = nombreColores[i];
  }
 
};

var crearContenedoresGrilla = function(nro){
  for(var i = 0; i < 1750; i++){    
    
    var pixel = document.createElement("div");
    grilla.appendChild(pixel);
}

};

function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
};

function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

crearContenedoresGrilla();
crearContenedoresPaleta();

//JQuery
$(document).ready(function(){ 

$(".color-paleta").click(function(e){
  let $colorPaleta = $(this).css("backgroundColor");
  let $boxColor = $("#indicador-de-color");
  $boxColor.css("backgroundColor", $colorPaleta);

});

$("#grilla-pixeles div").click(function(e){
    let $colorPixel = $("#indicador-de-color").css("backgroundColor");
    $(this).css("backgroundColor", $colorPixel);
});

$("#grilla-pixeles").mousedown(function(){mouseApretado = true;});
$(document).mouseup(function(){mouseApretado = false;});

$("#grilla-pixeles div").hover(function(){
  let $colorPixel = $("#indicador-de-color").css("backgroundColor");
  if (mouseApretado){
    $(this).css("backgroundColor", $colorPixel);
  }
});

$("#borrar").click(function(){
  let $pixelxpixel = $("#grilla-pixeles div").each(function(){});
  $pixelxpixel.animate({"backgroundColor":""}, 1000);  
});

//Funciones para cargar personajes ya dibujados
$("#batman").click(function(){
  cargarSuperheroe(batman)});
$("#invisible").click(function(){
  cargarSuperheroe(invisible)});
$("#wonder").click(function(){
  cargarSuperheroe(wonder)});
$("#flash").click(function(){
  cargarSuperheroe(flash)});

//Guardar archivo en formato .png
$("#guardar").click(function(){
  guardarPixelArt();
});  

}); // cierra el document.ready
