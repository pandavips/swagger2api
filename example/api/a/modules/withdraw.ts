/* eslint-disable */
// @ts-nocheck

/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

import request,{ExtraInInternalAxiosRequestConfig} from "../request";
export default {
  
  /**
   * @description: 提币和提现配置 - 获取数字货币提币配置
   */

  WithdrawConfigGetDigitalByCodeChainPOST: (
    chain:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IWithdrawInfoResp>> => {
    return request({
      url: `/withdraw/config/getDigital/${chain}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 提币和提现配置 - 获取法币提现配置
   */

  WithdrawConfigGetLegerByCodeCurrencyCodePOST: (
    currencyCode:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IWithdrawInfoResp>> => {
    return request({
      url: `/withdraw/config/getLeger/${currencyCode}`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 提币和提现配置 - 设置数字货币提币配置
   */

  WithdrawConfigSetDigitalPOST: (
    data: IWithdrawInfoResp={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/config/setDigital`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币和提现配置 - 设置提现配置
   */

  WithdrawConfigSetLegerPOST: (
    data: IWithdrawInfoResp={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/config/setLeger`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 提现成功回调
   */

  WithdrawDigitalCallbackPOST: (
    data: IWithdrawCallbackReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/callback`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 审核通过
   */

  WithdrawDigitalCheckPassPOST: (
    data: IWithdrawNoChannelTypeReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/checkPass`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 审核拒绝
   */

  WithdrawDigitalCheckRefusePOST: (
    data: IWithdrawRefuseReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/checkRefuse`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 提币记录 - 导出excel
   */

  WithdrawDigitalExportExcelGET: (
    data: IWithdrawDigitalExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 提币信息 - 提现失败
   */

  WithdrawDigitalFailPOST: (
    data: IWithdrawRefuseReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/fail`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 收款信息
   */

  WithdrawDigitalGetCardPOST: (
    data: IDepositNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IDepositBankCardResp>[]> => {
    return request({
      url: `/withdraw/digital/getCard`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 提币记录
   */

  WithdrawDigitalListPOST: (
    data: IWithdrawReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultWithdrawResp>> => {
    return request({
      url: `/withdraw/digital/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 手动发起提现支付重试
   */

  WithdrawDigitalManualReTryWithdrawPOST: (
    data: IWithdrawNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/manualReTryWithdraw`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 代理处理订单数量
   */

  WithdrawDigitalPendingCountPOST: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/pendingCount`,
      method: "POST",
            ...config
    });
  },  
  /**
   * @description: 提币信息 - 提现成功（仅线下转账方式）
   */

  WithdrawDigitalSuccessPOST: (
    data: IWithdrawNoReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/success`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 汇总信息
   */

  WithdrawDigitalSummaryPOST: (
    data: IDepositSummaryReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IWithdrawSummaryResp>> => {
    return request({
      url: `/withdraw/digital/summary`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提币信息 - 确认提现
   */

  WithdrawDigitalWithdrawConfirmPOST: (
    data: IWithdrawNoChannelTypeReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/digital/withdrawConfirm`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 提现/币限制 - 调整
   */

  WithdrawLimitAdjustPOST: (
    data: IAdjustWithdrawLimitReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/withdraw/limit/adjust`,
      method: "POST",
                      data: data,
                            ...config
    });
  }  };
