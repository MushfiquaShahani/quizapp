function check(){
    var score=0


    
    var right_answer_1 = document.getElementById('ques1.3')
    var ques1_2 = document.getElementById('ques1.1')
    var ques1_3 =document.getElementById('ques1.2')
    var ques1_4 =document.getElementById('ques1.4')

    if( right_answer_1.checked == true) {
        score ++
        alert('question 1 is true')
    }
      else{
          alert('question 1 is false')
      }








      var right_answer_2 = document.getElementById('ques2.1')
      var ques2_2 = document.getElementById('ques2.3')
      var ques2_3 =document.getElementById('ques2.2')
      var ques2_4 =document.getElementById('ques2.4')
  
      if( right_answer_2.checked == true) {
          score ++
          alert('question 2 is true')
      }
        else{
            alert('question 2 is false')
        }
  

        





        var right_answer_3 = document.getElementById('ques3.3')
        var ques3_2 = document.getElementById('ques3.1')
        var ques3_3 =document.getElementById('ques3.2')
        var ques3_4 =document.getElementById('ques3.4')
    
        if( right_answer_3.checked == true) {
            score ++
            alert('question 3 is true')
        }
          else{
              alert('question 3 is false')
          }
    

          




          var right_answer_4 = document.getElementById('ques4.3')
          var ques4_2 = document.getElementById('ques4.1')
          var ques4_3 =document.getElementById('ques4.2')
          var ques4_4 =document.getElementById('ques4.4')
      
          if( right_answer_4.checked == true) {
              score ++
              alert('question 4 is true')
          }
            else{
                alert('question 4 is false')
            }
      

            






            var right_answer_5 = document.getElementById('ques5.3')
            var ques5_2 = document.getElementById('ques5.1')
            var ques5_3 =document.getElementById('ques5.2')
            var ques5_4 =document.getElementById('ques5.4')
        
            if( right_answer_5.checked == true) {
                score ++
                alert('question 5 is true')
            }
              else{
                  alert('question 5 is false')
              }
        

     alert("your score is " + score++ + "/5")

}
