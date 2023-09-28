const isfatching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TypeScript';

const numberArray: number[] = [1,2,3,4];
const numberArray2: Array<number> = [1,2,3,4];

//tuple
const contact: [string,number] = ['Alex', 2345];
const contact1: [number,string] = [2345,'Alex'];

//any
let variable: any = 32;
variable = '';
variable = [];

//type
type Login = string;

const login: Login = 'admin';
//const login1: Login = 1; wrong

type Id = string | number;

const id1: Id = '1111';
const id2: Id = 11111;
//const id2: Id = true; wrong
