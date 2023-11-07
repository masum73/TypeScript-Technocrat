{
    // access modifiers 

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
        public addDeposit(amount: number){
            this._balance = this._balance + amount;
        }
        public getBalance(){
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test(){
            // this.
        }
    }
    const goribManusherAccount = new BankAccount(111, 'gorib manush', 20);
    goribManusherAccount.addDeposit(30);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
}