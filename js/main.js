/*お問い合わせページ*/
$(function(){
	$('input:submit[id="btn_submit"]').click(function(){
		if(!input_check()){
			return false;
		}
	});
});
// 入力内容チェックのための関数
function input_check() {
  var result = true;
}
	// エラー用装飾のためのクラスリセット
	$('#company-name').removeClass("inp_error");
	$('#name').removeClass("inp_error");
	$('#e-mail').removeClass("inp_error");
	$('#message').removeClass("inp_error");
	// 入力エラー文をリセット
	$("#company-name").empty();
	$("#name").empty();
	$("#e-mail").empty();
	$("#message").empty();
	// 入力内容セット
	var name   = $("#company-name").val();
	var furigana  = $("#name").val();
	var username = $("#e-mail").val();
	var mailaddress  = $("#message").val();
	// 入力内容チェック
	// お問い合わせ内容
	if(remarks == ""){
		$("#remarks_error").html("!この フィールドを入力して下さい。");
		$("#remarks").addClass("inp_error");
		result = false;
	return result;
}
// レスポンシブデザイン:ハンバーガーメニュー,ドロワーメニュー
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});
