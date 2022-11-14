(function () {
	"use strict";
	var myTheme = {};
	myTheme.getDate = {
		getEnDate: function (date) {
			let ndate = new Date(date.replace(/-/g, "/"));
			let chinaDate = ndate.toDateString();
			let chinaDateArray = chinaDate.split(" ");
			date = `${chinaDateArray[1]} ${chinaDateArray[2]} ${chinaDateArray[3]}`;
			return date;
		},
	};
}.call(this));
