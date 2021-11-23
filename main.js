quick_draw_data_set = ["Pen", "Apple", "Binoculars", "Baseball bat", "Fork", "Cat"]
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);

Element_of_array = quick_draw_data_set[random_number];
console.log(Element_of_array);

document.getElementById("toBeDrawn").innerHTML = "Sketch to be drawn: " + Element_of_array;
