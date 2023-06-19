/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 文档中心管理 - 新增文档
   */
  DocManagementAddDocPOST: (
    data: IAddDocReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
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
  DocManagementOfflineDocPOST: (
    data: IOperationDocReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
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
  DocManagementOnlineDocPOST: (
    data: IOperationDocReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
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
  DocManagementQueryListPOST: (
    data: IQueryDocListReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxyDocManagementResp>> => {
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
  DocManagementQueryOnePOST: (
    data: IQueryDocReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IProxyDocManagementResp>> => {
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
  DocManagementUpdateDocPOST: (
    data: IUpdateDocReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/doc/management/updateDoc`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
