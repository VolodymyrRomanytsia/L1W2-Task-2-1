const button = document.querySelector('.button');
button.onclick = () => {
	let recursion = (number) => {
    	if (number > 0) {
    	const container = document.body.children[0];	
		const block = container.children[1];
		const ul = block.children[0];
		let li = document.createElement('li');
		let size = number * 10 +'px';
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