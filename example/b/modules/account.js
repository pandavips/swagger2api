/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 账户相关 - 平台账户（归集地址）
     */
    AccountCollectionAccountGET: (config = {}) => {
        return request({
            url: `/account/collectionAccount`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 账户相关 - 头寸余额
     */
    AccountHotAccountGET: (config = {}) => {
        return request({
            url: `/account/hotAccount`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 账户相关 - 平台账户 - 手续费余额
     */
    AccountPlatformGET: (config = {}) => {
        return request({
            url: `/account/platform`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 账户相关 - 盘内实时余额
     */
    AccountStatisticsBalanceCurrentPOST: (data, config = {}) => {
        return request({
            url: `/account/statistics/balance/current`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 账户相关 - 盘内历史余额
     */
    AccountStatisticsBalanceHistoryPOST: (data, config = {}) => {
        return request({
            url: `/account/statistics/balance/history`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 账户相关 - 单个用户余额
     */
    AccountUserBalancePOST: (data, config = {}) => {
        return request({
            url: `/account/userBalance`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
