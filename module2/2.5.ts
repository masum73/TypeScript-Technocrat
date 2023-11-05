{
    // functions with generics

    const createArray = (param: string): string[] => {
        return[param];
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return[param];
    }

    const result1 = createArray('BD');
    const resultGeneric = createArrayWithGeneric<boolean>(true)

    interface User {id:number, name:string}
    const resultGenericObj = createArrayWithGeneric<User>({id:1, name:'john'});
    
    const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T,Q] => {
        return[param1,param2];
    }

    const res1Tuple = createArrayWithGenericTuple<string,number>('BD', 12);
    const resGenericTuple = createArrayWithGenericTuple<boolean, {name:string}>(true,{name:'bd'})

    const addCourseToStudent = <T> (student: T) => {
        const course = 'Next level';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent( {name: 'john', email: 'x@gmail.com', devType: 'nextLevel'})
    const student2 = addCourseToStudent( {name: 'jack', email: 'y@gmail.com', hasWatch: 'Apple'})
}