const getTextArea = document.getElementById("textArea");
const getGhostBlock = document.getElementById("divGhost");

getTextArea.addEventListener("focus", function() {
    divGhost.style.display = "block";
});

getTextArea.addEventListener("blur", function() {
    divGhost.style.display = "none";
});