// destructuring 

// object and array 
// object destructuring 
{
    const user = {
        id: 12,
        name: {
            firstName: 'John',
            middleName: 'Jack',
            LastName: 'Joe',
        },
        contactNo: "01710893337",
        address: "BD"
    };

    const {contactNo: phoneNum, name:{middleName: midName}} = user; 

// array destructuring 

const myFriends = ['john', 'jack', 'joey','june','juke'];
const[,, bestFriend, ...rest] = myFriends;




}
