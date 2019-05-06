function generate() {
    fetch('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json').then(r => r.json()).then(function (fetched) {
        colorSetTest = fetched;

        var x = Math.round(Math.random() * (colorSetTest.length - 1));
        var y = colorSetTest[x];
        var c1 = y.colors[0];
        var c2 = y.colors[1];
        var c3 = y.colors[2];
        var colorName = y.name
        var angle = Math.round(Math.random() * 360);

        if (c3 == undefined) {
            var gradient = "linear-gradient(" + angle + "deg, " + c1 + ", " + c2 + ")";
        } else {
            var gradient = "linear-gradient(" + angle + "deg, " + c1 + ", " + c2 + ", " + c3 + ")";
        }
        document.getElementById("container").style.background = gradient;
        document.getElementById("button").innerHTML = colorName
        document.getElementById("output").innerHTML = gradient;
    });
}

document.onload = generate();
//Coded by Ryan "lryanle" Lahlou