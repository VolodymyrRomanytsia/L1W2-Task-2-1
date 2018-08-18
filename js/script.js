
var button = document.querySelector('.button');
button.onclick = function() {
	var recursion = function(number) {
    	if (number > 0) {
    	var container = document.body.children[0];	
		var block = container.children[1];
		var ul = block.children[0];
		var li = document.createElement('li');
		var size = number * 10 +'px';
		li.style.fontSize = size;
		ul.appendChild(li);
		li.insertAdjacentHTML("afterBegin", number);
        console.log(number);
        return recursion(number - 1);
    	} else {
        return number;
	    }
	}
	recursion(10);

}