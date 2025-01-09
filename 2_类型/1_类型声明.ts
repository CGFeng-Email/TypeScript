// javascript的数据类型

let num1: number = 123;
// 不定义也可以自己推导出来
let num2 = 123;
// 字符类型
let str1: string = 'hello';
// 模板字符串
let str2: string = `wold`;
// 布尔类型
let isBoolean1: boolean = false;
// 布尔类型支持表达式
let isBoolean2: boolean = 20 > 10;
// 对象类型
let obj = {
    name: '李军',
    age: 123
}
// 对象类型如果声明了，只能声明是个对象，无法从中获取里面的值
let obj2: object = {}
// 数组，里面的数据只能是字符串
let arr1: string[] = [];
// 数组，里面的数据只能是数字
let arr2: number[] = [];
// 数组，里面的数据只能是对象
let arr3: object[] = [];
// null,它的值只能是null
let n: null = null;
// undefined, 他的值只能是undefined
let u: undefined = undefined;

console.log(num1, num2, str1, str2, isBoolean1, isBoolean2, obj, obj2);


// TypeScript的数据类型

// 任意类型, 不推荐使用，太灵活
let message: any = 'hello wold';
message = 123456;
message = '李军';
let arr4: any = [];

// unknown不确定类型：只能赋值给any，unknown定义的属性
let flag: unknown;

// void：当一个函数没有返回值时，它就是void
const foo = (num1: number, num2: number) => {
    console.log(num1 + num2);

    // 当函数没有返回任何值时，默认会 return undefined
    // return undefined
}

// void: 当一个函数不会返回任何值的时候就是void类型，加上void类型的干函数会默认返回 return undefined
const sum = (num1: number, num2: number): void => {
    return undefined
}

// never: 当一个函数不会返回结果，或者里面陷入死循环，报错，异常
const eachFn1 = (): never => {
    // 死循环
    while (true) { }
}

// 自动会推导出是never类型
const eachFn2 = () => {
    throw new Error('异常了')
}

// 元组类型
const arr5: [string, number, number] = ['kebo', 18, 1.88];

// 函数的参数和返回值类型
function sum1(num1: number, num2: number) {
    // 会根据函数内部的返回值运算。自动推导sum1函数的类型
    return num1 + num2
}
// 也可以手动加上函数类型
function sum2(num1: number, num2: number): number {
    return 20 + 40
}
sum1(10, 20)
sum2(20, 40)

// 匿名函数参数类型
// 一般情况下函数的参数都会加上类型注解，但是根据上下文推导出来的，可以不添加类型注解
const arr6 = [123, 'abc', 'kebo', 'jumas', 78]
arr6.forEach(item => {
    console.log(item);
})

// 对象类型
function prionObj(point: { x: number, y: number }) {
    console.log(point.x);
    console.log(point.y);
}
prionObj({ x: 10, y: 30 })

// 可选类型
function printObj2(point: { x: number, y: number, z?: number }) {
    console.log(point.x);
    console.log(point.y);
    console.log(point.z);
}
printObj2({ x: 100, y: 200 })
printObj2({ x: 100, y: 200, z: 300 })

// 联合类型
function printID(id: number | string | boolean) {
    // 使用联合类型时需要特别的小心
    if (typeof id === 'string') {
        // 当id是string类型，转化成大写
        console.log(id.toUpperCase);
    } else {
        console.log(id);
    }
}
printID(10)
printID('abc')
printID(false)


// 类型别名
type IDType = number | string | boolean;
type pointType = {
    x: number,
    y: number,
    z?: number
}
function printID2(id: IDType) {

}
function printID3(point: pointType) {

}

// 类型断言 as
// 规定拿到的elImg元素一定是img元素
const elImg = document.getElementById('img') as HTMLImageElement;

type MethodType = 'GET' | 'POST';
function request(url: string, method: MethodType) { }
const options = {
    url: 'https://xxx.com',
    method: 'POST'
}
// options.method有可能会是其它字符，所以这里使用as指定了类型
request(options.url, options.method as MethodType)


// 非空类型断言 !
// 定义一个函数，有可能参数为空
function printText(message?: string) {
    // 如果传递进来的message参数为空则会报错
    console.log(message.length);
    // 再确定了不会为空的情况下
    console.log(message!.length);
}
printText('abc')



// 可选链 ?
type objContentType = {
    name: string,
    age: number,
    son?: {
        name: string,
        age: number,
        child?: {
            name: string,
            age: number
        }
    }
}

const kebeContent: objContentType = {
    name: 'kebo',
    age: 28,
    son: {
        name: 'jumas',
        age: 18,
        child: {
            name: 'harden',
            age: 8
        }
    }
}

console.log(kebeContent.name);
console.log(kebeContent.age);
// ? 可选链：对象中存在son，才会执行后续代码，否则会短路直接返回undefined
console.log(kebeContent.son?.name);
console.log(kebeContent.son?.child?.name);

// 字面量类型
// 字面量类型必需是字面量类型
type arrowType = 'left' | 'center' | 'right';
const arrowContent: arrowType = 'center' 