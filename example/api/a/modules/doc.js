/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 文档中心管理 - 新增文档
     */
    DocManagementAddDocPOST: (data = {}, config = {}) => {
        return request({
            url: `/doc/management/addDoc`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 文档中心管理 - 下架文档
     */
    DocManagementOfflineDocPOST: (data = {}, config = {}) => {
        return request({
            url: `/doc/management/offlineDoc`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 文档中心管理 - 发布文档
     */
    DocManagementOnlineDocPOST: (data = {}, config = {}) => {
        return request({
            url: `/doc/management/onlineDoc`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 文档中心管理 - 查询文档列表
     */
    DocManagementQueryListPOST: (data = {}, config = {}) => {
        return request({
            url: `/doc/management/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 文档中心管理 - 查询单条文档信息
     */
    DocManagementQueryOnePOST: (data = {}, config = {}) => {
        return request({
            url: `/doc/management/queryOne`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 文档中心管理 - 更新文档
     */
    DocManagementUpdateDocPOST: (data = {}, config = {}) => {
        return request({
            url: `/doc/management/updateDoc`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
