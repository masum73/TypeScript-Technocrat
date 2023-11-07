{
    // type guard using type of  in

    // type of - type guard 
    type AlphaNumeric = string | number;

    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }

    }

    const res1 = add(2, 4);
    console.log(res1);
    const res2 = add('2', '4');
    console.log(res2);

    // in guard 

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: 'normal bhai'
    }
    const adminUser: AdminUser = {
        name: 'admin bhai',
        role: "admin",
    }

    getUser(normalUser)
    getUser(adminUser)


}