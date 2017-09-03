// Load jQuery
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

Game.LoadMod('http://aktanusa.github.io/CookieMonster/CookieMonster.js');

var autoClicker;  
var autoBuilder;

function initBot(amount, shouldBuyUpgrade, shouldBuyBuilding) {
	clearBot();
	autoClicker = setInterval(function() { Game.ClickCookie(); }, amount);
	autoBuilder = setInterval(function() {
		var hasBuyUpgrade = false;
		if (shouldBuyUpgrade) hasBuyUpgrade = buyUpgrade();
		if (shouldBuyBuilding) buyBuilding();
		clickGooldenCookie();
	}, 1000);
}

function clearBot() {
	if (autoClicker) clearInterval(autoClicker);
	if (autoBuilder) clearInterval(autoBuilder);
}

function buyUpgrade() {
	var upgrade = $('.CMBackBlue');
	if (upgrade.length > 0) {
		upgrade.click();
		return true;
	}
	return false;
}

function buyBuilding() {
	var building = $("span[style*='color: rgb(0, 255, 0)']");
	if (building.length > 0) {
		building.click();	
	}
}

function clickGooldenCookie() {
	if (Game.shimmers.length > 0) {
		for (var i = 0; i < Game.shimmers.length; i++) {
			Game.shimmers[i].pop()
		}
	}
}
