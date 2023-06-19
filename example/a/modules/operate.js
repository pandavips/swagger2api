/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
/* eslint-disable */
// @ts-nocheck
import request from "./index";
export default {
    /**
     * @description: 包网商达成条件配置 - 获取达成条件配置
     */
    OperateConfigAchievingGetAchievingConditionsGET: (data, config = {}) => {
        return request({
            url: `/operate/config/achieving/getAchievingConditions`,
            method: "GET",
            params: data,
            ...config
        });
    },
    /**
     * @description: 包网商达成条件配置 - 更新达成条件配置
     */
    OperateConfigAchievingUpdateAchievingConditionsPOST: (data, config = {}) => {
        return request({
            url: `/operate/config/achieving/updateAchievingConditions`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商配置中心 - 配置中心获取包网商配置
     */
    OperateConfigCenterGetProxyConfigGET: (config = {}) => {
        return request({
            url: `/operate/config/center/getProxyConfig`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 包网商配置中心 - 更新佣金提现流水倍数设置
     */
    OperateConfigCenterUpdateCommissionMultiplePOST: (data, config = {}) => {
        return request({
            url: `/operate/config/center/updateCommissionMultiple`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商配置中心 - 更新充值有效流水倍数
     */
    OperateConfigCenterUpdateDepositMultiplePOST: (data, config = {}) => {
        return request({
            url: `/operate/config/center/updateDepositMultiple`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商配置中心 - 更新邀请码必填设置
     */
    OperateConfigCenterUpdateInvitationCodeSetPOST: (data, config = {}) => {
        return request({
            url: `/operate/config/center/updateInvitationCodeSet`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商配置中心 - 更新提现条件阈值
     */
    OperateConfigCenterUpdateMinimumBalancePOST: (data, config = {}) => {
        return request({
            url: `/operate/config/center/updateMinimumBalance`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商配置中心 - 修改ip最大注册个数限制
     */
    OperateConfigCenterUpdateRegisterAmountPOST: (data, config = {}) => {
        return request({
            url: `/operate/config/center/updateRegisterAmount`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商配置中心 - 用户绑定银行卡限制
     */
    OperateConfigCenterUpdateUserBankCardAmountPOST: (data, config = {}) => {
        return request({
            url: `/operate/config/center/updateUserBankCardAmount`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商配置中心 - 更新会员关联账号
     */
    OperateConfigCenterUpdateUserRelationAccountPOST: (data, config = {}) => {
        return request({
            url: `/operate/config/center/updateUserRelationAccount`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商配置中心游戏比例配置 - 获取游戏比例配置
     */
    OperateConfigGameScaleGetGameScaleGET: (config = {}) => {
        return request({
            url: `/operate/config/gameScale/getGameScale`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 包网商配置中心游戏比例配置 - 更新游戏比例配置
     */
    OperateConfigGameScaleUpdateGameScalePOST: (data, config = {}) => {
        return request({
            url: `/operate/config/gameScale/updateGameScale`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: ip访问限制 - 添加
     */
    OperateConfigIpControlAddPOST: (data, config = {}) => {
        return request({
            url: `/operate/config/ipControl/add`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: ip访问限制 - 删除
     */
    OperateConfigIpControlDelByCodeIdPOST: (id, config = {}) => {
        return request({
            url: `/operate/config/ipControl/del/${id}`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: ip访问限制 - 规则列表
     */
    OperateConfigIpControlListPOST: (data, config = {}) => {
        return request({
            url: `/operate/config/ipControl/list`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: ip访问限制 - 获取地区基础配置
     */
    OperateConfigIpControlRegionListPOST: (config = {}) => {
        return request({
            url: `/operate/config/ipControl/regionList`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 客服配置 - 获取配置列表
     */
    OperateCustomerServicePagePOST: (data, config = {}) => {
        return request({
            url: `/operate/customer/service/page`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 客服配置 - 保存配置
     */
    OperateCustomerServiceSavePOST: (data, config = {}) => {
        return request({
            url: `/operate/customer/service/save`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 客服配置 - 修改状态
     */
    OperateCustomerServiceStatusByCodeIdStatusPOST: (id, status, config = {}) => {
        return request({
            url: `/operate/customer/service/status/${id}/${status}`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 客服配置 - getById
     */
    OperateCustomerServiceByCodeIdPOST: (id, config = {}) => {
        return request({
            url: `/operate/customer/service/${id}`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 用户达成数据查询 - 获取结算达成情况
     */
    OperateGetAchievingPOST: (data, config = {}) => {
        return request({
            url: `/operate/getAchieving`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 包网商有效会员标准设置 - 获取有效会员标准配置
     */
    OperateValidMembersGetProxyValidMembersGET: (config = {}) => {
        return request({
            url: `/operate/validMembers/getProxyValidMembers`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 包网商有效会员标准设置 - 更新有效会员设置
     */
    OperateValidMembersUpdateValidMembersPOST: (data, config = {}) => {
        return request({
            url: `/operate/validMembers/updateValidMembers`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
