var express = require('express');

var app = new express();
var users = [{name:'Tina',age:34},{name:'Amit',age:44}];
app.get('/',(req,res)=>{
	res.send('Welcome to my Express Application');
})
app.get('/users',(req,res)=>{
	res.json(users);
})
app.listen(3000,()=>{
	console.log('Express server listening on 3000');
});