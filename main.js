var string1= prompt("enter string one");
var i;
var count1 = 0;
for (i=0;i<=string1.length;i++){
	var a = string1.charAt(i);
	if (a=="a" || a=="A" || a=="e"|| a=="E"|| a=="i" || a=="I" || a=="o"|| a=="O" || a=="u" || a=="U"){
		count1++
	}
}
document.write("Number of vowel in string1 is "+count1+"<br>");

var string2 = prompt("enter string two");
var j;
var count2 = 0;
for (j=0;j<=string2.length;j++){
	var a = string2[j];
	if (a=="a" || a=="A" || a=="e"|| a=="E"|| a=="i" || a=="I" || a=="o"|| a=="O" || a=="u" || a=="U"){
		count2++
	}
}
document.write("Number of vowel in string2 is "+count2+"<br><br>");
 
if (count1>count2){
	document.write("string1 has more vowels than string2");
}
else {
	document.write("string2 has more vowels than string1");
}


// var string = prompt("enter string");
// const r=/[^aeiou]/gi;
// var vowels = string.match(r);
// console.log(vowels);