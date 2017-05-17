var displayPanel;

window.onload = appInit;

//初期化関数
function appInit(){
	displayPanel = document.getElementById("displayPanel");
	displayPanel.textContent = "テンプレート動作テスト";
}