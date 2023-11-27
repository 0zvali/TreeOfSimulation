// ************ Themes ************
var themes = [
function() {
	if (player.CT.points.gte(1))
	return "E205-Timeline2"
	else 
	return "E205"
  },
  function() {
	if (player.CT.points.gte(1))
	return "E205-Timeline2"
	else 
	return "E205_outside"
  },
	];
let displayNames = [
	function() {
		if (player.CT.points.gte(1))
		return "Corrupted"
		else 
		return "Inside"
	  },
	  function() {
		if (player.CT.points.gte(1))
		return "Corrupted"
		else 
		return "Outside"
	  },
	];

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
	
	changeTheme();
	resizeCanvas();
}