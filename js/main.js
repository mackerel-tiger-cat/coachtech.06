/*お問い合わせページ*/
/*
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
	$('#company_name').removeClass("inp_error");
	$('#username').removeClass("inp_error");
	$('#e_mail').removeClass("inp_error");
	$('#comment').removeClass("inp_error");
// 入力エラー文をリセット
	$("#company_name_error").empty();
	$("#username_error").empty();
	$("#mailaddress_error").empty();
	$("#comment_error").empty();
// 入力内容セット
	var company_name   = $("#company_name").val();
	var username  = $("#username").val();
	var e_mail = $("#e_mail").val();
	var comment = $("#comment").val();
// 入力内容チェック
	//会社名
if (company_name == "") {
		$("#company_name_error").html("! このフィールドを入力して下さい。");
		$("#company_name").addClass("inp_error");
		result = false;
return result;
}
	//名前
if (username == "") {
		$("#username_error").html("! このフィールドを入力して下さい。");
		$("#username").addClass("inp_error");
		result = false;
return result;
}
	//メールアドレス
if (e_mail == "") {
		$("#mailaddress_error").html("! このフィールドを入力して下さい。");
		$("#e_mail").addClass("inp_error");
		result = false;
return result;
}
	// お問い合わせ内容
if (comment == "") {
		$("#comment_error").html("! このフィールドを入力して下さい。");
		$("#comment").addClass("inp_error");
		result = false;
return result;
}
*/
// レスポンシブデザイン:ハンバーガーメニュー,ドロワーメニュー
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});
