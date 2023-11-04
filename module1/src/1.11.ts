{
    // Ternary operator ? || optional chaining || nullish coalescing operator

    const age: number = 15;

    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({isAdult});

    //nullish coalescing operator
    //  null / undefined -> decision making

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'guest';
    const result2 = isAuthenticated ? isAuthenticated : 'guest'
    console.log({result1}, {result2});

    // chaining 

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }  
    }
    const user: User = {
         name: 'john',
         address: {
            city: 'dhk',
            road: 'abc road',
            presentAddress: 'uttara',
         }   
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'not found'; 
    console.log({permanentAddress});
}