/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 充币信息-审核通过      
      req =>>
        IDepositNoReq {
          depositNo: string //充值单号
        }
      */
    DepositCheckPassPOST: (data: IDepositNoReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/deposit/checkPass`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 充币信息-审核拒绝      
      req =>>
        IDepositRefuseReq {
          depositNo: string //充值单号
          refuseDesc: string //拒绝理由
        }
      */
    DepositCheckRefusePOST: (data: IDepositRefuseReq = {}, config = {}): Promise<string> => {
      return request({
        url: `/deposit/checkRefuse`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 充币和充值配置-获取数字货币充币配置      
      req =>>
        IWithdrawInfoResp {
          chain: string //链:TRON,BSC,ETH；设置法币传对应法币
          chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
          fee: number //手续费
          feeType: number //手续费类型：1 百分比；2 固定值
          status: number //总提币状态(1:开启 0:关闭)
          times: number //限制次数
          withdrawMax: number //最大提币金额
          withdrawMin: number //最小提币金额
        }
      */
    DepositConfigGetDigital$chain$POST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/deposit/config/getDigital/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 充币和充值配置-获取数字货币充币配置      
      req =>>
        IWithdrawInfoResp {
          chain: string //链:TRON,BSC,ETH；设置法币传对应法币
          chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
          fee: number //手续费
          feeType: number //手续费类型：1 百分比；2 固定值
          status: number //总提币状态(1:开启 0:关闭)
          times: number //限制次数
          withdrawMax: number //最大提币金额
          withdrawMin: number //最小提币金额
        }
      */
    DepositConfigGetDigitalByCodePOST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/deposit/config/getDigital/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 充币和充值配置-获取数字货币充币配置      
      req =>>
        IWithdrawInfoResp {
          chain: string //链:TRON,BSC,ETH；设置法币传对应法币
          chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
          fee: number //手续费
          feeType: number //手续费类型：1 百分比；2 固定值
          status: number //总提币状态(1:开启 0:关闭)
          times: number //限制次数
          withdrawMax: number //最大提币金额
          withdrawMin: number //最小提币金额
        }
      */
    DepositConfigGetDigitalByCodeChainPOST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/deposit/config/getDigital/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 充币和充值配置-获取法币充值配置      
      req =>>
        IWithdrawInfoResp {
          chain: string //链:TRON,BSC,ETH；设置法币传对应法币
          chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
          fee: number //手续费
          feeType: number //手续费类型：1 百分比；2 固定值
          status: number //总提币状态(1:开启 0:关闭)
          times: number //限制次数
          withdrawMax: number //最大提币金额
          withdrawMin: number //最小提币金额
        }
      */
    DepositConfigGetLeger$currencyCode$POST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/deposit/config/getLeger/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 充币和充值配置-获取法币充值配置      
      req =>>
        IWithdrawInfoResp {
          chain: string //链:TRON,BSC,ETH；设置法币传对应法币
          chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
          fee: number //手续费
          feeType: number //手续费类型：1 百分比；2 固定值
          status: number //总提币状态(1:开启 0:关闭)
          times: number //限制次数
          withdrawMax: number //最大提币金额
          withdrawMin: number //最小提币金额
        }
      */
    DepositConfigGetLegerByCodePOST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/deposit/config/getLeger/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 充币和充值配置-获取法币充值配置      
      req =>>
        IWithdrawInfoResp {
          chain: string //链:TRON,BSC,ETH；设置法币传对应法币
          chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
          fee: number //手续费
          feeType: number //手续费类型：1 百分比；2 固定值
          status: number //总提币状态(1:开启 0:关闭)
          times: number //限制次数
          withdrawMax: number //最大提币金额
          withdrawMin: number //最小提币金额
        }
      */
    DepositConfigGetLegerByCodeCurrencyCodePOST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/deposit/config/getLeger/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 充币和充值配置-设置数字货币充币配置      
      req =>>
        IWithdrawInfoResp {
          chain: string //链:TRON,BSC,ETH；设置法币传对应法币
          chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
          fee: number //手续费
          feeType: number //手续费类型：1 百分比；2 固定值
          status: number //总提币状态(1:开启 0:关闭)
          times: number //限制次数
          withdrawMax: number //最大提币金额
          withdrawMin: number //最小提币金额
        }
      */
    DepositConfigSetDigitalPOST: (data: IWithdrawInfoResp = {}, config = {}): Promise<null> => {
      return request({
        url: `/deposit/config/setDigital`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 充币和充值配置-设置提现配置      
      req =>>
        ISheZhiCunKuanCanShuDuiXiang {
          chain: string //链:TRON,BSC,ETH；设置法币传对应法币
          chainStatus: number //链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用
          fee: number //手续费
          feeType: number //手续费类型：1 百分比；2 固定值
          status: number //总提币状态(1:开启 0:关闭)
          withdrawMax: number //最大提币金额
          withdrawMin: number //最小提币金额
        }
      */
    DepositConfigSetLegerPOST: (data: ISheZhiCunKuanCanShuDuiXiang = {}, config = {}): Promise<null> => {
      return request({
        url: `/deposit/config/setLeger`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 充币信息-充币记录 - 导出excel      
      req =>>
        IDepositexportExcelQueryParams {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          status: number //状态：0:待审核 1:审核通过 2:审核拒绝
          userId: number //用户编号
          userAccount: string //用户账号
          depositNo: number //订单编号
          currencyType: number //充值类型:1 数字货币；2 法币
          depositWay: number //充值方式，0:银行卡-普通充值，1：银行卡-渠道充值，2:第三方-普通充值，3：第三方-渠道充值
          fromAddress: string //充币地址
          start: string //交易时间开始
          end: string //交易时间结束
          channelOrderNo: string //第三方订单号
          channelType: string //渠道类型
        }
      */
    DepositExportExcelGET: (data: IDepositexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/deposit/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 充币信息-收款信息      
      req =>>
        IDepositNoReq {
          depositNo: string //充值单号
        }
      */
    DepositGetCardPOST: (data: IDepositNoReq = {}, config = {}): Promise<IDepositBankCardResp[]> => {
      return request({
        url: `/deposit/getCard`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 充币信息-充币记录      
      req =>>
        IDepositQueryReq {
          channelOrderNo: string //第三方订单号
          channelType: string //渠道类型
          currencyType: number //充值类型:1 数字货币；2 法币
          depositNo: number //订单编号
          depositWay: number //充值方式，0:银行卡-普通充值，1：银行卡-渠道充值，2:第三方-普通充值，3：第三方-渠道充值
          end: string //交易时间结束
          fromAddress: string //充币地址
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          start: string //交易时间开始
          status: number //状态：0:待审核 1:审核通过 2:审核拒绝
          userAccount: string //用户账号
          userId: number //用户编号
        }
    
      res =>>
        IPageResultDepositQueryResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IDepositQueryResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
      */
    DepositListPOST: (data: IDepositQueryReq = {}, config = {}): Promise<IPageResultDepositQueryResp> => {
      return request({
        url: `/deposit/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 充币信息-待理处理订单数量  */
    DepositPendingCountPOST: (config = {}): Promise<number> => {
      return request({
        url: `/deposit/pendingCount`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 充值统计-代理伞下用户充值排名前N查询      
      req =>>
        IDaiLiSanXiaYongHuChongZhiTongJiQingQiuDuiXiang {
          end: string //结束时期
          proxyId: number //包网商id
          start: string //开始时期
          topN: number //排名前N的数据
        }
      */
    DepositStatisticsAgentTopNPOST: (
      data: IDaiLiSanXiaYongHuChongZhiTongJiQingQiuDuiXiang = {},
      config = {}
    ): Promise<IDaiLiSanXiaYongHuChongZhiTongJiFanHuiDuiXiang[]> => {
      return request({
        url: `/deposit/statistics/agentTopN`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 充值统计-代理伞下用户充值排名前N导出excel      
      req =>>
        IDepositstatisticsagentTopNexportExcelQueryParams {
          proxyId: number //包网商id
          start: string //开始时期
          end: string //结束时期
          topN: number //排名前N的数据
        }
      */
    DepositStatisticsAgentTopNExportExcelGET: (data: IDepositstatisticsagentTopNexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/deposit/statistics/agentTopN/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 充值统计-用户充值排名前N查询      
      req =>>
        IYongHuChongZhiTongJiQingQiuDuiXiang {
          agentId: number //代理id
          end: string //结束时期
          proxyId: number //包网商id
          start: string //开始时期
          topN: number //排名前N的数据
        }
      */
    DepositStatisticsUserTopNPOST: (data: IYongHuChongZhiTongJiQingQiuDuiXiang = {}, config = {}): Promise<IYongHuChongZhiTongJiFanHuiDuiXiang[]> => {
      return request({
        url: `/deposit/statistics/userTopN`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 充值统计-用户充值排名前N导出excel      
      req =>>
        IDepositstatisticsuserTopNexportExcelQueryParams {
          proxyId: number //包网商id
          agentId: number //代理id
          start: string //开始时期
          end: string //结束时期
          topN: number //排名前N的数据
        }
      */
    DepositStatisticsUserTopNExportExcelGET: (data: IDepositstatisticsuserTopNexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/deposit/statistics/userTopN/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 充币信息-汇总信息      
      req =>>
        IDepositSummaryReq {
          agentLayerCode: string //代理layer
          end: string //结束日期
          start: string //开始日期
          userId: string //代理ID
        }
    
      res =>>
        IDepositSummaryResp {
          depositAmount: number //总存款
          depositDigitalAmount: number //USDT存款
          depositLegalAmount: number //法币存款
        }
      */
    DepositSummaryPOST: (data: IDepositSummaryReq = {}, config = {}): Promise<IDepositSummaryResp> => {
      return request({
        url: `/deposit/summary`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
