/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

function sendEmail() {
    sender = document.getElementById('sender').value;
	content = document.getElementById('content').value;
	Email.send({
	Host: "smtp.gmail.com",
	Username : "noreply.jumblejuggle@gmail.com",
	Password : "Rajat@1234",
	To : 'rajat123468@gmail.com',
	From : 'noreply.jumblejuggle@gmail.com',
	Subject : "Contact Request from knowRajatmore",
    Body :"From:"+sender+" Message:"+content,
	}).then(
		message => alert("mail sent successfully")
	);
}