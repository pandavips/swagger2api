/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 银行卡管理 - 删除
     */
    BankCardDeletePOST: (data, config = {}) => {
        return request({
            url: `/bank/card/delete`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 银行卡管理 - 详情
     */
    BankCardDetailPOST: (data, config = {}) => {
        return request({
            url: `/bank/card/detail`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 银行卡管理 - 查询
     */
    BankCardQueryPOST: (data, config = {}) => {
        return request({
            url: `/bank/card/query`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 银行卡管理 - 添加或编辑
     */
    BankCardUpdatePOST: (data, config = {}) => {
        return request({
            url: `/bank/card/update`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 银行信息 - 详情
     */
    BankDetailPOST: (data, config = {}) => {
        return request({
            url: `/bank/detail`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 银行信息 - 查询
     */
    BankQueryPOST: (data, config = {}) => {
        return request({
            url: `/bank/query`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 银行信息 - 添加或编辑
     */
    BankUpdatePOST: (data, config = {}) => {
        return request({
            url: `/bank/update`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
