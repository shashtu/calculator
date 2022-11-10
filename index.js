const calculator=document.querySelector('.calculator')
const keys=calculator.querySelector('.calculator__keys')
const display=document.querySelector('.calculator__display')

keys.addEventListener ('click' , e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent =  key.textContent
    const displayedNum = display.textContent

    if(!action)
    {
        if(displayedNum== '0'){
            display.textContent=keyContent
        } else{
         calculator.dataset.secondvalue= keyContent   
         display.textContent= displayedNum+keyContent 
        }
      }
    
      else if( action=='add'||
          action=='subtract'||
          action=='multiply'||
          action=='divide'){
          calculator.dataset.firstvalue=displayedNum
           calculator.dataset.operator= action
         display.textContent=displayedNum+keyContent
          }
    
      else if(action==='decimal'){
        display.textContent=displayedNum + '.'
      }    
      else  if(action==='clear'){
       display.textContent= 0
       }
      else  if(action=== 'calculate') {
           const firstvalue = calculator.dataset.firstvalue
           const operator =calculator.dataset.operator
           const secondvalue= calculator.dataset.secondvalue
           display.textContent=  home (firstvalue,operator,secondvalue)
      }
}
})

 
 const home  = (n1 ,operator,n2)  =>{

    let result=''
  if(operator== 'add'){
    result= parseFloat(n1)+ parseFloat(n2)
  }
  if(operator== 'subtract')
  {
    return (n1)- (n2)
  }
  if(operator== 'multiply'){
    return  (n1)* (n2)
  }
  if(operator== 'divide'){
    return (n1)/(n2)
  }
  return result
}