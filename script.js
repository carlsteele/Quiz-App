const numOfQues = 3;
let score = 0;
let showScore = document.createTextNode(score)
let currentQuestion = 1;
const nextButton = document.getElementById('next-button')
const startOverButton = document.getElementById('start-over')
nextButton.addEventListener('click',nextFunc)
startOverButton.addEventListener('click',startFunc)
document.querySelector(`#q-${currentQuestion}`).style.display = 'block'
document.querySelector(`#q-${currentQuestion + 1}`).style.display = 'none'
document.getElementById('final-score').style.display = 'none'
startOverButton.style.display = 'none'

function startFunc()
{
    window.location.reload()
}


function nextFunc()
  {
    
    const correctAnswers = [document.getElementById('cones-of-dun').checked, 
          document.getElementById('jjs-diner').checked,
          document.getElementById('tammy').checked];

        if(currentQuestion === numOfQues)
        {
          
          document.querySelector(`#q-${currentQuestion}`).style.display = 'none' 
          document.getElementById('next-button').style.display = 'none'
          document.getElementById('final-score').style.display = 'block'
          startOverButton.style.display = 'block'
          for(let i = 0; i < correctAnswers.length; i++)
          {
            if(correctAnswers[i] === true)
            {
              score++
              
            }
          }
          // console.log(score)
        }
              

   
          
        else
        {
          document.querySelector(`#q-${currentQuestion}`).style.display = 'none'  
          document.querySelector(`#q-${currentQuestion + 1}`).style.display = 'block'
          currentQuestion++         

        }  

        let points = document.querySelector(".points").innerText = score 
        let maxPoints = document.querySelector(".max-points").innerText = "3" 
        console.log(score)
      }


      
        





