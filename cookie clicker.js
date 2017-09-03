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

var autoClicker;  
var autoBuilder;

function initBot(amount) {
	clearBot();
	autoClicker = setInterval(function() { Game.ClickCookie(); }, amount);
	autoBuilder = setInterval(function() { buyBuilding(); }, 1000);
}

function clearBot() {
	if (autoClicker) clearInterval(autoClicker);
	if (autoBuilder) clearInterval(autoBuilder);
}

function buyBuilding() {
	$("span[style*='color: rgb(0, 255, 0)']").click();
}
