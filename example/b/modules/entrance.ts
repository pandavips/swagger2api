/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 代理登录 - 检查踢出信息
   */
  EntranceCheckKickOutGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/entrance/checkKickOut`,
      method: "GET",
            ...config
    });
  },
  /**
   * @description: 代理登录 - 检查踢出信息
   */
  EntranceCheckKickOutPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/entrance/checkKickOut`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 代理登录 - 登录
   */
  EntranceLoginPOST: (
    data: ILoginReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ILoginResp>> => {
    return request({
      url: `/entrance/login`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 代理登录 - 登出接口
   */
  EntranceLogoutGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/entrance/logout`,
      method: "GET",
            ...config
    });
  },
  /**
   * @description: 代理登录 - 登出接口
   */
  EntranceLogoutPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/entrance/logout`,
      method: "POST",
            ...config
    });
  }
  };
