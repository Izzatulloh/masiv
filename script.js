function checkExam(array1, array2) {
   let sum = 0;
   let a = 4;
   let b = 1;
   let c = 0;
   for(i=0 ; i<array1.length; i++ ){
      if(array1[i]===array2[i]){
         sum+=a;
      } else if (array2[i]==='') {
         sum+=c
      } else {
         sum-=b
      }   
   }if(sum<0){
      sum=0;
   }
   console.log(sum);
}

   checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])
   checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])
   checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])
   checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])
   