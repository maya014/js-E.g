function renderTime(){


	/*date...*/
	var mydate = new Date();
	var year =mydate.getYear();
	if(year <1000){
		year+=1900
	}
	var day =mydate.getDay();
	var month= mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray = new Array("ორშაბათი ","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა");
    var montharray = new Array("იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი ","დეკემბერი");
/*date end*/

/*დრო*/
var currentTime =new Date()
var h = currentTime.getHours();
var m = currentTime.getMinutes();
var s = currentTime.getSecends();

if(h == 24){
	h=0;
}else if(h > 12){
	h = h - 0;
}
if(h < 10){
  h = "0" + h;
}
if(m < 10){
	m = "0" + m;
}
if(s < 10){
	s = "0" + s;
}
var myClock = document.geElementById(clockDisplay);
myClock.textContent ="" + dayarray[day]+ ""+ daym+ ""montharray[month] + ""+ year +" |" + h +":"+ m +":"+s;
myClock.innerText = ""+ dayarray[day]+ ""+ daym+ ""montharray[month] + ""+ year +" |" + h +":"+ m +":"+s;

setTimeout("renderTime()", 1000);
}
renderTime();