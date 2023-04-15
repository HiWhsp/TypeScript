export type callbackfn<K, V> = (key: K, val: V) => void


// 字典类
export class Dictionary<K, V> {
  private keys: K[] = [];
  private vals: V[] = [];


  // 写入字典项
  set(key: K, val: V) {
    const i = this.keys.indexOf(key); // 找到写入key所在的下标位置
    if (i < 0) { // 新增
      this.keys.push(key);
      this.vals.push(val);
    } else { // 重新赋值
      this.vals[i] = val;
    }
  }

  // 获取字典项的值
  get(key: K): V | undefined {
    const i = this.keys.indexOf(key); // 找到写入key所在的下标位置
    return this.vals[i];
  }

  // 是否包含某个字典项
  has(key: K) {
    return this.keys.includes(key);
  }

  forEach(callbackfn: callbackfn<K, V>) {

  }
}