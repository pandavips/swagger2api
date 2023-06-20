/* eslint-disable */
// @ts-nocheck

/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

import request,{ExtraInInternalAxiosRequestConfig} from "../request";
export default {
  
  /**
   * @description: 邀请海报管理 - 新增邀请海报
   */

  InvitationPosterAddPosterPOST: (
    data: IAddPosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/invitation/poster/addPoster`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 下架邀请海报
   */

  InvitationPosterOfflinePosterPOST: (
    data: IOperationPosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/invitation/poster/offlinePoster`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 发布邀请海报
   */

  InvitationPosterOnlinePosterPOST: (
    data: IOperationPosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/invitation/poster/onlinePoster`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 查询邀请海报列表
   */

  InvitationPosterQueryListPOST: (
    data: IPaging={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyInvitationPosterResp>> => {
    return request({
      url: `/invitation/poster/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 查询单条邀请海报信息
   */

  InvitationPosterQueryOnePOST: (
    data: IOperationPosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyInvitationPosterResp>> => {
    return request({
      url: `/invitation/poster/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 邀请海报管理 - 更新邀请海报
   */

  InvitationPosterUpdatePosterPOST: (
    data: IUpdatePosterReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/invitation/poster/updatePoster`,
      method: "POST",
                      data: data,
                            ...config
    });
  }  };
