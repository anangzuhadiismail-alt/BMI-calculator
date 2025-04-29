// membaca semua file di html dengan event dom dan fungsi annonym
document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("calculateform").addEventListener("click", function(){
       
       // variabel berat badan dengan mengambil dokumen html berdasarkan id Weight
       const Weight = parseFloat(document.getElementById("Weight").value);
       
         
       // variabel tinggi badan dengan mengambil dokumen html berdasarkan id height
       const height = parseFloat(document.getElementById("height").value)/100;
       
// logika if(percabangan) untuk menghasilkan input yang salah
       
      if(!Weight || !height || Weight<= 0 || height<=0){
           
         alert("input yang anda masukan salah");
         return;
         
       }
       
       // variabel BMI untuk menghitung BMI (body mass index) dengan method untuk membulatkan angka ke jumlah desimal dengan hasl tertentu dibelakang koma 
   const BMI = (Weight / (height * height)).toFixed(2);
       
       
       // mengubah teks dalam elemen BMIcategory dengan properti textcontent 
       document.getElementById("BMIcategory").textContent =  `BMI kamu : ${BMI}`;
       
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// deklarasi variabel category degan string kosong
let category = "";

      document.getElementById("valuetimbangan").style.color="white";

  if (BMI <= 18.5 ) {
      
   category = "mungkin anda terlalu kurus"; 
    
  } else if (BMI>= 18.5 && BMI <=24.9){
      
      category = " berat badan anda normal "; 

  } else if(BMI>= 25  && BMI <= 29.9) {
  
     category = " anda sudah gemuk nih "; 
  } else {
  
  category =" kamu obesitas "; 
  }
  
  document.getElementById("valuetimbangan").textContent = `Category : ${category}`;


//tambahan
   const minWeight = (18.5 * height * height).toFixed(2);
   const maxWeight = (27.9 * height * height).toFixed(2);
   document.getElementById("healthyWeight").textContent =
`Healthy Weight Range: ${minWeight} kg - ${maxWeight} kg`;

   });
   
   
   
});

