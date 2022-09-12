var body = document.getElementsByTagName("body")[0]
var bgColorPicker1 = document.getElementById("colorPicker1")
var bgColorPicker2 = document.getElementById("colorPicker2")
var secondHalf = document.getElementById("secondHalf")



function cp1 (){
  var color = bgColorPicker1.value;

  body.setAttribute("style", "background-color: "+ color+"; color: "+ color)
  bgColorPicker1.setAttribute("style", "background-color: "+color)

}

bgColorPicker1.addEventListener("input", cp1, false)
bgColorPicker1.addEventListener("change", cp1, false)


// bgColorPicker1.addEventListener("input", function(){
//     var color = bgColorPicker1.value;

//     body.setAttribute("style", "background-color: "+ color+"; color: "+ color)
//     bgColorPicker1.setAttribute("style", "background-color: "+color)
//   }, false);

  bgColorPicker2.addEventListener("input", function(){
    var color = bgColorPicker2.value;

    secondHalf.setAttribute("style", "background-color: "+ color)
    bgColorPicker2.setAttribute("style", "background-color: "+color)
  }, false);


// || bgColorPicker2.getAttribute("class") == "hidden"
// || bgColorPicker2.getAttribute("class") == "show"


  body.onkeyup = function (key){
      if (key.keyCode == 83) {

        if (secondHalf.getAttribute("class") == "hidden"){
            secondHalf.setAttribute("class", "secondhalf")
        } else if (secondHalf.getAttribute("class") == "secondhalf") {
            secondHalf.setAttribute("class", "hidden")
        }
          
      }
      else if (key.keyCode == 72) {
        if (bgColorPicker1.getAttribute("class") == "hidden" || bgColorPicker2.getAttribute("class") == "hidden") {
            bgColorPicker1.setAttribute("class", "show")
            bgColorPicker2.setAttribute("class", "show")
        } else if (bgColorPicker1.getAttribute("class") == "show" || bgColorPicker2.getAttribute("class") == "show") {
            bgColorPicker1.setAttribute("class", "hidden")
            bgColorPicker2.setAttribute("class", "hidden")
        }
    }
  }


