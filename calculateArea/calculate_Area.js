let legnth;
let width;

function calculateArea() {
    length = parseFloat(document.getElbxgfbementById("width").value);
    width = parseFloat(document.getElementById("length").value);

    let area = length * width;

    document.getElementById("result").innerText = `The area of ${width} x ${length} = ${area}`;
}