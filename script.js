const actions = document.querySelector('.actions');
const ans = document.querySelector('.display');
console.log(actions);
console.log(ans);
let expression = '';
let a = 0;
actions.addEventListener('click', (e) =>{
    console.log(e.target);
    const value = e.target.dataset['value'];
    if(value !== undefined) {
        // I'm good to go.
        if(value == 'ce') {
            expression = '';
            ans.value = 0;
            return true;
        }
        else if(value == 'x^2'){
            expression =square();
        }
        
        else if(value == 'radic'){
            expression = Math.sqrt(expression);
        }
        else if(value == 'log'){
            expression = Math.log(expression);
        }
        else if(value == 'sin'){
            expression = Math.sin(expression);
        }
        else if(value == 'cos'){
            expression = Math.cos(expression);
        }
        else if(value == 'tan'){
            expression = Math.tan(expression);
        }

        else if(value == '=') {
            const answer = eval(expression);
            expression = answer;
            
        } else {
            expression += value;
        }

        if(expression == undefined) {
            expression = '';
            ans.value = 0;
        } else {
            ans.value = expression;
        }
        // expression += value;


    }


});
const square =()=> {
    return eval(expression*expression);}