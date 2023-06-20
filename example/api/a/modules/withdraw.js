/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 提币和提现配置 - 获取数字货币提币配置
     */
    WithdrawConfigGetDigitalByCodeChainPOST: (chain, config = {}) => {
        return request({
            url: `/withdraw/config/getDigital/${chain}`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 提币和提现配置 - 获取法币提现配置
     */
    WithdrawConfigGetLegerByCodeCurrencyCodePOST: (currencyCode, config = {}) => {
        return request({
            url: `/withdraw/config/getLeger/${currencyCode}`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 提币和提现配置 - 设置数字货币提币配置
     */
    WithdrawConfigSetDigitalPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/config/setDigital`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币和提现配置 - 设置提现配置
     */
    WithdrawConfigSetLegerPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/config/setLeger`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 提现成功回调
     */
    WithdrawDigitalCallbackPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/callback`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 审核通过
     */
    WithdrawDigitalCheckPassPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/checkPass`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 审核拒绝
     */
    WithdrawDigitalCheckRefusePOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/checkRefuse`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 提币记录 - 导出excel
     */
    WithdrawDigitalExportExcelGET: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/exportExcel`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 提现失败
     */
    WithdrawDigitalFailPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/fail`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 收款信息
     */
    WithdrawDigitalGetCardPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/getCard`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 提币记录
     */
    WithdrawDigitalListPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/list`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 手动发起提现支付重试
     */
    WithdrawDigitalManualReTryWithdrawPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/manualReTryWithdraw`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 代理处理订单数量
     */
    WithdrawDigitalPendingCountPOST: (config = {}) => {
        return request({
            url: `/withdraw/digital/pendingCount`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 提币信息 - 提现成功（仅线下转账方式）
     */
    WithdrawDigitalSuccessPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/success`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 汇总信息
     */
    WithdrawDigitalSummaryPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/summary`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提币信息 - 确认提现
     */
    WithdrawDigitalWithdrawConfirmPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/digital/withdrawConfirm`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 提现/币限制 - 调整
     */
    WithdrawLimitAdjustPOST: (data = {}, config = {}) => {
        return request({
            url: `/withdraw/limit/adjust`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
