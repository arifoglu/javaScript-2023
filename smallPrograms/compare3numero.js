window.onload = function(){

   document.getElementById("myBtn").onclick= function(){

        let a;
        let b;
        let c;
        a =Number(document.getElementById("numero1").value);
        // console.log(a);
        b =Number(document.getElementById("numero2").value);
        // console.log(b);
        c =Number(document.getElementById("numero3").value);
        // console.log(c);
        console.log(typeof a); // string
        let resultat = document.getElementById("result");
       /// this function can write if you want but "" Number""" method more than efficace
       // function myfunction(){
       //            a =Number(a) ;
       //            b =Number(b) ;
       //            c =Number(c) ;
       //     return
       // };
       // myfunction();
       // console.log(typeof a); // number
        
           //comparison options//
    if(a > b && a > c && b > c)
    resultat.innerHTML = a + ">" + b + ">" + c ;
    else if(a > b && a > c && c > b)
    resultat.innerHTML = a + ">" + c + ">" + b ;
    else if(b > c && b > a && c > a)
    resultat.innerHTML = b + ">" + c + ">" + a ;
    else if(b > a && b > c && a > c)
    resultat.innerHTML = b + ">" + a + ">" + c ;
    else if(c > a && c > b && a > b)
    resultat.innerHTML = c + ">" + a + ">" + b ;
    else if(c > a && c > b && b > a)
    resultat.innerHTML = c + ">" + b + ">" + a ;
    else if(a == b && a < c )
    resultat.innerHTML = a + "=" + b + "<" + c ;
    else if(a == b && a > c )
    resultat.innerHTML = a + "=" + b + ">" + c ;
    else if(b == c && a > c )
    resultat.innerHTML = a + ">" + b + "=" + c ;
    else if(b == c && a < c )
    resultat.innerHTML = a + "<" + b + "=" + c ;
    else if(a == c && a > b )
    resultat.innerHTML = a + "=" + c + ">" + b ;
    else if(a == c && a < b )
    resultat.innerHTML = a + "=" + c + "<" + b ;
    else
    resultat.innerHTML = "EGAL"
    };
   /// 
    
   ////     option for clear input fields
   
   ////     option 1

   //  function clearFields(){
   //      document.getElementById("numero1").value = "";
   //      document.getElementById("numero2").value = "";
   //      document.getElementById("numero3").value = "";
   //  };
   //  clearFields();

   ////      option 2

   // let x = document.querySelectorAll("div#container > input");
   // console.log(x);
   // x.forEach(function(p){
   //  p.value = "";
   // });


   ////      option 2.1
   
   document.querySelectorAll("div#container > input").forEach((p)=>{ p.value = ""});
   ;

 }


