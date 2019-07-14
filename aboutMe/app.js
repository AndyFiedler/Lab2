'use strict'

var correctCount = 0;

function quiz() {



//Question 1
var answer1 = prompt('Fiedler prefers his first name pronounced Andy. True/False, (T/F)');
var sanitizedAnswer1 = answer1.toUpperCase().trim();
if (sanitizedAnswer1 === 'TRUE'|| sanitizedAnswer1 ==='T') {
    alert('Yes. Dont get cocky, kid. Only the first question.');
    correctCount+= 10;
}
        else if (sanitizedAnswer1 === 'F' || sanitizedAnswer1 ==='FALSE') {
        
         alert('What was that!? Maybe just give up now.');
        }
    //Question 2
    var answer2 = prompt('Fiedler is an easily pronounced name. True/False (T/F)');
    var sanitizedAnswer2 = answer2.toUpperCase().trim()
    if (sanitizedAnswer2 === 'TRUE'|| sanitizedAnswer2 ==='T') {
        alert('Yes. Whatever. Good job.');
        correctCount+= 10;
    }
        else if (sanitizedAnswer2 === 'F' || sanitizedAnswer2 === "FALSE") {
        
            alert('Yeahhhhh, no.');
        }

        //Question 3
        var answer3 = prompt('Fiedler is not a huge fan of his doggo. (T/F)');
        var sanitizedAnswer3 = answer3.toUpperCase().trim()
            if (sanitizedAnswer3 === 'TRUE'|| sanitizedAnswer3 ==='T') {
                alert('Yeah cuz he a thieving connieving monster');
                correctCount+= 10;
            }
                else if (sanitizedAnswer3 === 'F' || sanitizedAnswer3 === "FALSE") {
                    alert('Yikes.');
                }

            //Question 4
            var answer4 = prompt('Fiedler is a people person. (T/F)');
            var sanitizedAnswer4 = answer4.toUpperCase().trim()
                if (sanitizedAnswer4 === 'FALSE'|| sanitizedAnswer4 ==='F') {
                    alert('That is really special.');
                    correctCount+= 10;
                }
                    else if (sanitizedAnswer4 === 'T' || sanitizedAnswer4 === "TRUE") {
                    
                        alert('No, not so much');
                }

            //Question 5
            var answer5 = prompt('Fiedler wants an inside rainforest one day. (T/F)');
            var sanitizedAnswer5 = answer5.toUpperCase().trim()
                if (sanitizedAnswer5 === 'TRUE'|| sanitizedAnswer5 ==='T') {
                    alert('Neat.');
                    correctCount+= 10;
                }
                    else if (sanitizedAnswer5 === 'F' || sanitizedAnswer5 === "FALSE") {
                        alert('Nah. Pay attention next time.');
                    }

            //Question 6
            var answer6 = prompt('Fiedler loves all the Star Wars films except Episode I. (T/F)');
            var sanitizedAnswer6 = answer6.toUpperCase().trim()
                if (sanitizedAnswer6 === 'TRUE'|| sanitizedAnswer6 ==='T') {
                    alert('You got it, bud.');
                    correctCount+= 10;
                }
                    else if (sanitizedAnswer6 === 'F' || sanitizedAnswer6 === "FALSE") {
                    
                        alert('Not even close');
                }

document.getElementById("score").textContent="Your score is " + correctCount + " points";

}    

document.getElementById("quiz").onclick=quiz;
