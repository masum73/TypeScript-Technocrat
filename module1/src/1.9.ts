{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'john',
        age: 23,
        gender: 'm',
        contactNo: "999",
        address: 'bd'
    }

    const student2 : Student = {
        name: 'jack',
        age: 23,
        gender: 'm',
        address: 'dhk'
    }

    type UserName = string
    type IsAdmin = boolean
    const userName : UserName = 'john';
    const isAdmin : IsAdmin = true;

    // function type alias
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

}