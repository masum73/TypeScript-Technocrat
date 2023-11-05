{
    // constraints 
    const addCourseToStudent = <T extends {id: number; name: string; email: string;}>(student: T) => {
        const course = 'Next level';
        return {
            ...student,
            course
        }
    }
    const student3 = addCourseToStudent(
        {   id: 3,
            name: 'joe',
            email: 'j@gmail.com',
            emni: 'emni',
        }
    )
    const student1 = addCourseToStudent(
        {
            id: 1,
            name: 'john',
            email: 'x@gmail.com',
            devType: 'nextLevel'
        }
    )
    const student2 = addCourseToStudent(
        {
            id: 2,
            name: 'jack',
            email: 'y@gmail.com',
            hasWatch: 'Apple'
        }
    )



}