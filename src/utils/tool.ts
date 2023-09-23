import Pinyin from "pinyin";
import axios from "axios";
import url from "node:url";
import path from "path";

// 判断是否是对象
export const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

// 获取数据
export const fetchData = (url, data = {}) => {
  return axios.get(url, { params: data });
};

// 单词首字母大写
export const firstUpperCase = (str: string) => str.replace(/^\S/, (s: string) => s.toUpperCase());

// 汉字转拼音首字母大写函数
export const chineseCharacter2pinyin = (character: string) => {
  if (!character) return "";
  return Pinyin(character, {
    style: Pinyin.STYLE_NORMAL,
  })
    .map((p) => firstUpperCase(p[0]))
    .join("")
    .replace(/[^a-zA-Z ]/g, "");
};

// 在esm中获取当前目录
export const getCurrentDirName = (importMetaUrl = import.meta.url) => {
  return path.dirname(url.fileURLToPath(importMetaUrl));
};

// 判断是否是一个url
export const isUrl = (str: string | object) => {
  if (isObject(str)) return false;
  const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
  return reg.test(str as string);
};

// 去除字符串所有特殊字符
export const removeSpecialCharacter = (str: string) => {
  return str.replace(/[^\w\s]/gi, "");
};
