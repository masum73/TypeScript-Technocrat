{
    // utility types
    // pick 

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNumber: number; 
    }
    type NameAge = Pick<Person, 'name' | 'age'>

    // omit 
    type ContactInfo = Omit<Person, 'name' | 'age'>
    // required 
    type PersonRequire = Required<Person>
    // partial
    type PersonPartial = Partial<Person>
    // readonly 
    type PersonReadOnly = Readonly<Person>
    const person1: PersonReadOnly = {
        name: 'john',
        age: 20,
        contactNumber: 234234,
    }

    // person1.name = 'jack';

    // record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string,string>
    const obj1: MyObj = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
    }

    const EmptyObj : Record<string, unknown> = {}
}
