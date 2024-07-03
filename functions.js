function checkInput() {
    var element = document.getElementById("terminal-text");
    var text = document.getElementById("terminal-text").innerHTML;
    var promptText = document.getElementById("input-command");
    if (promptText.value == "cat .info" || promptText.value == "cat ~/.info") { //Check if command entered is reading the .info file in the home directory
        text = text.substring(0, 88);
        element.innerHTML = text + "Hi, my name is Hsiao-Shan Graham<br>This is my in progress github space, that I hope to add a working bash terminal to in order to give an authentic bash terminal experince<br>I am learning some langauges as of now, but am hoping to start learning QT in a little while.<br>I use Arch and openSuse linux, but also windows or debian based distros if need be";
    } 
    else {
        text = text.substring(0, 88);
        command = promptText.value;
        for (var i = 0; i < text.length; i++) {
            if (promptText.value.substring(i,i+1) == " ") {
                command = promptText.value.substring(0,i+1);
                break;
            }
        }
        element.innerHTML = text + "bash: " + command + " command does not exist<br>";
    }
}