function login() {
    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("password").value;
    var info = document.getElementById('info');
    var loginForm = document.getElementById('loginform');

    // Check if both username and password are empty
    if (!userName && !passWord) {
        alert("Please enter username and password");
        return; // Exit the function early
    }

    // Check for correct credentials
    if (userName === "Chirantha" && passWord === "2007103186") {
          loginForm.style.display = 'none';
          info.style.display = 'block';
        } else {
        alert("Incorrect username or password");
    }
}


function calculate(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var auctionAmount = document.getElementById("amount").value;
    var month = document.getElementById("month").value;


// Check if both username and password are empty
    if (!name || !number  || !auctionAmount || !month) {
        alert("error! please enter details");
        return; // Exit the function early
    }else{

        
            var div1 = document.getElementById('div1')
            var div2 = document.getElementById('div2')
            var div3 = document.getElementById('div3')
            var div4 = document.getElementById('div4')
            var div5 = document.getElementById('div5')
            var div6 = document.getElementById('div6')
            var div7 = document.getElementById('div7')
            var div8 = document.getElementById('div8')
            var div9 = document.getElementById('div9')
            var div10 = document.getElementById('div10')
            var div11 = document.getElementById('div11')

                                            if(name == "niroshan" || name =="Niroshan"){
                                                  div1.style.display = 'block';
                                            }else{

                                                  if(name == "janani" || name =="Janani"){
                                                         div2.style.display = 'block';
                                                  }else{

                                                        if(name == "kalum" || name =="Kalum"){
                                                               div3.style.display = 'block';
                                                        }else{

                                                              if(name == "mahesh" || name =="Mahesh"){
                                                                    div4.style.display = 'block';
                                                              }else{

                                                                    if(name == "nalin" || name =="Nalin"){
                                                                          div5.style.display = 'block';
                                                                    }else{
                                               
                                                                          if(name == "swarna" || name =="Swarna"){
                                                                                div6.style.display = 'block';
                                                                          }else{

                                                                                if(name == "pathum" || name =="Pathum"){
                                                                                      div7.style.display = 'block';
                                                                                }else{

                                                                                      if(name == "renuka" || name =="Renuka"){
                                                                                            div8.style.display = 'block';
                                                                                      }else{

                                                                                            if(name == "rohana" || name =="Rohana"){
                                                                                                  div9.style.display = 'block';
                                                                                            }else{

                                                                                                if(name == "sugath" || name =="Sugath"){
                                                                                                      div10.style.display = 'block';
                                                                                                }else{

                                                                                                      if(name == "samantha" || name =="Samantha"){
                                                                                                            div11.style.display = 'block';
                                                                                                      }
                                                                                                }
                                                                                            }
                                                                                      }  
                                                                                } 
                                                                          } 
                                                                    }
                                                             }
                                                        }
                                                  }
                                            }



        var output = document.getElementById("output");
        output.style.display ='block';
        info.style.display = 'none';

        var a = 230000; //total amount
        var b = document.getElementById("amount").value; // auction amount
        var c = 13000; // commice
        var d = 23; // number of members
        var e = (b-c); 
        var f = (a-b); // total payment to customer
        var g = (e/d); //
        var h = 10000; //common premium amount
        var i = (h-g); // premium amount 
        var k = ((h-g)+1) // ne premium amount
        var integerK = parseInt(k);
        var j = (h-i); //inrest
        var integerJ = parseInt(j);




        var person = document.getElementById("name").value;
        var Number = document.getElementById("number").value
        var personName =  document.getElementById("title");
        personName.innerHTML = person + " > " + Number ;

        var monthUpdate = document.getElementById("MONTH");
        monthUpdate.innerHTML = month;


        var aAmount = document.getElementById("amount").value;
        var auctionMoney = document.getElementById("Amoney");
        auctionMoney.innerHTML = "RS.  " + aAmount + " .00";

        var interestAmount = document.getElementById("interest");
        interestAmount.innerHTML = "RS.  " + integerJ + " .00";


        var premiumAmount = document.getElementById("Famount");
        premiumAmount.innerHTML = "RS.  " + integerK + " .00";

        var totalMoney = document.getElementById("money");
        totalMoney.innerHTML = "RS.  " + a + " .00";
    
    }
   
    



}

function over(){
    window.location.reload();
}

function back1(){
    window.location.reload();
   

}


