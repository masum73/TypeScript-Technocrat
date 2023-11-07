{
    // getter and setter 

    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }
        // public getBalance() {
        //     return this._balance;
        // }
        // setter
        set deposit(amount: number){
            this._balance = this._balance + amount
        }
        // getter 
        get balance(){
            return this._balance;
        }
    }

    const goribManusherAccount = new BankAccount(111, 'gorib manush', 20);

    // goribManusherAccount.addDeposit(30); //function call hocche
     goribManusherAccount.deposit = 50; 
    // const myBalance = goribManusherAccount.getBalance(); //function call hocche
    const myBalance = goribManusherAccount.balance; //property er mtn kore use korchi
    console.log(myBalance);

}