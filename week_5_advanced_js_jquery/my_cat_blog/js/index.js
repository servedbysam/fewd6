var html = '';

//but what is an "unexpected end of input"!? ^^

var posts = [
	{
		image: 'http://placekitten.com/g/200/200',
		title: 'More views!',
		snippet: 'My views are up from zero to three! Hello to my loyal fans! To celebrate, here are some more cute cat pictures!'
	}, {
		image: 'http://placekitten.com/g/200/200',
		title: 'Check out these cute cats!',
		snippet: 'Wow...thats all I can say. I was surfing /cats on reddit and came across the cutest cat pictures yet! Take a look!'
	}, {
		image: 'http://placepu.gs/200/200',
		title: 'Weird cats!',
		snippet: 'I saw these weird looking cats on the interwebs today. If you can tell me what breed they are, please do so in the comments!'
	}, {
		image: 'http://placekitten.com/g/200/200',
		title: 'Cuteness overload!',
		snippet: 'OMG people, are you ready for some heavy duty cuteness? I know I am. Check out these cats! I can\'t even handle this. Too cute!'
	}
];

function generatePost(posts) {
	var fragment = '';

	//make HTML

	fragment += '<div class="post clearfix">';
	fragment += '<img class="post-image float-left" src="' + posts.image + '">';
	fragment += '<div class="post-content float-left">';
	fragment += '<h3 class="post-title">' + posts.title + '</h3>';
	fragment += '<p>';
	fragment += posts.snippet;
	fragment += '</p>';
	fragment += '</div>';
	fragment += '</div>';

	return fragment;

	/*
	var ret = '<h3>title</h3>';
	ret += '<p>';
	ret += 'snippet';
	ret += 'image';
	}
	*/

for (var index = 0; index < posts.length; i++) {
	html += generatePost(posts[i]);
	}

document.getElementById('posts').innerHTML = html;

