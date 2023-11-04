{
    // union type 

    // type FrontendDeveloper = 'Good' | 'Bad';
    // type FullstackDeveloper = 'Best' | 'Expert';

    // type Developer = FrontendDeveloper | FullstackDeveloper;

    // const newDev : FrontendDeveloper = 'Good';

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: 'male' | 'female';
    //     bloodGroup: 'O+' | 'A+' | 'AB+';
    // }

    // const user1: User = {
    //     name: 'john',
    //     gender: 'male',
    //     bloodGroup: 'A+',

    // }



    // intersect 

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'FrontEnd Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'BackEnd Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDev: FullstackDeveloper = {
        skills: ['HTML','CSS','Express'],
        designation1: 'FrontEnd Developer',
        designation2: 'BackEnd Developer',
    }
}