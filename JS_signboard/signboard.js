var displayPanel, controlPanel, textBox;

window.onload = appInit;

//初期化関数
function appInit(){
	displayPanel = document.getElementById("displayPanel");
	controlPanel = document.getElementById("controlPanel");
	textBox = document.getElementById("textBox");
	var applyButton = document.getElementById("applyButton");
	var clearButton = document.getElementById("clearButton");

//文字表示ボタン、消去ボタンがここで紐づいてる
	applyButton.addEventListener("click", applyButtonClick, false);
	clearButton.addEventListener("click", clearText, false);
	window.onresize=setPosition;
	document.body.onclick = switchPanel;

//イベントハンドラーを割り当てる
	controlPanel.onclick=function(event){
		event.cancelBubble = true;
	};

	//起動前、リロード前のテキストを再読み込み
	loadText();
}

//文字表示(文字数によって大きさを変える)
function applyButtonClick(event){
	var text = textBox.value;
	displayPanel.textContent = text;
	if(text.length < 6){
		displayPanel.style.fontSize = "72px";
	}else if(text.length < 11){
		displayPanel.style.fontSize = "48px";
	}else{
		displayPanel.style.fontSize = "36px";
	}
	//中心で文字表示
	setPosition();

	//入力パネル非表示
	switchPanel();
}

//文字消去
function clearText(){
	displayPanel.textContent = "";
	textContent.value = "";
}

//文字数に応じて表示スタイルを調整
function setPosition(){
	var bodyHeight = document.body.clientHeight;
	var divHeight = displayPanel.clientHeight;
	displayPanel.style.top = (bodyHeight - divHeight) / 2 + "px";
}

//不要時に入力パネルが消える
function switchPanel(event){
	if (controlPanel.style.visibility == "hidden") {
		controlPanel.style.visibility = "visible";
	}else{
		controlPanel.style.visibility = "hidden";
	}
}

//文字をセーブする
function saveText(text){
	var storage = localStorage;
	if(typeof storage == "undefined"){
		return;
	}
	storage.setItem("text", text);
}

//テキストをセット(再帰用)
function setText(text){
	displayPanel.textContent = text;
	if (text.length < 6) {
		displayPanel.style.fontSize = "72px";
	}else if(text.length < 11){
		displayPanel.style.fontSize = "48px";
	}else{
		displayPanel.style.fontSize = "36px";
	}
	setPosition();
	switchPanel();
}

//関数をリストのように変更
function applyButtonClick(event){
	var text = textBox.value;
	setText(text);
	saveText(text);
}

//データがnull以外の時にsetText関数を実行
function loadText(){
	var storage = localStorage;
	if (typeof localStorage == "undefined") {
		return;
	}else{
		//何もしない
	}
	var text = storage.getItem("text");
	if(text){
		setText(text);
	}else{
		//何もしない
	}
}