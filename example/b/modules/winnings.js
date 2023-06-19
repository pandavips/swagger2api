/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 用户彩金发放记录 - 导出excel
     */
    WinningsRecordExportExcelGET: (data, config = {}) => {
        return request({
            url: `/winnings/record/exportExcel`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 用户彩金发放记录 - 彩金记录查询
     */
    WinningsRecordPagePOST: (data, config = {}) => {
        return request({
            url: `/winnings/record/page`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 用户彩金发放记录 - 彩金审核
     */
    WinningsRecordReviewPOST: (data, config = {}) => {
        return request({
            url: `/winnings/record/review`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 用户彩金发放记录 - 查询统计信息
     */
    WinningsRecordStatisticPOST: (data, config = {}) => {
        return request({
            url: `/winnings/record/statistic`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 彩金规则配置控制器 - 删除配置
     */
    WinningsRuleDeletePOST: (data, config = {}) => {
        return request({
            url: `/winnings/rule/delete`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 彩金规则配置控制器 - 通过id获取配置
     */
    WinningsRuleGetPOST: (data, config = {}) => {
        return request({
            url: `/winnings/rule/get`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 彩金规则配置控制器 - 列表
     */
    WinningsRulePagePOST: (data, config = {}) => {
        return request({
            url: `/winnings/rule/page`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 彩金规则配置控制器 - 保存配置
     */
    WinningsRuleSavePOST: (data, config = {}) => {
        return request({
            url: `/winnings/rule/save`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
