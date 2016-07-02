# DatePicker-using-JavaScript_JQuery-

                       1. <!-- Type This in html file Three Line for Pick Date  -->
                        
                        Pick The Date: <br>
                        <input id="inputPanel" type="text">
                        <div id="showdate"></div>
                        
                        
                       2.<!-- Change here in .js file for getting desire output of date and time formate  -->
                        
                        function saveTimeDate(){
                            var sal = document.getElementById("6").value;
                            var din = document.getElementById("5").value;
                            var mas = document.getElementById("4").value;
                            var ghonta = document.getElementById("13").value;
                            var minit = document.getElementById("14").value;
                            var sokal_bikal = document.getElementById("15").value;
                            
                            // This line (below) will rovide you the desire output
                            document.getElementById("inputPanel").value = din +' '+mas +' '+sal +' : '+ghonta +'-'+minit +' '+ sokal_bikal;
                            document.getElementById("showdate").remove();
                        } 
                       
                       3. AND the Last is, include the rzDatePicker.js file in your html file.
