{
    // generic Interface
    interface Developers<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }

    type AsusWatch = { brand: string, model: string, display: string }

    const poorDeveloper: Developers<AsusWatch> = {
        name: 'john',
        computer: {
            brand: 'asus',
            model: 'text',
            releaseYear: 2022,
        },
        smartWatch: {
            brand: 'Asus',
            model: 'I10',
            display: 'OLED'
        }
    }

    interface AppleWatch { brand: string, model: string, heartTrack: boolean, sleepTrack: boolean }
    interface YamahaBike { model: string, engine: string }
    const richDeveloper: Developers<AppleWatch, YamahaBike> = {
        name: 'john',
        computer: {
            brand: 'Apple',
            model: 'text',
            releaseYear: 2023,
        },
        smartWatch: {
            brand: 'Apple',
            model: 'I12',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: 'Yamaha',
            engine: '150cc'
        }
    }
}