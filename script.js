function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var anoR = document.getElementById  ('txtano')
   let res = document.getElementById ('resultado')
   
   if (anoR.value == 0 || anoR > ano) {
       alert (`[erro] os datos informados não são compatíveis!`) //verificação de dados
   }
   else{
       var opsex = document.getElementsByName('opsex') 
       var idade = ano -  Number (anoR.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute ('id', 'foto')

       if (opsex[0].checked){
        genero = "homem"

         if (idade > 0 && idade <= 12){
          //criança
          img.src = 'homem-bebe.png'
          
          
        }
        else if ( idade <= 21){
          //jovem
          img.src = 'homem-jovem.png'
        }
        else if (idade < 50){
          //adulto
          img.src = 'homem-adulto.png'
        }
        else  {
          //idoso
          img.src = 'homem-idoso.png'
       }
       
       }
       else if (opsex[1].checked){
         genero = "mulher"
        
         if (idade > 0 && idade <= 12){
          //criança
          img.src = 'mulher-bebe.png'
          
        }
        else if ( idade <= 21){
          //jovem
          img.src = 'mulher-jovem.png'
        }
        else if (idade < 50){
          //adulto
          img.src = 'mulher-adulta.png'
        }
        else {
          //idoso
          img.src = 'mulher-idosa.png'
        
       
        } 
        }

       
       res.innerHTML = `você é um ${genero} de ${idade} anos` 
       res.appendChild(img)

   

 


  
  
}



}