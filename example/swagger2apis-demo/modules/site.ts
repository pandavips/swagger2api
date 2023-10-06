/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 站内信管理-查询站内信      
      res =>>
        IPageResultSiteMessageResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: ISiteMessageResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        ISiteMessageReq {
          bizType: string //业务类型
          end: string //结束时间
          id: number //站内信id
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          pushWay: number //方式 1.站内信 2.邮件 3.短信
          sendType: string //发送类型
          start: string //开始时间
          status: string //状态
        }
      */
    SiteMessageListPOST: (data: ISiteMessageReq = {}, config = {}): Promise<IPageResultSiteMessageResp> => {
      return request({
        url: `/site/message/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 站内信管理-手动发送站内信      
      req =>>
        ISiteMessageSendReq {
          content: string //内容
          objectContent: string[] //发送对象内容，对象类型对应的具体内容，例如存用户ID，具体的vip等级等，多个用逗号隔开
          objectType: number //发送对象类型，例如指定vip，指定会员，指定代理等
          pushWay: number //发送方式 1.站内信 2.电子邮箱 3.短信
          sendTime: string //发送时间
          subject: string //标题，邮件必填
        }
      */
    SiteMessageManualSendPOST: (data: ISiteMessageSendReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/site/message/manual/send`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 站内信管理-手动补偿系统发送的站内信      
      req =>>
        ISitemessagemanualsyscompensateQueryParams {
          bizNo: string //bizNo
          subType: string //subType
        }
      */
    SiteMessageManualSysCompensatePOST: (data: ISitemessagemanualsyscompensateQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/site/message/manual/sys/compensate`,
        method: "POST",
        params: data,
        ...config
      });
    },
    /**
     * @description: 站内信管理-查询包网商推送支持的方式  */
    SiteMessageQueryPushWayGET: (config = {}): Promise<number[]> => {
      return request({
        url: `/site/message/queryPushWay`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 站内信管理-已读列表      
      res =>>
        IPageResultUserRelationAccountResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IUserRelationAccountResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        ISiteMessageReq {
          bizType: string //业务类型
          end: string //结束时间
          id: number //站内信id
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          pushWay: number //方式 1.站内信 2.邮件 3.短信
          sendType: string //发送类型
          start: string //开始时间
          status: string //状态
        }
      */
    SiteMessageReadListPOST: (data: ISiteMessageReq = {}, config = {}): Promise<IPageResultUserRelationAccountResp> => {
      return request({
        url: `/site/message/read/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 站内信管理-撤回      
      req =>>
        ISiteMessageReq {
          bizType: string //业务类型
          end: string //结束时间
          id: number //站内信id
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          pushWay: number //方式 1.站内信 2.邮件 3.短信
          sendType: string //发送类型
          start: string //开始时间
          status: string //状态
        }
      */
    SiteMessageRollbackPOST: (data: ISiteMessageReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/site/message/rollback`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
