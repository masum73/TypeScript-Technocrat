{
    // conditional types

    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false //conditional x type

    type y = a1 extends null? true : b1 extends undefined ? undefined : any;

    type Sheikh  = {
        bike: string;
        car: string;
        ship: string;
    }

    //  key of sheikh mane 'bike' | 'car' | 'ship'

    //  car ase kina then bike ase kina then ship ase kina then tractor ase kina 
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false 

    type HasBike = CheckVehicle<'bike'>
    type HasTractor = CheckVehicle<'tractor'>
}