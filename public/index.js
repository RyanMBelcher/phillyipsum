var slider = document.getElementById('paragraphs-slider');
var output = document.getElementById('para');

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}