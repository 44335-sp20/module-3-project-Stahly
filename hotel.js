function genRand()
{
  var rate = Math.floor((Math.random()*300)+100);
  return rate;
}

  function offerExpires(date)
{
  var newDate = date.setDate(date.getDate()+ 7);
  var day =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day2 = day [date.getDay()];
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
  var month2 = month [date.getMonth()];
  return "Offer expires next" + " " + day2 + "<br>" +"(" + date.getDate() + " " + month2 + " " + date.getFullYear () + ")";
}

document.getElementById("specialRate").innerHTML = genRand();

var date = new Date;


document.getElementById("offerEnds").innerHTML = offerExpires(date);

