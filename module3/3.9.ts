{
    // abstraction 1. interface 2.abstract 

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }
    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('starting car engine');
        }
        stopEngine(): void {
            console.log('stopping car engine');
        }
        move(): void {
            console.log('moving the car');
        }
        test() {
            console.log('testing this');
        }
    }

    const toyotaCar = new Car1()
    toyotaCar.startEngine();

    //  abstract class diye abstraction

    // idea - ei class k follow korbe but new diye create hobe na
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log('testing this');
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('starting car engine');
        }
        stopEngine(): void {
            console.log('stopping car engine');
        }
        move(): void {
            console.log('moving the car');
        }
    }
    // const hondaCar = new Car2();
    // hondaCar.stopEngine();

}