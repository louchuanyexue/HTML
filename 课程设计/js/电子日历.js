var today = new Date();
var year = today.getFullYear();
var month=today.getMonth() +1 ;
var day = today.getDate();
var allday = 0;
function count (){
	 if (month !=2){
		 if((month==4)||(month==6)||(month==9)||(month==11)){
			 allday = 30;
		 }else{
			 allday = 31;
		 }
	 }else{
		 if(((year%4)==0&&(year%100)!=0)||(year%400)==0){
			 allday= 29;
		 }else{
			 allday= 28;
		 }
	 }
}
function showMonth(){
	var year_month =  year + "年"+month +"月";
	document.getElementById("month").innerHTML = year_month;
}
function showDate(){
	showMonth();
	count();
	
	var firstdate =new Date(year,month-1,1);
	var xiqi = firstdate.getDay();
	var daterow =document.getElementById("day");
	daterow.innerHTML ="";
	if(xiqi != 0){
		for (var i = 0;i < xiqi; i++ ){
			var dayElement = document.createElement("div");
			dayElement.className = "everyday";
			daterow.appendChild(dayElement);
		}
	}
	for (var j = 1;j<=allday;j++){
		var dayElement= document.createElement("div");
		dayElement.className = "everyday";
		dayElement.innerHTML = j +"";
		if (j == day){
			dayElement.style.color="red";
		}
		daterow.appendChild(dayElement);
	}
}
function lastMonth(){
	if (month>1){
		month-=1;
	}else{
		month=12;
		year -=1;
	}showDate();
}
function nextMonth(){
	if (month < 12){
		month +=1;
	}else{
		month=1;
		year+=1;
	}showDate();
}





function checkBox(name){
	var j=0;
	var checkbox = document.getElementsByClassName(name);
	for(var i=0;i<checkbox.length;i++){
		if(checkbox[i].check){
			j++;
			break;
		}
	}
	if(j==0)return false;
	return true;
}
function check(){
	var q4 = checkBox("q4");
	if(q4==false){
		alert("第4题起码要选择一个选项");
		return false;
	}
	var q5 = checkBox("q5");
	if(q5==false){
		alert("第5题起码要选择一个选项");
		return false;
	}
	return true;
}