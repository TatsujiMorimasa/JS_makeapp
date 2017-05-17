var displayPanel;

window.onload = appInit;

//初期化関数
function appInit(){
	displayPanel = document.getElementById("displayPanel");
	tick();
}
function tick(){
	var date = new Date();
	displayPanel.textContent = date.toLocaleTimeString();
}