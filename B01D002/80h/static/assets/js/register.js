// JavaScript Document
$(function(){
$("#username").blur(checkuserName);
$("#password").blur(checkpassWord);
$("#repassword").blur(checkrepassWord);
$("#selectdate").blur(checkBirthday);
$("#headimg").blur(checkheadImg);
$(".btn-register").click(checkForm);
});

/*登录名校验*/
function checkuserName()
{
var userNameValue = $("#username").val();
var usernameRegex = /^[\u4E00-\u9FA5\uF900-\uFA2D\w]{0,15}$/;
var msg ="<img src='/static/images/register_right.jpg' width='100%' height='100%'>";
if(userNameValue == null || userNameValue == "")
msg ="<font color='red'>用户名必须填写!</font>";
else if(!usernameRegex.test(userNameValue))
msg ="<font color='red'>用户名格式不正确</font>";
$("#usernameSpan").html(msg);
return msg == "<img src='register_right.jpg' width='100%' height='100%'>";
}

/*密码校验*/
function checkpassWord()
{
var password = $("#password").val();
var passwordRegex = /^[!@#$%^&*()\w]{0,15}$/;
var msg ="<img src='/static/images/register_right.jpg' width='100%' height='100%'>";
if(password == null || password == "")
msg = "<font color='red'>密码必须设置!</font>";
else if(!passwordRegex.test(password))
msg ="<font color='red'>密码格式不正确</font>";
$("#passwordSpan").html(msg);
return msg == "<img src='/static/images/register_right.jpg' width='100%' height='100%'>";
}

/*密码重复校验*/
function checkrepassWord()
{
var repassword = $("#repassword").val();
var password = $("#password").val();
//var repasswordRegex = /^[!@#$%^&*()\w]{0,15}$/;
var msg ="<img src='/static/images/register_right.jpg' width='100%' height='100%'>";
if(repassword == null || repassword == "")
msg = "<font color='red'>请再次输入密码!</font>";
else if(repassword != password)
msg = "<font color='red'>密码不一致!</font>";
$("#repasswordSpan").html(msg);
return msg == "<img src='/static/images/register_right.jpg'width='100%' height='100%'>";
}

/* 生日校验 */
function checkBirthday()
{
var birthdayValue = $("#selectdate").val();
var birthdayRegex = /^([12]\d{3})(-)|(\/)(([1-9])|(1[012])|(0[1-9]))(-)|(\/)(([1-9])|([12]\d)|(3[01]))$/; 
if(birthdayValue != null && birthdayValue != "" && birthdayValue != "年/月/日")
{
		if(!birthdayRegex.test(birthdayValue))
		{
		msg = "<font color='green'>生日格式不正确!</font>";
		}else
		{
		var msg ="<img src='/static/images/register_right.jpg' width='100%' height='100%'>";
		}
}
$("#birthdaySpan").html(msg);
return msg == "<img src='/static/images/register_right.jpg' width='100%' height='100%'>";
}

/* 头像校验 */
function checkheadImg()
{
var headimgName = $("#headimg").val();
var headimgRegex = /([a-zA-Z0-9_]+)(.gif|.jpg|.jpeg|.GIF|.JPG|.JPEG|.png)/;
	if(headimgName != null && headimgName!= "")
	{
		if(!headimgRegex.test(headimgName))
		{
		msg = "<font color='green'>图片格式不正确!</font>";
		}else
		{
		var msg ="<img src='/static/images/register_right.jpg' width='100%' height='100%'>";
		}
	}
$("#headimgSpan").html(msg);
return msg == "<img src='/static/images/register_right.jpg' width='100%' height='100%'>";
}

/*注册提交 */
function checkForm()
{
var bUserName = checkuserName();
var bPassword = checkpassWord();
var bRePassword = checkrepassWord();

return bUserName && bPassword && bRePassword;

}
