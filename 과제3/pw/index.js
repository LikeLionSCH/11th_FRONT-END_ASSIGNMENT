function validatePassword(password) {
   if (password.length < 10) {
     alert("최소 10자 이상 입력");
     return false;
   }
 
   
   if (/\s/.test(password)) { 
     alert("공백불가");
     return false;
   }
 
   // 유효성 검사
   const patterns = [
     /\d/,          
     /[a-zA-Z]/,    
     /[!@#$%^&*]/  
   ];
 
   let count = 0;  
 
   for (const pattern of patterns) {
     if (pattern.test(password)) {
       count++;
     }
   }
 
   if (count < 2) {
     alert("비밀번호는 영문, 숫자, 특수문자 중 2개 이상의 조합이어야 합니다.");
     return false;
   }
 
   return true;
 }
 
 const password = prompt("비밀번호 입력:");
 if (validatePassword(password)) {
   alert("사용 가능한 비밀번호입니다.");
 } else {
   alert("사용 불가능한 비밀번호입니다.");
 }
 