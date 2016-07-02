function btnChngDate(id){
    // Start for Date Settings
    var month =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var yearfind = ["2016", '2017', '2018'];
    var cal = new Date();
    var yr = cal.getFullYear();
    var mon = cal.getMonth();
    var day = cal.getDate();
    
    // Increase Month from above Array
    if(id == '1'){
        document.getElementById("4").value = month[(month.indexOf(document.getElementById('4').value)+1) %12];
    }
    
    // Increase Day as Month 31 30 29 of a year
    if(id == '2'){
        var tmp = (month.indexOf(document.getElementById('4').value)+1);
        if(tmp == 1 || tmp == 3 || tmp == 5 || tmp == 7 || tmp == 8 || tmp == 10 || tmp == 12 )
            document.getElementById("5").value = ( parseInt(document.getElementById('5').value)%31) +1;
        else if (tmp == 2) document.getElementById("5").value = ( parseInt(document.getElementById('5').value)%29) +1;
        else document.getElementById("5").value = ( parseInt(document.getElementById('5').value)%30) +1;
    }
    
    // Increase Year 2016 2017 2018
    if(id == '3'){
        document.getElementById("6").value = yearfind[(yearfind.indexOf(document.getElementById('6').value)+1) %3];
    }
    
    // decrease Month from above Array
    if(id == '7'){
        var minusval = (month.indexOf(document.getElementById('4').value)-1);
        if(minusval == -1) document.getElementById("4").value = month[11];
        else document.getElementById("4").value = month[minusval];
    }
    
    // Decrease Day as Month 31 30 29 of a year
    if(id == '8'){
        var tmp = (month.indexOf(document.getElementById('4').value)+1);
        var minusval2 = parseInt(document.getElementById('5').value)-1;
        
        if(tmp == 1 || tmp == 3 || tmp == 5 || tmp == 7 || tmp == 8 || tmp == 10 || tmp == 12 ){
            
            if(minusval2 == -1 || minusval2 == 0) document.getElementById("5").value = 31;
            else document.getElementById("5").value = minusval2;
        }
        else if (tmp == 2){
            if(minusval2 == -1 || minusval2 == 0) document.getElementById("5").value = 29;
            else document.getElementById("5").value = minusval2;
        }
        else {
            if(minusval2 == -1 || minusval2 == 0) document.getElementById("5").value = 30;
            else document.getElementById("5").value = minusval2;
        }
    }
    // decrease Year 2016 2017 2018
    if(id == '9'){
        var shoyear = (yearfind.indexOf(document.getElementById('6').value)-1);
        if(shoyear == -1) document.getElementById("6").value = yearfind['2'];
        else document.getElementById("6").value = yearfind[shoyear];
    }
}
function btnChngTime(id){
    // Start for Time Fixed for schedule 
    var hourcng = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    var mincng = ['00','05','10','15','20','25','30','35','40','45','50','55'];
    // Hour set
    if(id == '10'){
        document.getElementById("13").value = hourcng[(hourcng.indexOf(document.getElementById('13').value)+1) %12];
    }
    // Minute set
    if(id == '11'){
        document.getElementById("14").value = mincng[(mincng.indexOf(document.getElementById('14').value)+1) %12];
    }
    
    // AM PM SET
    if(id == '12' || id == 18){
        var getampm = document.getElementById('15').value;
        if(getampm == 'AM') document.getElementById("15").value = 'PM';
        else document.getElementById("15").value = 'AM';
    }
    // Decrease Hour 
    if(id == '16'){
        var minusvalTime1 = (hourcng.indexOf(document.getElementById('13').value)-1);
        if(minusvalTime1 == -1) document.getElementById("13").value = hourcng[11];
        else document.getElementById("13").value = hourcng[minusvalTime1];
    }
    // Decrease Time Minute 
    if(id == '17'){
        var minusvalTime2 = (mincng.indexOf(document.getElementById('14').value)-1);
        if(minusvalTime2 == -1) document.getElementById("14").value = mincng[11];
        else document.getElementById("14").value = mincng[minusvalTime2];
    }
}
function saveTimeDate(){
    var sal = document.getElementById("6").value;
    var din = document.getElementById("5").value;
    var mas = document.getElementById("4").value;
    var ghonta = document.getElementById("13").value;
    var minit = document.getElementById("14").value;
    var sokal_bikal = document.getElementById("15").value;
    document.getElementById("inputPanel").value = din +' '+mas +' '+sal +' : '+ghonta +'-'+minit +' '+ sokal_bikal;
    document.getElementById("showdate").remove();
} 

$(document).ready(function(){
   $("#inputPanel").click(function(){
        //alert('http://localhost:8080/hrsoftbdmsms/ASSET/Design/css/rzDatePick.css');
            var datepicker = "<table id='tabledesign'>\
            <colgroup>\
                <col style='width: 33%' />\
                <col style='width: 33%' />\
                <col style='width: 33%' />\
              </colgroup>\
            <tr><td><input type='button' id='1' style='width: 100%' onClick=btnChngDate(this.id); value='+'></td>\
                <td><input type='button' id='2' style='width: 100%' onClick=btnChngDate(this.id); value='+'></td>\
                <td><input type='button' id='3' style='width: 100%' onClick=btnChngDate(this.id); value='+'></td>\
            </tr>\
            <tr><td><input type='text' id='4' style='width: 100%' value='Jun'></td>\
                <td><input type='text' id='5' style='width: 100%' value='30'></td>\
                <td><input type='text' id='6' style='width: 100%' value='2016'></td>\
            </tr>\
            <tr><td><input type='button' id='7' style='width: 100%' onClick=btnChngDate(this.id); value='-'></td>\
                <td><input type='button' id='8' style='width: 100%' onClick=btnChngDate(this.id); value='-'></td>\
                <td><input type='button' id='9' style='width: 100%' onClick=btnChngDate(this.id); value='-'></td>\
            </tr>\
            <tr style='background-color : #3aa752; color: white;'><td colspan='3'><center>SET Time</center></td>\
            </tr>\
            <tr><td><input type='button' id='10' style='width: 100%' onClick=btnChngTime(this.id); value='+'></td>\
                <td><input type='button' id='11' style='width: 100%' onClick=btnChngTime(this.id); value='+'></td>\
                <td><input type='button' id='12' style='width: 100%' onClick=btnChngTime(this.id); value='+'></td>\
            </tr>\
            <tr><td><input type='text' id='13' style='width: 100%' value='02'></td>\
                <td><input type='text' id='14' style='width: 100%' value='00'></td>\
                <td><input type='text' id='15' style='width: 100%' value='AM'></td>\
            </tr>\
            <tr><td><input type='button' id='16' style='width: 100%' onClick=btnChngTime(this.id); value='-'></td>\
                <td><input type='button' id='17' style='width: 100%' onClick=btnChngTime(this.id); value='-'></td>\
                <td><input type='button' id='18' style='width: 100%' onClick=btnChngTime(this.id); value='-'></td>\
            </tr>\
                <tr onClick=saveTimeDate(); style='background-color : green; color: white;'><td colspan='3'><center>Done</center></td>\
            </tr>\
            </table>"

        $("#showdate").html(datepicker );
        $("#showdate tr, #showdate tr td").css({'border': '1px solid gray'});
        $("#showdate").css({'color': 'black'});
        
    });    
});