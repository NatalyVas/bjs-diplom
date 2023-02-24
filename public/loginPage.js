"use strict"
const userForm = new UserForm();

userForm.loginFormCallback = data => 
	ApiConnector.login({login: "oleg@demo.ru", password: "demo"}, callback => console.log(callback));
if (userForm.loginFormCallback) {
	location.reload();
 } else {
	userForm.setLoginErrorMessage("Ошибка авторизации");
 }

 userForm.registerFormCallback = data => 
	ApiConnector.register({login: "oleg@demo123.ru", password: "demo123"}, callback => console.log(callback));
if (userForm.registerFormCallback) {
	location.reload();
 } else {
	userForm.setRegisterErrorMessage("Ошибка регистрации");
 }
