import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonData = await AsyncStorage.getItem(key);

    if (jsonData) {
      return JSON.parse(jsonData);
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const containsKey = async (key: string) => {
  try {
    const keys = await AsyncStorage.getAllKeys();

    return keys.includes(key);
  } catch (error) {
    console.log(error);
  }
};
