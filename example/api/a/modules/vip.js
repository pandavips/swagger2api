/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: VIP管理 - 新增vip
     */
    VipManagementAddVipPOST: (data = {}, config = {}) => {
        return request({
            url: `/vip/management/addVip`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: VIP管理 - 获取vip降级周期
     */
    VipManagementGetPeriodGET: (config = {}) => {
        return request({
            url: `/vip/management/getPeriod`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: VIP管理 - 查询vip信息下拉
     */
    VipManagementQueryAllPOST: (config = {}) => {
        return request({
            url: `/vip/management/queryAll`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: VIP管理 - 查询vip信息列表
     */
    VipManagementQueryListPOST: (data = {}, config = {}) => {
        return request({
            url: `/vip/management/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: VIP管理 - 查询单条vip信息
     */
    VipManagementQueryOnePOST: (data = {}, config = {}) => {
        return request({
            url: `/vip/management/queryOne`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: VIP管理 - 更新vip降级周期
     */
    VipManagementUpdatePeriodPOST: (data = {}, config = {}) => {
        return request({
            url: `/vip/management/updatePeriod`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: VIP管理 - 更新vip
     */
    VipManagementUpdateVipPOST: (data = {}, config = {}) => {
        return request({
            url: `/vip/management/updateVip`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
