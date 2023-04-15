type callbackfn<K, V> = (key: K, val: V) => void

// 字典类
export class Dictionary<K, V> {
  private keys: K[] = [];
  private vals: V[] = [];


  // 写入字典项
  set(key: K, val: V): V {
    const i = this.keys.indexOf(key); // 找到写入key所在的下标位置
    if (i < 0) { // 新增
      this.keys.push(key);
      this.vals.push(val);
    } else { // 重新赋值
      this.vals[i] = val;
    }
    return this.vals[i]
  }

  // 获取字典项的值
  get(key: K): V | undefined {
    const i = this.keys.indexOf(key); // 找到写入key所在的下标位置
    return this.vals[i];
  }

  // 是否包含某个字典项
  has(key: K): boolean {
    return this.keys.includes(key);
  }

  // 删除某个字典项
  delete(key: K): boolean {
    const i = this.keys.indexOf(key);
    if (i < 0) {
      return false
    } else {

      return true
    }
  }

  forEach(callbackfn: callbackfn<K, V>) {
    this.keys.forEach((i, index) => {
      callbackfn(i, this.vals[index])
    })
  }
}