// Learning Functions 
// normal function and arrow function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 3)

const addArrow = (num1: number, num2: number): number => num1 + num2; 

// object --> function => method

const poorUser = {
    name: 'john',
    balance: 0,
    addBalance(balance:number):string {
        return `My new balance is ${this.balance + balance}`;
    }
}

const arr: number[] = [1,4,9];
const newArr: number[] = arr.map((element: number): number => element*element);