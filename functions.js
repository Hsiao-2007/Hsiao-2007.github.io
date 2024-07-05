function checkInput() {
    var element = document.getElementById("terminal-text");
    var promptText = document.getElementById("input-command");
    if (promptText.value == "cat /home/hsiao/.info" || promptText.value == "cat /../hsiao/.info") { //Check if command entered is reading the .info file in the home directory
        element.innerHTML += "<br>My bio..."
    } 
    else {
        element.innerHTML += "<br> ERROR! Please enter in cat the contents on the .info file in /home/hsiao"
    }
}