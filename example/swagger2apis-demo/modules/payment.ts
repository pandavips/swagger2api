/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 支付渠道管理-查询支付渠道帐号列表      
      req =>>
        IQueryPaymentChannelReq {
          currencyCode: string //币种代码
          status: number //状态 1:启用 0:禁用
        }
      */
    PaymentChannelAccountQueryListPOST: (data: IQueryPaymentChannelReq = {}, config = {}): Promise<IPaymentChannelResq[]> => {
      return request({
        url: `/payment/channel/account/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 支付渠道管理-新增或修改支付渠道      
      req =>>
        IPaymentChannelReq {
          channelType: string //渠道类型
          currencyCode: string //币种代码
          ext: string //其它扩展条件等
          merchantKey: string //商户key
          merchantNo: string //商户号
          sortOrder: number //排序
          status: number //状态 1:启用 0:禁用
        }
      */
    PaymentChannelAccountUpdatePOST: (data: IPaymentChannelReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/payment/channel/account/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 支付渠道管理-新增或修改支付渠道排序      
      req =>>
        IUpdateSortOrderReq {
          channelType: string //渠道类型
          currencyCode: string //币种代码
          sortOrder: number //排序
        }
      */
    PaymentChannelAccountUpdateSortorderPOST: (data: IUpdateSortOrderReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/payment/channel/account/update/sortorder`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 支付渠道管理-查询支付渠道列表（boss分配给包网商的）      
      req =>>
        IQueryPaymentChannelReq {
          currencyCode: string //币种代码
          status: number //状态 1:启用 0:禁用
        }
      */
    PaymentChannelQueryListPOST: (data: IQueryPaymentChannelReq = {}, config = {}): Promise<object[]> => {
      return request({
        url: `/payment/channel/queryList`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
