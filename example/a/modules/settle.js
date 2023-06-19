/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 结算数据 - 代理返佣数据
     */
    SettleAgentPOST: (data, config = {}) => {
        return request({
            url: `/settle/agent`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 结算数据 - 代理结算数据 - 导出excel
     */
    SettleAgentExportExcelGET: (data, config = {}) => {
        return request({
            url: `/settle/agent/exportExcel`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 结算数据 - 审核
     */
    SettleApplyCheckPassPOST: (data, config = {}) => {
        return request({
            url: `/settle/apply/checkPass`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 结算数据 - 代理返佣提出申请列表
     */
    SettleApplyListPOST: (data, config = {}) => {
        return request({
            url: `/settle/apply/list`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 结算数据 - 平台结算数据
     */
    SettlePlatformPOST: (data, config = {}) => {
        return request({
            url: `/settle/platform`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 结算数据 - 平台结算数据 - 导出excel
     */
    SettlePlatformExportExcelGET: (data, config = {}) => {
        return request({
            url: `/settle/platform/exportExcel`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 结算数据 - 包网商结算数据
     */
    SettleProxyPOST: (data, config = {}) => {
        return request({
            url: `/settle/proxy`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 结算数据 - 包网商结算数据 - 导出excel
     */
    SettleProxyExportExcelGET: (data, config = {}) => {
        return request({
            url: `/settle/proxy/exportExcel`,
            method: "GET",
            params: data,
            ...config
        });
    }
};
