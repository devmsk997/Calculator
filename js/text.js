

/*function getHistory (){
	return document.getElementById("history-value").innerText;
}

function prinHistory(num){
return document.getElementById("history-value").innerText=num;
}

function getOutput(){
	return document.getElementById("output-value").innerText;
}
function PrintOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}
}


function getFormattedNumber(num){
	if(num=="_"){
		return ""; 
	}
	var n = Number(num)
	var	value = n.toLocaleString("en");
	return value;
}

function reversNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName('operator');

for(var i = 0; i<operator.length; i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			prinHistory("");
			PrintOutput("");
	}else if(this.id=="backspace"){
		var output = reversNumberFormat(getOutput()).toString();
		if(output){
			output = output.substr(0,output.length-1);
			PrintOutput(output);
		}
	}
	
	else{
		var output = getOutput();
		var history = getHistory();

		if(output=="" && history!=""){
			if(isNan(history[history.length-1])){
				History = history.substr(0,history.length-1)
			}
		}

		if(output!="" || history!==""){
			output = output== ? output:reversNumberFormat(output);
			History = history + output;
			if(this.id=="="){
				var result = eval(history);
				PrintOutput(result);
				prinHistory("");

			}
			else{
				history = history+this.id;
				prinHistory(history);
				PrintOutput("");
			}
		
		}
	

	}	

	})
}


var Number = document.getElementsByClassName("number");

for(var i = 0; i<number.length; i++){
	number[i].addEventListener('click',function(){
		var output = reversNumberFormat(getOutput());
		if(output!= -NaN){
			output = output+this.id;
			PrintOutput(output);

		}
	});
}*/


/*My Assiestent Do*/

function getHistory(){
	return document.getElementById("history-value").innerText;
}

function prinHistory(num){
	document.getElementById("history-value").innerText = num;
}

function getOutput(){
	return document.getElementById("output-value").innerText;
}

function PrintOutput(num){
	if(num == ""){
		document.getElementById("output-value").innerText = "";
	}else{
		document.getElementById("output-value").innerText = getFormattedNumber(num);
	}
}

function getFormattedNumber(num){
	if(num == ""){
		return "";
	}

	// 🔥 decimal থাকলে format করবো না
	if(num.toString().includes(".")){
		return num;
	}

	var n = Number(num);
	return n.toLocaleString("en");
}

function reversNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName('operator');

for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener('click', function(){

		if(this.id == "clear"){
			prinHistory("");
			PrintOutput("");
		}

		else if(this.id == "backspace"){
			var output = getOutput().toString();
			if(output){
				output = output.substr(0, output.length - 1);
				document.getElementById("output-value").innerText = output;
			}
		}

		else{
			var output = getOutput();
			var history = getHistory();

			if(output == "" && history != ""){
				if(isNaN(history[history.length - 1])){
					history = history.substr(0, history.length - 1);
				}
			}

			if(output != "" || history != ""){
				// 🔥 decimal থাকলে Number convert করবো না
				if(output.includes(".")){
					history = history + output;
				}else{
					output = (output == "") ? "" : reversNumberFormat(output);
					history = history + output;
				}

				if(this.id == "="){
					var result = eval(history);
					PrintOutput(result);
					prinHistory("");
				}
				else{
					history = history + this.id;
					prinHistory(history);
					PrintOutput("");
				}
			}
		}
	});
}

var number = document.getElementsByClassName("number");

for(var i = 0; i < number.length; i++){
	number[i].addEventListener('click', function(){

		var output = getOutput();

		// 🔥 DOT (.)
		if(this.id == "."){
			if(output.includes(".")){
				return;
			}
			output = output + ".";
			document.getElementById("output-value").innerText = output;
			return;
		}

		// 🔥 যদি decimal already থাকে
		if(output.includes(".")){
			output = output + this.id;
			document.getElementById("output-value").innerText = output;
			return;
		}

		// 🔥 normal number
		output = reversNumberFormat(output);

		if(!isNaN(output)){
			output = output + this.id;
			PrintOutput(output);
		}
	});
}