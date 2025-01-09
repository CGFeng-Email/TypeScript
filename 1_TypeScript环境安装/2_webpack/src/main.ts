import { sum } from './foo/index'

const message: String = 'hello TypeScript';

console.log(message);

console.log(sum(10, 20));
console.log(sum(20, 40));

const isBoolean = Boolean(message);
console.log('isBoolean', isBoolean);

// ??运算符
const message2: string | null = null;
const content = message2 ?? '默认值'
