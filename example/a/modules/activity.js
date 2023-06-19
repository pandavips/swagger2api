/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 活动相关 - 编辑
     */
    ActivityEditActivityPOST: (data, config = {}) => {
        return request({
            url: `/activity/editActivity`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 活动相关 - 上下架
     */
    ActivityEditStatusPOST: (data, config = {}) => {
        return request({
            url: `/activity/editStatus`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 活动相关 - 导出Excel
     */
    ActivityExportGET: (config = {}) => {
        return request({
            url: `/activity/export`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 活动相关 - 导出Excel
     */
    ActivityExportPOST: (config = {}) => {
        return request({
            url: `/activity/export`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 活动相关 - 查询-详情
     */
    ActivityFetchActivityDetailPOST: (data, config = {}) => {
        return request({
            url: `/activity/fetchActivityDetail`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 活动相关 - 查询
     */
    ActivityQueryActivityPOST: (data, config = {}) => {
        return request({
            url: `/activity/queryActivity`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
