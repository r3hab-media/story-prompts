//checkboxes
document.getElementById("cardMain").onchange = function () {
	hideShow("card-main", this.checked);
};
document.getElementById("filterOther").onchange = function () {
	hideShow("card-other", this.checked);
};
document.getElementById("filterSetting").onchange = function () {
	hideShow("card-setting", this.checked);
};
document.getElementById("filterTheme").onchange = function () {
	hideShow("card-theme", this.checked);
};
document.getElementById("filterConflict").onchange = function () {
	hideShow("card-conflict", this.checked);
};
document.getElementById("filterArchetype").onchange = function () {
	hideShow("card-archetype", this.checked);
};

function hideShow(myClass, visible) {
	[].forEach.call(document.getElementsByClassName(myClass), function (el) {
		el.hidden = !visible;
	});
}