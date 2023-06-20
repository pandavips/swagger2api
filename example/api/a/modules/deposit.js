/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 充币信息 - 渠道充值回调
     */
    DepositCallbackPOST: (data = {}, config = {}) => {
        return request({
            url: `/deposit/callback`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 充币信息 - 审核通过
     */
    DepositCheckPassPOST: (data = {}, config = {}) => {
        return request({
            url: `/deposit/checkPass`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 充币信息 - 审核拒绝
     */
    DepositCheckRefusePOST: (data = {}, config = {}) => {
        return request({
            url: `/deposit/checkRefuse`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 充币和充值配置 - 获取数字货币充币配置
     */
    DepositConfigGetDigitalByCodeChainPOST: (chain, config = {}) => {
        return request({
            url: `/deposit/config/getDigital/${chain}`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 充币和充值配置 - 获取法币充值配置
     */
    DepositConfigGetLegerByCodeCurrencyCodePOST: (currencyCode, config = {}) => {
        return request({
            url: `/deposit/config/getLeger/${currencyCode}`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 充币和充值配置 - 设置数字货币充币配置
     */
    DepositConfigSetDigitalPOST: (data = {}, config = {}) => {
        return request({
            url: `/deposit/config/setDigital`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 充币和充值配置 - 设置提现配置
     */
    DepositConfigSetLegerPOST: (data = {}, config = {}) => {
        return request({
            url: `/deposit/config/setLeger`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 充币信息 - 充币记录 - 导出excel
     */
    DepositExportExcelGET: (data = {}, config = {}) => {
        return request({
            url: `/deposit/exportExcel`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 充币信息 - 收款信息
     */
    DepositGetCardPOST: (data = {}, config = {}) => {
        return request({
            url: `/deposit/getCard`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 充币信息 - 充币记录
     */
    DepositListPOST: (data = {}, config = {}) => {
        return request({
            url: `/deposit/list`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 充币信息 - 待理处理订单数量
     */
    DepositPendingCountPOST: (config = {}) => {
        return request({
            url: `/deposit/pendingCount`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 充币信息 - 汇总信息
     */
    DepositSummaryPOST: (data = {}, config = {}) => {
        return request({
            url: `/deposit/summary`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
