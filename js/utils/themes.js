// ************ Themes ************
var themes = ["E205", "E205_outside", "E205-Timeline2"];
let displayNames = ["Inside", "Outside", "Corrupted"];

function changeTheme() {
	document.body.classList = "theme-default " + "theme-" + options.theme;
}
function getThemeName() {
	let index = themes.indexOf(options.theme || "default");
	return displayNames[index];
}

function switchTheme() {
	let index = themes.indexOf(options.theme)

	if (options.theme === null || index >= themes.length-1 || index < 0) {
		options.theme = themes[0];
	} else {
		index ++;
		options.theme = themes[index];
		options.theme = themes[1];
	}
	if (player.CT.points.gte(1)) {
		options.theme = themes[2];
	}
	
	changeTheme();
	resizeCanvas();
}