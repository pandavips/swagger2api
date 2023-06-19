/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 经验值管理 - 查询经验值列表
     */
    ExperienceValueQueryListPOST: (data, config = {}) => {
        return request({
            url: `/experience/value/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 经验值管理 - 查询单条经验值信息
     */
    ExperienceValueQueryOnePOST: (data, config = {}) => {
        return request({
            url: `/experience/value/queryOne`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 经验值管理 - 查询有效流水值信息
     */
    ExperienceValueQueryValidAmountGET: (config = {}) => {
        return request({
            url: `/experience/value/queryValidAmount`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 经验值管理 - 编辑经验值
     */
    ExperienceValueUpdateExperienceValuePOST: (data, config = {}) => {
        return request({
            url: `/experience/value/updateExperienceValue`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 经验值管理 - 编辑有效流水值
     */
    ExperienceValueUpdateValidAmountPOST: (data, config = {}) => {
        return request({
            url: `/experience/value/updateValidAmount`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
