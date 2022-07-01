let username: string = 'ABC';
let username1 = "abc";
let username2;


let hasLoggedIn: boolean = true;

username += "xyz";

let myRegx: RegExp = /abc/

console.log(username);

const name1: string[] = ["Abc", "XYZ"];

const name2: string[] = username.split("");

const myValue: Array<number> = [1, 2];
const myValue1: number[] = [1, 2];


interface Person {
    first: string;
    last: string;
    address?: string;
}

const myPerson: Person = {
    first: 'abc',
    last: 'xyz'
}

const myPerson1: Person = {
    first: 'abc',
    last: 'xyz',
    address: 'delhi'
}

interface IDType {
    [key: number]: string
}

const ids: IDType = {
    10: 'a',
    20: 'b',
    30: 'c',
    40: 'd',
}

const ids2: Record<number, string> = {
    10: 'a',
    20: 'b',
    30: 'c',
    40: 'd',
}

for (let i = 0; i < 10; i++) { }

const out: number[] = [4, 5, 6].map((v) => v * 10);
const out1: string[] = [4, 5, 6].map((v) => `${v * 10}`);


type Person1 = {
    first: string;
    last: string;
    address?: string;
}

const myPerson2: Person1 = {
    first: 'abc',
    last: 'xyz'
}


function addNumbers(a: number, b: number): number {
    return a + b;
}

// public int addNumbers1(int a, int b) {
// }

export const addStrings = (str1: string, str2: string): string =>
    `${str1} ${str2}`;

addStrings('abc', 'xyz')

const format = (title: string, param: string | number): string => `${title} ${param}`

format('title', "abc");
format('title', 10);

const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
};

const fetchData = (url: string): Promise<string> => Promise.resolve("data");

function introduce(salutation: string, ...name: string[]): string {
    return `${salutation} ${name.join(" ")}`
}


// rest

console.log(introduce('Mr', 'John'));
console.log(introduce('Mr', 'John', 'Smith'));
console.log(introduce('Mr', 'John', 'Smith', 'asfd'));


function getName(user: { first: string, last: string } | undefined): string {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}

console.log(getName({ first: "abc", last: "xyz" }));
console.log(getName({ first: "abc", last: '' }));
console.log(getName(undefined));

function printToFile(text: string, callback: (param: string) => string): void {
    console.log(text);
    const result = callback(text);
}

const arr = [1, 2, 3, 4]
arr.map(item => item * 2); //[2, 4, 6, 8]

function arrayMutate(numbers: number[]): number[] {
    return numbers.map(item => item * 2);
}

type MutateFunction = (v: number) => number;

function arrayMutate1(numbers: number[], mutate: MutateFunction): number[] {
    return numbers.map(mutate);
}


interface Coordinate {
    x: number;
    y: number;
}

function parseObject(obj: Coordinate): Coordinate {
    return {
        ...obj
    }
}

function parseObject1(xValue: number, yValue: number): Coordinate {
    return {
        x: xValue,
        y: yValue
    }
}


function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    }

    if (typeof arg1 === 'object') {
        coord = {
            ...arg1 as Coordinate
        }
    } else if (typeof arg1 === 'string') {
        (arg1 as string).split(',').forEach((str) => {
            const [key, value] = str.split(':');
            coord[key as 'x' | 'y'] = parseInt(value, 10);
            // coord['name' as string] = 'abc'
        })
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }

    return coord
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 50, y: 22 }));
console.log(parseCoordinate("x: 12,y: 22"));


// const beforeLoad = "beforeLoad";
// const loading = "loading";
// const loaded = "loaded";

enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded",
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

isLoading(LoadingState.beforeLoad);


interface MyUser {
    name: string;
    id: number;
    email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides,
    };
};


type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">

type UserWithoutId = Omit<MyUser, 'id'>;

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount('abc', 1);

interface Backpack<T, U> {
    add: (obj: T) => U;
    get: () => T;
}

// const x2: Backpack<string>;
// x1.add("asdf");
// x1.get()

