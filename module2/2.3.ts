{
    // generic type 

    type GenericArray<T> = Array<T>

    // const rollNumber : number[] = [3,6,8];
    const rollNumber : GenericArray<number> = [3,6,8];
    
    // const mentors : string[] = ['x','y','z'];
    const mentors : GenericArray<string> = ['x','y','z'];
    
    // const boolArray : boolean[] = [true, false, true];
    const boolArray : GenericArray<boolean> = [true, false, true];

    type User = {
        name: string,
        age: number
    }
    const user: GenericArray<User> = [
        {
            name: 'John',
            age: 22,
        },
        {
            name: 'Jack',
            age: 25,
        }
    ]

// generic tuple 
type GenericTuple<X,Y> = [X, Y]
const human: GenericTuple<string, string> = ['Jack', 'John']
const userWithID: GenericTuple<number,{name:string, email: string}> = [1234, {name: 'john', email: 'john@gmail.com'}]
}