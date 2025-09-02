export function isEmptyObject(obj) {
  // 先检查 obj 是否为 null 或 undefined
  if (obj == null) {
    return true // null 或 undefined 被认为是空的
  }
  
  // 检查是否为对象类型
  if (typeof obj !== 'object') {
    return true
  }
  
  return !!!Object.keys(obj).length
  //!!它的核心作用是：将任何类型的值强制转换为布尔值 (true 或 false)
  // 第一个!将值转换为布尔值，如果值为空对象，则返回false
  // 第二个!将false转换为true, 即保持它原来是true or false
  // 第三个!将true转换为false, 即保持它原来是true or false
}

