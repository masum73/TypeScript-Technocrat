{
    // constraint using key of 

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = 'bike' | 'car' | 'ship' ; //manually 

    type Owner2 = keyof Vehicle

    const person1 : Owner = 'car';
    const person2 : Owner2 = 'bike';

    const  getPropertyValue=<X,Y extends keyof X>(obj: X, key: Y)=>{
        return obj[key];
    }
    
    const user = {
        name: 'john',
        age: 23,
        addressL: 'bd',
    }

    const car = {
        model: 'toyota supra',
        year: 2022
    }
    const res1 = getPropertyValue(car, 'year');
    const res2 = getPropertyValue(user, 'age');


}