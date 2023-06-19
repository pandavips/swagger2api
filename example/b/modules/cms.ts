/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 公告管理 - 添加公告
   */
  CmsArticleAddPOST: (
    data: IAddArticleReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/article/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 公告管理 - 停用公告
   */
  CmsArticleDisablePOST: (
    data: IArticleIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/article/disable`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 公告管理 - 启用公告
   */
  CmsArticlePublishPOST: (
    data: IArticleIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/article/publish`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 公告管理 - 查询公告列表
   */
  CmsArticleQueryListPOST: (
    data: IQueryArticleReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultArticleResp>> => {
    return request({
      url: `/cms/article/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 公告管理 - 查询公告详情
   */
  CmsArticleQueryOnePOST: (
    data: IArticleIdReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IArticleResp>> => {
    return request({
      url: `/cms/article/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 公告管理 - 修改公告
   */
  CmsArticleUpdatePOST: (
    data: IUpdateArticleReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/article/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: banner管理 - 添加横幅
   */
  CmsBannerAddPOST: (
    data: IAddBannerReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/banner/add`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: banner管理 - 停用横幅
   */
  CmsBannerDisablePOST: (
    data: IBannerNoReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/banner/disable`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: banner管理 - 启用横幅
   */
  CmsBannerPublishPOST: (
    data: IBannerNoReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/banner/publish`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: banner管理 - 查询横幅列表
   */
  CmsBannerQueryListPOST: (
    data: IQueryBannerReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultBannerResp>> => {
    return request({
      url: `/cms/banner/queryList`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: banner管理 - 查询横幅详情
   */
  CmsBannerQueryOnePOST: (
    data: IBannerNoReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IBannerResp>> => {
    return request({
      url: `/cms/banner/queryOne`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: banner管理 - 修改横幅
   */
  CmsBannerUpdatePOST: (
    data: IUpdateBannerReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/cms/banner/update`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 标签管理 - 查询所有用户标签
   */
  CmsLabelQueryAllGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUserLabelResp>[]> => {
    return request({
      url: `/cms/label/queryAll`,
      method: "GET",
            ...config
    });
  }
  };
