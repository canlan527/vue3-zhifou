// 本地缓存工具类，对 localStorage 的封装
class LocalStorage {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export default new LocalStorage();