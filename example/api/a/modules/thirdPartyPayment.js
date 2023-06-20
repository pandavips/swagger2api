/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 三方支付管理 - 添加或编辑
     */
    ThirdPartyPaymentAddOrUpdatePOST: (data = {}, config = {}) => {
        return request({
            url: `/thirdPartyPayment/addOrUpdate`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 三方支付管理 - 删除
     */
    ThirdPartyPaymentDeleteGET: (data = {}, config = {}) => {
        return request({
            url: `/thirdPartyPayment/delete`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 三方支付管理 - 详情
     */
    ThirdPartyPaymentDetailGET: (data = {}, config = {}) => {
        return request({
            url: `/thirdPartyPayment/detail`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 三方支付管理 - 列表查询
     */
    ThirdPartyPaymentListPOST: (data = {}, config = {}) => {
        return request({
            url: `/thirdPartyPayment/list`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
