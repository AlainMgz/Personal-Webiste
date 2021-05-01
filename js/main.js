var button = document.getElementById("button");
var textBox = document.getElementById("command");

// This event is fired when button is clicked
button.addEventListener("click", function () {
    var str = textBox.value;
    if (str == " $ coniunctum") {
        window.location.href("https://coniunctum.alainmagazin.org");
    } else if (str == " $ portfolio") {
        window.location.href("https://portfolio.alainmagazin.org");
    } 
});

textBox.addEventListener("keyup", function (event) {

    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.keyCode == 13) {
        button.click();
    }
});
