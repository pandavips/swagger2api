/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 结算数据-代理返佣数据
          req =>>
            IAgentSettleReq {
              agentAccount: string //代理帐号
              agentId: number //代理ID
              agentType: number //代理类型 1:直营 2:招募 3:会员申请
              end: string //结束时间
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              parentAccount: string //上级代理
              settleNo: string //结算单号
              start: string //开始时间
              status: number //状态  0:待审核 1：驳回 2：通过
            }
        
          res =>>
            IPageResultAgentSettleResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IAgentSettleResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    SettleAgentPOST: (data = {}, config = {}) => {
      return request({
        url: `/settle/agent`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 结算数据-代理结算数据 - 导出excel
          req =>>
            ISettleagentexportExcelQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: number //状态  0:待审核 1：驳回 2：通过
              agentId: number //代理ID
              settleNo: string //结算单号
              agentAccount: string //代理帐号
              agentType: number //代理类型 1:直营 2:招募 3:会员申请
              parentAccount: string //上级代理
              start: string //开始时间
              end: string //结束时间
            }
          */
    SettleAgentExportExcelGET: (data = {}, config = {}) => {
      return request({
        url: `/settle/agent/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 结算数据-审核
          req =>>
            ICheckPassReq {
              applyNo: number //申请单号
              pass: boolean //是否通过
            }
          */
    SettleApplyCheckPassPOST: (data = {}, config = {}) => {
      return request({
        url: `/settle/apply/checkPass`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 结算数据-代理返佣提出申请列表
          req =>>
            IAgentSettleReq {
              agentAccount: string //代理帐号
              agentId: number //代理ID
              agentType: number //代理类型 1:直营 2:招募 3:会员申请
              end: string //结束时间
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              parentAccount: string //上级代理
              settleNo: string //结算单号
              start: string //开始时间
              status: number //状态  0:待审核 1：驳回 2：通过
            }
        
          res =>>
            IPageResultAgentSettleApplyResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IAgentSettleApplyResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    SettleApplyListPOST: (data = {}, config = {}) => {
      return request({
        url: `/settle/apply/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 结算数据-平台结算数据
          res =>>
            IPageResultPlatformSettleResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IPlatformSettleResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IPlatformSettleReq {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: number //0 待线下结算;1 已结算
            }
          */
    SettlePlatformPOST: (data = {}, config = {}) => {
      return request({
        url: `/settle/platform`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 结算数据-平台结算数据 - 导出excel
          req =>>
            ISettleplatformexportExcelQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: number //0 待线下结算;1 已结算
            }
          */
    SettlePlatformExportExcelGET: (data = {}, config = {}) => {
      return request({
        url: `/settle/platform/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 结算数据-包网商结算数据
          res =>>
            IPageResultProxySettleResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IProxySettleResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IPlatformSettleReq {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: number //0 待线下结算;1 已结算
            }
          */
    SettleProxyPOST: (data = {}, config = {}) => {
      return request({
        url: `/settle/proxy`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 结算数据-包网商结算数据 - 导出excel
          req =>>
            ISettleproxyexportExcelQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: number //0 待线下结算;1 已结算
            }
          */
    SettleProxyExportExcelGET: (data = {}, config = {}) => {
      return request({
        url: `/settle/proxy/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    }
  };
};
