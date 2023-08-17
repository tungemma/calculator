//variables
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
const calculator = {
    firstOperand: null,
    operator: null,
    nextOperand: null,
    waitingForNextOperand: false,
    answer: false
};

const buttonsArray = Array.from(buttons);
buttonsArray.forEach((button) => {
    button.addEventListener('click', (e) => {
        let target = e.target;
        const num = target.textContent;
        if (target.matches('button')) {

          
            // handle input for numbers

            if (button.classList.contains('num')) {
                if ((screen.value == 0 &&!screen.value.includes('.'))|| calculator.answer == true) {

                    screen.value = num;
                    if(calculator.answer){
                        calculator.answer =false;
                    }
                }
                    else if (screen.value=='+'){
                        calculator.operator='+';
                        screen.value = num;

                    }
                    else if (screen.value=='-'){
                        calculator.operator='-';
                        screen.value = num;
                        
                    }
                    else if (screen.value=='*'){
                        calculator.operator='*';
                        screen.value = num;
                        
                    }
                    else if (screen.value=='/'){
                        calculator.operator='/';
                        screen.value = num;
                        
                    }

                else {
                    screen.value += num;
                }
            }

            // handle input decimal

            if (button.classList.contains('decimal')) {

                if (screen.value.includes('.') ||calculator.answer==true) {
                    return;
                }
                // else if (calculator.firstOperand!=null){
                //     screen.value += num;
                // }
                else {
                    if (screen.value == '00') {
                        screen.value = 0 + num
                    }
                    else { screen.value += num; }
                }
            }






// handle clear all
if (button.id==='clearAll') {
    screen.value=0

    
        calculator.firstOperand= null;
        calculator.operator= null;
        calculator.nextOperand= null;
        calculator.waitingForNextOperand= false;
        calculator.answer= false;

}
// handle Delete
if (button.id==='delete') {
    if(isNaN(screen.value)||calculator.answer) {
         screen.value=0
    }
   else {
   screen.value = screen.value.slice(0,-1)
    
   }
}
// handle percentages
if (button.id==='percent') {
    screen.value=screen.value/100;
    calculator.answer=true;
}



// handle operator 

if(button.classList.contains('operator')){

// alert('The Operator ' + num +' has been clicked');
    if (screen.value==''){
        screen.value = 'Error'
    }
  else if(calculator.answer==true){
    calculator.firstOperand=screen.value;
    screen.value=num;
    calculator.answer=false;
  }
    else {
        calculator.firstOperand=screen.value;
        screen.value = num;
        calculator.waitingForNextOperand=true;
       
    }



}

// handling Equality

if(button.id=='equal'){
    calculator.nextOperand= screen.value;
    let result = eval(calculator.firstOperand+calculator.operator+calculator.nextOperand);
    screen.value = result;
    calculator.answer=true
}







        }


    })


})