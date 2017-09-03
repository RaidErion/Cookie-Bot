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
