function makeid(l) {
  // write your code here
	var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var res = "";
	for(let i = 0; i<l;i++){
		res += 
			Math.floor(
					char_list.random() * char_list.length;)
	}
	
}


// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
