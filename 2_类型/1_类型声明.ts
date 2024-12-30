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

