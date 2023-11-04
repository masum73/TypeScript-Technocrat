// Reference Type - Objects

const user: {
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
    company: 'PH'; // type --> literal type
    readonly country: string; // can not change
} = {
    firstName: 'john',
    lastName: 'smith',
    isMarried: true,
    company: 'PH',
    country: 'BD', // can not change the value because of readonly
}





