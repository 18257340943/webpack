import './index.less';
import './main.css';
import './font/iconfont.css';
// import $ from 'jquery';
// import react from 'react';
// console.log(content)();
// console.log(a, 'a1111')
import content from './test'
import './font/iconfont.js'

module.hot.accept('./test.js', () => {
  console.log('test.js文件更新啦~~~')
})
