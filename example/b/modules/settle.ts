/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 结算数据 - 代理返佣数据
   */
  SettleAgentPOST: (
    data: IAgentSettleReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultAgentSettleResp>> => {
    return request({
      url: `/settle/agent`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 结算数据 - 代理结算数据 - 导出excel
   */
  SettleAgentExportExcelGET: (
    data: ISettleAgentExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/settle/agent/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 结算数据 - 审核
   */
  SettleApplyCheckPassPOST: (
    data: ICheckPassReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/settle/apply/checkPass`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 结算数据 - 代理返佣提出申请列表
   */
  SettleApplyListPOST: (
    data: IAgentSettleReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultAgentSettleApplyResp>> => {
    return request({
      url: `/settle/apply/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 结算数据 - 平台结算数据
   */
  SettlePlatformPOST: (
    data: IPlatformSettleReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultPlatformSettleResp>> => {
    return request({
      url: `/settle/platform`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 结算数据 - 平台结算数据 - 导出excel
   */
  SettlePlatformExportExcelGET: (
    data: ISettlePlatformExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/settle/platform/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 结算数据 - 包网商结算数据
   */
  SettleProxyPOST: (
    data: IPlatformSettleReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultProxySettleResp>> => {
    return request({
      url: `/settle/proxy`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 结算数据 - 包网商结算数据 - 导出excel
   */
  SettleProxyExportExcelGET: (
    data: ISettleProxyExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/settle/proxy/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  }
  };
