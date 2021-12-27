const numOfQues = 3;
let score = 0;
let showScore = document.createTextNode(score)
let nextBtnClick = 0;
let showQuestionTwo = document.getElementById('q-2').style.display = 'none'
let showQuestionThree = document.getElementById('q-3').style.display = 'none'
let showFinalScore = document.getElementById('final-score').style.display = 'none'
let startOver = document.getElementById('start-over').style.display = 'none'
const nextButton = document.getElementById('next-button')
const startButton = document.getElementById('start-over')
nextButton.addEventListener('click',nextFunc)
startButton.addEventListener('click',startFunc)

function startFunc()
{
    window.location.reload()
}

    console.log(score)

function nextFunc()
  {
    document.getElementById('q-1').style.display = 'block'
    nextBtnClick += 1
    
    if(nextBtnClick === 1)
      {
        document.getElementById('q-1').style.display = 'none'  
        document.getElementById('q-2').style.display = 'block'
      }

      

    
    if(nextBtnClick === 2)
      {
        document.getElementById('q-1').style.display = 'none';    
        document.getElementById('q-2').style.display = 'none'; 
        document.getElementById('q-3').style.display = 'block';
      }

      

    if(nextBtnClick === 3)
      {
        document.getElementById('q-1').style.display = 'none';    
        document.getElementById('q-2').style.display = 'none'; 
        document.getElementById('q-3').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('final-score').style.display = 'block';


      }
      


      if(document.getElementById('correct-1').checked)
      {
          score += 1
      }

      if(document.getElementById('correct-2').checked)
        {
          score +=1
          score -=1
        }

      if(document.getElementById('correct-3').checked)
        {
            score += 1
            score -= 1
        }
        document.getElementById('start-over').style.display = 'block'

      
        let points = document.querySelector(".points").innerText = score 
        let maxPoints = document.querySelector(".max-points").innerText = "3"   
  }

  






