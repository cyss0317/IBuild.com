const nums = [1,2,3,4,5,6,7,8,9,".",0,"c", "ENTER"];
const ops = ['add', 'sub', 'mult', 'div'];

const defaultState = {
    currentInput = "",
    total: 0,
    currentOp: null,
}

const generateMath = () =>{
    //dclare state
    let state = {...defaultState};

    //draw calculator
    const math=document.createElement("div");
    math.id = 'math';
    math.style.border = `5px solid ${appList[0].color}`;

    //draw 'lcd' display
    const lcd = document.createElement("div");
    lcd.id = `lcd`;
    lcd.className = "math-module";
    lcd.innerHTML = state.total;


    //by appending element like this, making it child element
    math.append(lcd);

    //draw keypad display
    const numbers = document.createElement("div");
    numbers.className = "math-segment";

    // handle number inputs
    const handleNumInput = numInput => {
        if (numInput === ".") return ;
        if ( numInput === "c") {
            state = {...defaultState};
            return lcd.innerHTML = 0;
        }
        state.currnetInput += numInput;
        console.log(state);
        lcd.innerHTML = state.currentInput
    }

    //handle caclulations
    const calculate = () => {
        let currentValue = parseFloat(state.currentInput);
        switch (state.currentOp){
            case('add'):
                state.total += currentValue;
                break;
            case('sub'):
                state.total -= currentValue;
                break;
            case('mult'):
                state.total *= currentValue;
                break;
            case('div'):
                state.total /= currentValue;
                break;
        }
        state.currentInput = "";
        lcd.innerHTML = state.total;
    }

    //handle operation inputs
    const handleOpInput =  opInput => {
        if ( state.currentOp ){
            calculate();
            state.currentOp = opInput;
        } else {
            state.total = parseFloat(state.currentInput);
            state.currentInput = "";
            state.currentOp = opInput;
        }
    }

    //draw numbers buttons


    nums.forEach(num => {
        let button = document.createElement('button');
        button.innerHTML = num;
        if( num === 'c') button.style.color = appList[0].color;
        button.onclick = () => console.log(num);
        numbers.append(button);
    })


    //draw ops buttons
    ops.forEach( op => {
        let button = document.createElement("button");
        button.innerHTML = "op"
        button.onclick = () => console.log(op);
        options.append(button);
    })

    //append
    math.append(numbers);
    
    display.append(math);
    
}








// const generateMath = () => {

//     const calculator = document.createElement("div");
//     calculator.id = "calculator";
//     calculator.style.border = `2px solid ${appList[0].color}`
//     calculator.style.borderRadius = "15px"
//     calculator.style.width = "400px"
//     calculator.style.height = "500px"

//     const input = document.createElement("input");
//     input.id = "input";
//     input.style.border = "1px solid #22222240";
//     input.style.width = "90%";
//     input.style.height = "40px";
//     input.style.textAlign = "right";


//     const button0 = document.createElement("button");
//         button0.innerHTML = " 0 ";
//         button0.style.padding = "10px 20px 10px 20px"
//     const button1 = document.createElement("button");
//         button1.innerHTML = " 1 ";
//         button1.style.padding = "10px 20px 10px 20px"
//     const button2 = document.createElement("button");
//         button2.innerHTML = " 2 ";
//         button2.style.padding = "10px 20px 10px 20px"
//     const button3 = document.createElement("button");
//         button3.innerHTML = " 3 ";
//         button3.style.padding = "10px 20px 10px 20px"
//     const button4 = document.createElement("button");
//         button4.innerHTML = " 4 ";
//         button4.style.padding = "10px 20px 10px 20px"
//     const button5 = document.createElement("button");
//         button5.innerHTML = " 5 ";
//         button5.style.padding = "10px 20px 10px 20px"
//     const button6 = document.createElement("button");
//         button6.innerHTML = " 6 ";
//         button6.style.padding = "10px 20px 10px 20px"
//     const button7 = document.createElement("button");
//         button7.innerHTML = " 7 ";
//         button7.style.padding = "10px 20px 10px 20px"
//     const button8 = document.createElement("button");
//         button8.innerHTML = " 8 ";
//         button8.style.padding = "10px 20px 10px 20px"
//     const button9 = document.createElement("button");
//         button9.innerHTML = " 9 ";
//         button9.style.padding = "10px 20px 10px 20px"



//     // declare statements

//     // handle inputs
    
//     //onclick button with key point

//     display.append(calculator);
//     display.append(input);
//     display.append(button0);
//     display.append(button1);
//     display.append(button2);
//     display.append(button3);
//     display.append(button4);
//     display.append(button5);
//     display.append(button6);
//     display.append(button7);
//     display.append(button8);
//     display.append(button9);
    
// }