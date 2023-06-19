/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 包网商代理管理 - 添加代理
     */
    AgentAddPOST: (data, config = {}) => {
        return request({
            url: `/agent/add`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 代理申请管理 - 审核通过
     */
    AgentApplyPassPOST: (data, config = {}) => {
        return request({
            url: `/agent/apply/pass`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 代理申请管理 - 查询申请列表
     */
    AgentApplyQueryListPOST: (data, config = {}) => {
        return request({
            url: `/agent/apply/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 代理申请管理 - 审核拒绝
     */
    AgentApplyRefusePOST: (data, config = {}) => {
        return request({
            url: `/agent/apply/refuse`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商代理管理 - 冻结代理
     */
    AgentLockPOST: (data, config = {}) => {
        return request({
            url: `/agent/lock`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商代理管理 - 查询单个代理信息
     */
    AgentQueryByIdPOST: (data, config = {}) => {
        return request({
            url: `/agent/queryById`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商代理管理 - 查询一级代理列表
     */
    AgentQueryLevelOneListGET: (config = {}) => {
        return request({
            url: `/agent/queryLevelOneList`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 包网商代理管理 - 查询代理列表
     */
    AgentQueryListPOST: (data, config = {}) => {
        return request({
            url: `/agent/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商代理管理 - 重置密码
     */
    AgentResetPasswordPOST: (data, config = {}) => {
        return request({
            url: `/agent/resetPassword`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商代理管理 - 解冻代理
     */
    AgentUnlockPOST: (data, config = {}) => {
        return request({
            url: `/agent/unlock`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商代理管理 - 修改代理信息
     */
    AgentUpdatePOST: (data, config = {}) => {
        return request({
            url: `/agent/update`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
