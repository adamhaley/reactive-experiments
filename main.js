generateRand = function(){
	return Math.floor(Math.random() * 20);
};

$('.click-me').on('click',function(e){
	

});



randomNumberStream = Rx.Observable.fromEvent($('.click-me'),'click')
.map((x) => {
	return generateRand();
});


firstTen = randomNumberStream
.filter((x) => {
  	return x <= 10;
});

secondFive = randomNumberStream
.filter((x) => {
	// return x > 10 && x <= 15;
	return 10 < x && x <= 15;
});

lastFive = randomNumberStream
.filter((x) => {
	return 15 < x && x <= 20;
});

firstTen.subscribe((x)=>console.log(x));
secondFive.subscribe((x)=>console.error(x));
lastFive.subscribe((x)=>console.info(x));