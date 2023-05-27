import _ from 'lodash';
let res;
console.info('hello world');
console.info(1111);
let arr = [];
res = { a: 1 };
res.b = 1;
let bbbb = Object.create(res);
console.info(bbbb);
console.info('res = ', res);
res = _.get(res, 'a');
// res = test();
let arr = [];
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(max, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
    arr.push(max);
  }
  return max;
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// res = maxArea(height);
res = 1;
const test = () => {
  let res = 7;
  return res;
};
// res = test();
res = JSON.stringify(res);
export default res;
