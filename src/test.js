import sum from './sum';
import jian from './jian';
import promise from './promise';

promise();

const content = `sum${sum(1, 2)}  jian${jian(5, 1)}`;


console.log(content, 'content')

export default content