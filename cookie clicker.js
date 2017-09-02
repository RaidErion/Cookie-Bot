<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" 
  type="text/javascript"></script>

var autoClicker;  

initBot(10);
  
function initBot(amount) {
	if (autoClicker) clearInterval(autoClicker);
	autoClicker = setInterval(function() { Game.ClickCookie(); }, amount);
}