/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 短信通道管理-查询短信通道列表      
      req =>>
        IQuerySmsChannelReq {
          status: number //状态 1:启用 0:禁用
          wayType: number //渠道推送方式 1:短信 2:邮件
        }
      */
    SmsChannelAccountQueryListPOST: (data: IQuerySmsChannelReq = {}, config = {}): Promise<ISmsChannelResq[]> => {
      return request({
        url: `/sms/channel/account/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 短信通道管理-修改短信通道      
      req =>>
        ISmsChannelReq {
          bizNo: string //编码
          status: number //状态 1:启用 0:禁用
          usageScenarioTypes: string //适用业务类型集合(1:注册；2:提现；3:提币；4:重置密码)
          wayType: number //渠道推送方式 1:短信 2:邮件
        }
      */
    SmsChannelAccountUpdatePOST: (data: ISmsChannelReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/sms/channel/account/update`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
