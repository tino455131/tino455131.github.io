var Myimages = document.querySelector("img");

Myimages.onclick = function() {
	let mySrc = Myimages.getAttribute('src');
	if(mySrc === 'images/firefox.png'){
		Myimages.setAttribute('src','images/google.png');
	}else{
		Myimages.setAttribute('src','images/firefox.png');
	}
}
var Mybutton = document.querySelector("button");
var Myheading = document.querySelector("h1");

function setusername(){
	let Myname = prompt('Please set your name');
	if(!Myname || Myname === null){
		setusername();
	}else{
		localStorage.setItem('name',Myname);
		Myheading.innerHTML = 'Windows bad,' + Myname;
	}
	
}

if(!localStorage.getItem('name')){
	setusername();
}else{
	let storedname = localStorage.getItem('name');
	Myheading.innerHTML = 'Windows bad,' + storedname;
}

Mybutton.onclick = function(){
	setusername();
}