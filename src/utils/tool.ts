import Pinyin from "pinyin";
import axios from "axios";
import url from "node:url";
import path from "path";

// 获取数据
export const fetchData = (url, data = {}) => {
  return axios.get(url, { params: data });
};

// 单词首字母大写
export const firstUpperCase = (str) =>
  str.replace(/^\S/, (s) => s.toUpperCase());

// 汉字转拼音首字母大写函数
export const chineseCharacter2pinyin = (character) => {
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
