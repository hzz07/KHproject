export function objKeySort(obj) { //排序的函数
  let newkey = Object.keys(obj).sort();
  if (newkey.indexOf('#') != -1) {
    let str = newkey.splice(newkey.indexOf('#'), 1);
    newkey.push(str);
  }　　 //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  let newObj = {}; //创建一个新的对象，用于存放排好序的键值对

  for (let i = 0; i < newkey.length; i++) { //遍历newkey数组
    newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
  }
  return newObj; //返回排好序的新对象
}


//节流函数
export function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}


//数组去重
export function arr_unique(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];//当前项
    if (obj[cur] == cur) {
      arr.splice(i, 1);
      i--
    } else {
      obj[cur] = cur;
    }
  }
  obj = null;
  return arr;
};


//带键名对象进行合并

export function concatArray(arr) {
  var arr_1 = arr[0]
  var arr_2 = arr[1]

  console.log(arr_1)
  if(!arr_2){
    return arr_1
  }

  return Object.assign(arr_1,arr_2)

}
