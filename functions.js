function checkInput() {
    var element = document.getElementById("terminal-text");
    var promptText = document.getElementById("input-command");
    if (promptText.value == "cat /home/hsiao/.info" || promptText.value == "cat /../hsiao/.info") element.innerHTML += "<br>My bio..." /*
    1. Add slowdown feature to imitate "typing"
    2. Make it read the contents of a local .info file
    3. Fix it to actually use a local shell */
    else if (promptText.value == "help") element.innerHTML += "Use the cat command to read the contents of /home/hsiao/.info";
    else element.innerHTML += "<br> ERROR! Please enter in cat the contents on the .info file in /home/hsiao"
}