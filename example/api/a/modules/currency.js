/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 币种管理 - 启用/禁用
     */
    CurrencyEnablePOST: (config = {}) => {
        return request({
            url: `/currency/enable`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 系统币种 - 基础币种
     */
    CurrencyGetPOST: (config = {}) => {
        return request({
            url: `/currency/get`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 币种管理 - 查询
     */
    CurrencyQueryPOST: (data = {}, config = {}) => {
        return request({
            url: `/currency/query`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 币种管理 - 更新汇率
     */
    CurrencyRateUpdatePOST: (data = {}, config = {}) => {
        return request({
            url: `/currency/rate/update`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 币种管理 - USDT汇率
     */
    CurrencyUsdtRatePOST: (config = {}) => {
        return request({
            url: `/currency/usdt/rate`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 币种管理 - 添加或编辑USDT汇率
     */
    CurrencyUsdtUpdatePOST: (data = {}, config = {}) => {
        return request({
            url: `/currency/usdt/update`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
