//don't start till page dom loads
document.addEventListener('DOMContentLoaded', setup);

function setup()
{
	document.getElementById('text1').addEventListener('click', function(event){	
		var firstStar = document.getElementById('text1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('text2');
		secondStar.style = "color: black";
		var thirdStar = document.getElementById('text3');
		thirdStar.style = "color: black";
		var fourthStar = document.getElementById('text4');
		fourthStar.style = "color: black";
		var fifthStar = document.getElementById('text5');
		fifthStar.style = "color: black";
		var name = "one";
		textBar(1);
	});
	document.getElementById('text2').addEventListener('click', function(event){	
		var firstStar = document.getElementById('text1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('text2');
		secondStar.style = "color: #DC4405";
		var thirdStar = document.getElementById('text3');
		thirdStar.style = "color: black";
		var fourthStar = document.getElementById('text4');
		fourthStar.style = "color: black";
		var fifthStar = document.getElementById('text5');
		fifthStar.style = "color: black";
		var name = "two";
		textBar(2);
	});	
	document.getElementById('text3').addEventListener('click', function(event){	
		var firstStar = document.getElementById('text1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('text2');
		secondStar.style = "color: #DC4405";
		var thirdStar = document.getElementById('text3');
		thirdStar.style = "color: #DC4405";
		var fourthStar = document.getElementById('text4');
		fourthStar.style = "color: black";
		var fifthStar = document.getElementById('text5');
		fifthStar.style = "color: black";
		var name = "three";
		textBar(3);
	});	
	document.getElementById('text4').addEventListener('click', function(event){	
		var firstStar = document.getElementById('text1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('text2');
		secondStar.style = "color: #DC4405";
		var thirdStar = document.getElementById('text3');
		thirdStar.style = "color: #DC4405";
		var fourthStar = document.getElementById('text4');
		fourthStar.style = "color: #DC4405";
		var fifthStar = document.getElementById('text5');
		fifthStar.style = "color: black";
		var name = "four";
		textBar(4);
	});	
	document.getElementById('text5').addEventListener('click', function(event){	
		var firstStar = document.getElementById('text1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('text2');
		secondStar.style = "color: #DC4405";
		var thirdStar = document.getElementById('text3');
		thirdStar.style = "color: #DC4405";
		var fourthStar = document.getElementById('text4');
		fourthStar.style = "color: #DC4405";
		var fifthStar = document.getElementById('text5');
		fifthStar.style = "color: #DC4405";
		var name = "five";
		textBar(5);
	});	
	document.getElementById('lecture1').addEventListener('click', function(event){	
		var firstStar = document.getElementById('lecture1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('lecture2');
		secondStar.style = "color: black";
		var thirdStar = document.getElementById('lecture3');
		thirdStar.style = "color: black";
		var fourthStar = document.getElementById('lecture4');
		fourthStar.style = "color: black";
		var fifthStar = document.getElementById('lecture5');
		fifthStar.style = "color: black";
		var name = "one";
		lectureBar(1);
	});
	document.getElementById('lecture2').addEventListener('click', function(event){	
		var firstStar = document.getElementById('lecture1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('lecture2');
		secondStar.style = "color: #DC4405";
		var thirdStar = document.getElementById('lecture3');
		thirdStar.style = "color: black";
		var fourthStar = document.getElementById('lecture4');
		fourthStar.style = "color: black";
		var fifthStar = document.getElementById('lecture5');
		fifthStar.style = "color: black";
		var name = "two";
		lectureBar(2);
	});	
	document.getElementById('lecture3').addEventListener('click', function(event){	
		var firstStar = document.getElementById('lecture1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('lecture2');
		secondStar.style = "color: #DC4405";
		var thirdStar = document.getElementById('lecture3');
		thirdStar.style = "color: #DC4405";
		var fourthStar = document.getElementById('lecture4');
		fourthStar.style = "color: black";
		var fifthStar = document.getElementById('lecture5');
		fifthStar.style = "color: black";
		var name = "three";
		lectureBar(3);
	});	
	document.getElementById('lecture4').addEventListener('click', function(event){	
		var firstStar = document.getElementById('lecture1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('lecture2');
		secondStar.style = "color: #DC4405";
		var thirdStar = document.getElementById('lecture3');
		thirdStar.style = "color: #DC4405";
		var fourthStar = document.getElementById('lecture4');
		fourthStar.style = "color: #DC4405";
		var fifthStar = document.getElementById('lecture5');
		fifthStar.style = "color: black";
		var name = "four";
		lectureBar(4);
	});	
	document.getElementById('lecture5').addEventListener('click', function(event){	
		var firstStar = document.getElementById('lecture1');
		firstStar.style = "color: #DC4405";
		var secondStar = document.getElementById('lecture2');
		secondStar.style = "color: #DC4405";
		var thirdStar = document.getElementById('lecture3');
		thirdStar.style = "color: #DC4405";
		var fourthStar = document.getElementById('lecture4');
		fourthStar.style = "color: #DC4405";
		var fifthStar = document.getElementById('lecture5');
		fifthStar.style = "color: #DC4405";
		var name = "five";
		lectureBar(5);
	});			
}

function textBar(num)
{
	var req1 = new XMLHttpRequest();

	//make data inputted object
	var textStarRating = {};

	//send the number they voted for as id
	var idOfPage = document.getElementById("idOfPage");
	textStarRating.courseId = idOfPage.getAttribute("value");
	textStarRating.rating = num;
	//open post request
	req1.open('POST', '/textbook/rate', true);
	//set header to json
	req1.setRequestHeader('Content-Type', 'application/json');
	//asynchronous request that starts after load
	req1.addEventListener('load',function(){
	    if(req1.status >= 200 && req1.status < 400)
	    {
			//update bar graph
		    //parse response
		    var response = JSON.parse(req1.responseText);
			var row1 = document.getElementById("tbar1"); 
			response.one = response.one + "%";
			console.log(response.one);
	        row1.style.width = response.one;
	        var row2 = document.getElementById("tbar2"); 
	        row2.style.width = response.two + "%";
	        var row3 = document.getElementById("tbar3"); 
	        row3.style.width = response.three + "%";
	        var row4 = document.getElementById("tbar4"); 
	        row4.style.width = response.four + "%";
	        var row5 = document.getElementById("tbar5"); 
	        row5.style.width = response.five + "%";
	    } 
	    else 
	    {
	        console.log("Error in network request: " + req1.statusText);
	    }
	});

	//send json string request
	req1.send(JSON.stringify(textStarRating));
	//prevent default refresh of page with submission of post
	event.preventDefault();
}

function lectureBar(num)
{
	var req1 = new XMLHttpRequest();

	//make data inputted object
	var lectureStarRating = {};

	//send the number they voted for as id
	var idOfPage = document.getElementById("idOfPage");
	lectureStarRating.courseId = idOfPage.getAttribute("value");
	lectureStarRating.rating = num;
	//open post request
	req1.open('POST', '/lectures/rate', true);
	//set header to json
	req1.setRequestHeader('Content-Type', 'application/json');
	//asynchronous request that starts after load
	req1.addEventListener('load',function(){
	    if(req1.status >= 200 && req1.status < 400)
	    {
			//update bar graph
		    //parse response
		    var response = JSON.parse(req1.responseText);
		    var row1 = document.getElementById("lbar1"); 
	        row1.style.width = response.one + "%";
	        var row2 = document.getElementById("lbar2"); 
	        row2.style.width = response.two + "%";
	        var row3 = document.getElementById("lbar3"); 
	        row3.style.width = response.three + "%";
	        var row4 = document.getElementById("lbar4"); 
	        row4.style.width = response.four + "%";
	        var row5 = document.getElementById("lbar5"); 
	        row5.style.width = response.five + "%";
	    } 
	    else 
	    {
	        console.log("Error in network request: " + req1.statusText);
	    }
	});

	//send json string request
	req1.send(JSON.stringify(lectureStarRating));
	//prevent default refresh of page with submission of post
	event.preventDefault();
}

function sendBookUpVote(id){
	var req1 = new XMLHttpRequest();
console.log("made it to function");
	//make data inputted object
	var bookAndPageInfo = {};

	//send the number they voted for as id
	bookAndPageInfo.bookId = id;
	var idForPage = document.getElementById("idOfPage");
	bookAndPageInfo.courseId = idForPage.getAttribute("value");

	//open post request
	req1.open('POST', '/books/upvote', true);

	//set header to json
	req1.setRequestHeader('Content-Type', 'application/json');
	//asynchronous request that starts after load
	req1.addEventListener('load',function(){
		console.log("got some response");
	    if(req1.status >= 200 && req1.status < 400)
	    {
	    	console.log("got a good response");
			//reload page with new ranking
			window.location.reload();
	    } 
	    else 
	    {
	        console.log("Error in network request: " + req1.statusText);
	    }
	});

	//send json string request
	req1.send(JSON.stringify(bookAndPageInfo));
}

function sendBookDownVote(id){
	var req1 = new XMLHttpRequest();

	//make data inputted object
	var bookAndPageInfo = {};

	//send the number they voted for as id
	bookAndPageInfo.bookId = id;
	var idForPage = document.getElementById("idOfPage");
	bookAndPageInfo.courseId = idForPage.getAttribute("value");

	//open post request
	req1.open('POST', '/books/downvote', true);
	
	//set header to json
	req1.setRequestHeader('Content-Type', 'application/json');
	//asynchronous request that starts after load
	req1.addEventListener('load',function(){
	    if(req1.status >= 200 && req1.status < 400)
	    {
			//reload page with new ranking
			window.location.reload();
	    } 
	    else 
	    {
	        console.log("Error in network request: " + req1.statusText);
	    }
	});

	//send json string request
	req1.send(JSON.stringify(bookAndPageInfo));
}

function sendOnlineUpVote(id){
	var req1 = new XMLHttpRequest();

	//make data inputted object
	var onlineAndPageInfo = {};

	//send the number they voted for as id
	onlineAndPageInfo.videoId = id;
	var idForPage = document.getElementById("idOfPage");
	bookAndPageInfo.courseId = idForPage.getAttribute("value");

	//open post request
	req1.open('POST', '/videos/upvote', true);

	//set header to json
	req1.setRequestHeader('Content-Type', 'application/json');
	//asynchronous request that starts after load
	req1.addEventListener('load',function(){
	    if(req1.status >= 200 && req1.status < 400)
	    {
			//reload page with new ranking
			window.location.reload();
	    } 
	    else 
	    {
	        console.log("Error in network request: " + req1.statusText);
	    }
	});

	//send json string request
	req1.send(JSON.stringify(onlineUpVote));
}

function sendOnlineDownVote(id){
	var req1 = new XMLHttpRequest();

	//make data inputted object
	var onlineAndPageInfo = {};

	//send the number they voted for as id
	onlineAndPageInfo.videoId = id;
	var idForPage = document.getElementById("idOfPage");
	bookAndPageInfo.courseId = idForPage.getAttribute("value");

	//open post request
	req1.open('POST', '/videos/downvote', true);
	
	//set header to json
	req1.setRequestHeader('Content-Type', 'application/json');
	//asynchronous request that starts after load
	req1.addEventListener('load',function(){
	    if(req1.status >= 200 && req1.status < 400)
	    {
			//reload page with new ranking
			window.location.reload();
	    } 
	    else 
	    {
	        console.log("Error in network request: " + req1.statusText);
	    }
	});

	//send json string request
	req1.send(JSON.stringify(onlineAndPageInfo));
}
