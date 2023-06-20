/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 返水方案管理 - 新增方案
     */
    RebatePlanAddPlanPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/plan/addPlan`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水方案管理 - 查询厂商类型列表
     */
    RebatePlanAllTypeGET: (config = {}) => {
        return request({
            url: `/rebate/plan/allType`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 返水方案管理 - 删除明细信息
     */
    RebatePlanDeleteItemsPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/plan/deleteItems`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水方案管理 - 删除方案信息
     */
    RebatePlanDeletePlanPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/plan/deletePlan`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水方案管理 - 禁用方案
     */
    RebatePlanDisablePlanPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/plan/disablePlan`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水方案管理 - 启用方案
     */
    RebatePlanEnablePlanPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/plan/enablePlan`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水方案管理 - 查询方案明细信息
     */
    RebatePlanQueryItemsPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/plan/queryItems`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水方案管理 - 查询方案列表
     */
    RebatePlanQueryListPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/plan/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水方案管理 - 更新方案
     */
    RebatePlanUpdatePlanPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/plan/updatePlan`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水记录管理 - 一键发放
     */
    RebateRecordAllGrantPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/record/allGrant`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水记录管理 - 批量发放
     */
    RebateRecordBatchGrantPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/record/batchGrant`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水记录管理 - 批量拒绝
     */
    RebateRecordBatchRefusePOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/record/batchRefuse`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 返水记录管理 - 导出返水记录列表
     */
    RebateRecordExportExcelGET: (data = {}, config = {}) => {
        return request({
            url: `/rebate/record/exportExcel`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 返水记录管理 - 返水记录列表
     */
    RebateRecordQueryListPOST: (data = {}, config = {}) => {
        return request({
            url: `/rebate/record/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
