/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 用户管理 - 新增会员
   */
  UserAddUserPOST: (
    data: IAddUserReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/addUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 银行卡 - 详情
   */
  UserBankCardDetailPOST: (
    data: IUserBankCardDetailReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBankCardDetailResp>> => {
    return request({
      url: `/user/bankCard/detail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 编辑
   */
  UserBankCardUpdatePOST: (
    data: IUserBankCardUpdateReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/bankCard/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 银行卡
   */
  UserBankCardsPOST: (
    data: IUserBankCardQueryReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserBankCardQueryResp>[]> => {
    return request({
      url: `/user/bankCards`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 子账号管理 - 添加子账号
   */
  UserChildAddPOST: (
    data: IAddChildReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/child/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 子账号管理 - 授权用户角色
   */
  UserChildAuthorizeRolePOST: (
    data: IUserRoleRequestVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/child/authorizeRole`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 子账号管理 - 查询子账号
   */
  UserChildQueryListPOST: (
    data: IPaging,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyChildResp>> => {
    return request({
      url: `/user/child/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 禁用用户
   */
  UserDisableUserPOST: (
    data: IUpdateUserStatusReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/disableUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 批量禁用用户
   */
  UserDisableUserBatchPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/disableUser/batch`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 用户管理 - 启用用户
   */
  UserEnableUserPOST: (
    data: IUpdateUserStatusReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/enableUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 批量启用用户
   */
  UserEnableUserBatchPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/enableUser/batch`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 用户管理 - 封锁/解封用户
   */
  UserForbiddenUserPOST: (
    data: IXiuGaiYongHuFengJinZhuangTai,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/forbiddenUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 游戏记录相关 - 导出excel
   */
  UserGameExportExcelGET: (
    data: IUserGameExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/game/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 游戏记录相关 - 游戏记录
   */
  UserGameGetRecordPOST: (
    data: IUserGameRecordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultUserGameRecordResp>> => {
    return request({
      url: `/user/game/getRecord`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 游戏记录相关 - 概况统计
   */
  UserGameSummaryPOST: (
    data: IGameSummaryReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IGameSummaryResp>> => {
    return request({
      url: `/user/game/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 踢下线
   */
  UserKickUserPOST: (
    data: IUserIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/kickUser`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 修改用户标签
   */
  UserLabelUpdatePOST: (
    data: IUserLabelUpdate,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/label/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 关联账号
   */
  UserMatchPOST: (
    data: IUserIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserRelationAccountResp>[]> => {
    return request({
      url: `/user/match`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 查询用户账户
   */
  UserQueryPOST: (
    data: IUserIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserAccountResp>> => {
    return request({
      url: `/user/query`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 个人数据概况
   */
  UserQueryDataSummaryPOST: (
    data: IUserIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserDataSummary>> => {
    return request({
      url: `/user/queryDataSummary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 查询用户详情
   */
  UserQueryDetailPOST: (
    data: IUserIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserDetailResp>> => {
    return request({
      url: `/user/queryDetail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 查询用户列表
   */
  UserQueryListPOST: (
    data: IQueryUserListReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultUserResp>> => {
    return request({
      url: `/user/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 查询用户操作日志
   */
  UserQueryLogPOST: (
    data: IUserOperationLogReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultOperationLogResp>> => {
    return request({
      url: `/user/queryLog`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 修改备注
   */
  UserReminderUpdatePOST: (
    data: IUserReminderUpdate,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/reminder/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 解锁密码错误限制
   */
  UserRemoveUserPwdErrCountPOST: (
    data: IJieSuoMiMaCuoWuXianZhiCanShuDuiXiang,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/removeUserPwdErrCount`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 重置手机号
   */
  UserResetMobileNoPOST: (
    data: IResetMobileNoReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/resetMobileNo`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 重置登录密码
   */
  UserResetPasswordPOST: (
    data: IResetPasswordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/resetPassword`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 重置资金密码
   */
  UserResetSecretPasswordPOST: (
    data: IResetPasswordReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/resetSecretPassword`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户统计 - 导出excel
   */
  UserStatisticsExportExcelGET: (
    data: IUserStatisticsExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/user/statistics/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户统计 - 总用户信息
   */
  UserStatisticsInfoPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserStatisticsInfoResp>> => {
    return request({
      url: `/user/statistics/info`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 用户统计 - 记录
   */
  UserStatisticsListPOST: (
    data: IUserStatisticsReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserStatisticsResp>[]> => {
    return request({
      url: `/user/statistics/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户管理 - 团队数据
   */
  UserTeamPOST: (
    data: ITeamStatisticsReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ITeamStatisticsResp>> => {
    return request({
      url: `/user/team`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
