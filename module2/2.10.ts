{
    // mapped types
    const arrayOfNumbers: number[] = [1, 3, 6];

    //  const arrayOfStrings: string[] = ['1', '3', '6'];
    const arrayOfStrings: string[] = arrayOfNumbers.map(number => number.toString());

    console.log(arrayOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    };
    type Height = AreaNumber['height'] //lookup type 
    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // T = {height: string; width: number}
    type AreaString<T> = {
        [key in keyof T]: T[key];
    }
    const area1 : AreaString<{height: string; width: number}> = {
        height: '100',
        width: 100,
    }
}