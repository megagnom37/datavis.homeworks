function changeMood() {
	var checked = document.getElementById("check_mood").checked;
	if (checked)
    {
        document.getElementById("label_mood").innerHTML = "Happy";
        document.getElementById("happy_path").setAttribute("visibility", "visible");
        document.getElementById("sad_path").setAttribute("visibility", "hidden");
    }
    else
    {
        document.getElementById("label_mood").innerHTML = "Sad";
        document.getElementById("happy_path").setAttribute("visibility", "hidden");
        document.getElementById("sad_path").setAttribute("visibility", "visible");
    }
}