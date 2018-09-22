function color(loc,value) {
	var star_icon = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];
    var star_list = ['0.png','0.5.png','1.png','1.5.png','2.png','2.5.png','3.png','3.5.png','4.png','4.5.png','5.png'];
    var dif = [];
    var i;
    var j;
    var min = 100;
    var index;
 
    for(i = 0;i < 11;i++) {
      dif.push(Math.abs(value - star_icon[i]))
    }
    for(j = 0;j < 11;j++) {
      if(dif[j] < min) {
      	index = j;
      	min = dif[j];
      }
    }
    star_img = "img/" + star_list[index]
    value = star_icon[index]

    if(value == '5') {
      loc.style.color = 'gold'; 
      document.getElementById("starimg").src=star_img;
    }
    else if(value == '4.5') {
      loc.style.color = 'lime';
      document.getElementById("starimg").src=star_img;
    }
    else if(value == '4') {
      loc.style.color = 'green';
      document.getElementById("starimg").src=star_img;
    }
    else if(value == '3.5') {
      loc.style.color = 'brown';
      document.getElementById("starimg").src=star_img;
    }
    else if(value == '3') {
      loc.style.color = 'pink';
      document.getElementById("starimg").src=star_img;
    }
    else if(value == '2.5') {
      loc.style.color = 'red';
      document.getElementById("starimg").src=star_img;
    }
    else if(value == '2') {
      loc.style.color = 'red';
      document.getElementById("starimg").src=star_img;
    }
    else if(value == '1.5') {
      loc.style.color = 'red';
      document.getElementById("starimg").src=star_img;
    }
    else if(value > '0.5' && value <= '1') {
      loc.style.color = 'red';
      document.getElementById("starimg").src=star_img;
    }
    else if(value <= '0.5' && value > '0') {
      loc.style.color = 'red';
      document.getElementById("starimg").src=star_img;
    }
    else {
      loc.style.color = 'black';
      document.getElementById("starimg").src=star_img;
    }

}