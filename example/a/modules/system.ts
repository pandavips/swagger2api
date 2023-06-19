/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 系统调账 - 调账
   */
  SystemAdjustmentAddPOST: (
    data: IAdjustmentReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/adjustment/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 系统调账 - 查询包网商总调账金额
   */
  SystemAdjustmentGetProxyAdjustSumGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxySumResp>> => {
    return request({
      url: `/system/adjustment/getProxyAdjustSum`,
      method: "GET",
            ...config
    });
  },
  /**
   * @description: 系统调账 - 调账记录列表查询
   */
  SystemAdjustmentQueryPOST: (
    data: IPaging,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultSystemDepositWithdrawBo>> => {
    return request({
      url: `/system/adjustment/query`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理系统管理 - 获取占成和返佣上限
   */
  SystemGetRewardRatePOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyRewardRateResp>> => {
    return request({
      url: `/system/getRewardRate`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 代理系统管理 - 代理基础信息
   */
  SystemGetSummaryPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxySummerResp>> => {
    return request({
      url: `/system/getSummary`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 菜单管理接口 - 新增菜单
   */
  SystemMenuAddPOST: (
    data: IMenuBaseVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/menu/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 菜单管理接口 - 删除菜单
   */
  SystemMenuDeleteGET: (
    data: ISystemMenuDeleteGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/menu/delete`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 菜单管理接口 - 删除菜单
   */
  SystemMenuDeletePOST: (
    data: ISystemMenuDeletePOSTReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/menu/delete`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 菜单管理接口 - 查询所有菜单
   */
  SystemMenuQueryAllGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IMenuResponseVo>[]> => {
    return request({
      url: `/system/menu/queryAll`,
      method: "GET",
            ...config
    });
  },
  /**
   * @description: 菜单管理接口 - 修改菜单
   */
  SystemMenuUpdatePOST: (
    data: IMenuUpdateVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/menu/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 角色管理接口 - 新增角色
   */
  SystemRoleAddPOST: (
    data: IRoleBaseVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 角色管理接口 - 授权角色菜单
   */
  SystemRoleAuthorizeMenuPOST: (
    data: IRoleMenuRequestVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/authorizeMenu`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 角色管理接口 - 锁定或解锁角色
   */
  SystemRoleChangeLockPOST: (
    data: IRoleLockRequestVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/changeLock`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 角色管理接口 - 删除角色
   */
  SystemRoleDeleteGET: (
    data: ISystemRoleDeleteGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/delete`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 角色管理接口 - 删除角色
   */
  SystemRoleDeletePOST: (
    data: ISystemRoleDeletePOSTReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/delete`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 角色管理接口 - 查询所有角色
   */
  SystemRoleQueryAllGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IJiaoSeXiangYingXinXi>[]> => {
    return request({
      url: `/system/role/queryAll`,
      method: "GET",
            ...config
    });
  },
  /**
   * @description: 角色管理接口 - 查询单个角色
   */
  SystemRoleQueryByIdGET: (
    data: ISystemRoleQueryByIdGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IJiaoSeXiangYingXinXi>> => {
    return request({
      url: `/system/role/queryById`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 角色管理接口 - 查询角色以及对应的菜单信息
   */
  SystemRoleQueryDetailGET: (
    data: ISystemRoleQueryDetailGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IRoleMenuResponseVo>> => {
    return request({
      url: `/system/role/queryDetail`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 角色管理接口 - 分页查询角色信息
   */
  SystemRoleQueryPagingPOST: (
    data: IRoleQueryRequestVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultJiaoSeXiangYingXinXi>> => {
    return request({
      url: `/system/role/queryPaging`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 角色管理接口 - 修改角色
   */
  SystemRoleUpdatePOST: (
    data: IRoleUpdateVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/role/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理系统管理 - 修改代理基础信息
   */
  SystemUpdateSummaryPOST: (
    data: IProxyBaseUpdateReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/updateSummary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户相关接口 - 修改用户密码
   */
  SystemUserChangePasswordPOST: (
    data: IUserPasswordRequestProxyVo,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/system/user/changePassword`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户相关接口 - 获取对应用户的角色信息
   */
  SystemUserGetRoleGET: (
    data: ISystemUserGetRoleGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IJiaoSeXiangYingXinXi>[]> => {
    return request({
      url: `/system/user/getRole`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户相关接口 - 获取用户角色和菜单信息
   */
  SystemUserGetRoleMenuGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserRoleMenuVo>> => {
    return request({
      url: `/system/user/getRoleMenu`,
      method: "GET",
            ...config
    });
  }
  };
