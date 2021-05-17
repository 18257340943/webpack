const promise = () => new Promise(resolve => {
  setTimeout(() => {
    console.log('定时器执行完了~');
    resolve();
  }, 1000);
});

const asyncFn = async function () {
  await promise()
}

console.log(asyncFn, 'asyncFn');

export default asyncFn