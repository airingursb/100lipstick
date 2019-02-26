export class Storage {
  static async get(key, defaultValue) {
    let result = await localStorage.getItem(key);
    if (!result) {
      return await localStorage.setItem(key, JSON.stringify(defaultValue));
    }
    try {
      return JSON.parse(result);
    } catch (error) {
      console.log(error);
      return defaultValue || undefined;
    }
  }

  static async set(key, value) {
    await localStorage.setItem(key, JSON.stringify(value));
  }

  static async remove(key) {
    await localStorage.removeItem(key);
  }

}
