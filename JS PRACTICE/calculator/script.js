class Calculator{
<<<<<<< HEAD
    constructor(dataCurrentText, dataPreviousText){
      this.dataPreviousText = dataPreviousText;
      this.dataCurrentText = dataCurrentText;
    //   clear()
    }; 
    clear(){
        this.currentOperand='';
        this.previousOperand = '';
        this.operation = undefined;
      }
       
=======
  constructor(dataCurrentText, dataPreviousText){
    this.dataPreviousText = dataPreviousText;
    this.dataCurrentText = dataCurrentText;
    this.clear()
>>>>>>> cce03b056319dd7ad53eb6537a9378319c3e6e79
    
  }; 
  clear(){
      this.currentOperand= '';
      this.previousOperand = '';
      this.operation = '';
    }
     
  
  delete(){
     this.currentOperand =this.currentOperand.toString().slice(0, -1);
  }


  appendNumber(number){
  if(number === '.' && this.currentOperand.includes('.')) return
   this.currentOperand = this.currentOperand.toString() + number.toString();
 }


  chooseOperation(operation){
    if(this.currentOperand === '')return;
    if(this.previousOperand !== ''){
       this.compute()
    }
    this.operation = operation;
    this.previousOperand =this.currentOperand;
    this.currentOperand ='';
    
 
 }
      
  compute(){
    let computtation;
   const prev= parseFloat(this.previousOperand);
   const curr =parseFloat(this.currentOperand);
   if(isNaN(prev) || isNaN(curr)) return;
   switch(this.operation){
     case '+':
     computtation = prev + curr
     break;
     case '-':
     computtation = prev - curr
     break;
     case '*':
     computtation = prev * curr
     break;
     case '÷':
     computtation = prev / curr
     break;
     default:
       
     return;
   }
    this.currentOperand =computtation;
    this.operation = undefined;
    this.previousOperand = '';
  }
   

  displayUpdate(){
      
    this.dataCurrentText.innerText =  this.currentOperand;
    if(this.operation != null){
      this.dataPreviousText.innerText = `${this.previousOperand} ${this.operation}`;
     }
    }
   
}

const numberButton = document.querySelectorAll('[data-number]');
const operand = document.querySelectorAll('[data-operand]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equal]');
const dataCurrentText = document.querySelector('[data-current]');
const dataPreviousText = document.querySelector('[data-previous]');


const calculator = new Calculator(dataCurrentText, dataPreviousText);



numberButton.forEach(button => {
  button.addEventListener('click', ()=>{
    calculator.appendNumber(button.innerText);
    calculator.displayUpdate();
  })
})

operand.forEach(button => {
  button.addEventListener('click', ()=>{
    calculator.chooseOperation(button.innerText);
      calculator.compute()
    calculator.displayUpdate();
  })
})


clearBtn.addEventListener('click', ()=>{
      calculator.clear();
calculator.displayUpdate();

                        })


equalBtn.addEventListener('click', ()=>{
calculator.compute()
calculator.displayUpdate();

                        })

deleteBtn.addEventListener('click', ()=>{
calculator.delete()
calculator.displayUpdate();

                        })

     








