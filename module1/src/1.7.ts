{
    // spread operator
    // rest operator 

    // spread operator
    // with array
    const bros1: string[] = ['john', 'jack', 'smith'];
    const bros2: string[] = ['mike', 'costa'];

    bros1.push(...bros2)

    // with object
    const mentors1 = {
        typescript: 'john',
        redux: 'jack',
        dbms: 'mike',
    }
    const mentors2 = {
        prisma: 'costa',
        next: 'michel',
        cloud: 'david',
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2,
    }

    // rest operators
    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3} `);
        friends.forEach((friend:string)=> console.log(`Hi ${friend}`))
    }

    greetFriends('john','jack','mick')
}