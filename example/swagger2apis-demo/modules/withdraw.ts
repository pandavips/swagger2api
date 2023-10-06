/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 提币和提现配置-获取数字货币提币配置      
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
    WithdrawConfigGetDigital$chain$POST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/withdraw/config/getDigital/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 提币和提现配置-获取数字货币提币配置      
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
    WithdrawConfigGetDigitalByCodePOST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/withdraw/config/getDigital/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 提币和提现配置-获取数字货币提币配置      
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
    WithdrawConfigGetDigitalByCodeChainPOST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/withdraw/config/getDigital/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 提币和提现配置-获取法币提现配置      
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
    WithdrawConfigGetLeger$currencyCode$POST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/withdraw/config/getLeger/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 提币和提现配置-获取法币提现配置      
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
    WithdrawConfigGetLegerByCodePOST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/withdraw/config/getLeger/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 提币和提现配置-获取法币提现配置      
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
    WithdrawConfigGetLegerByCodeCurrencyCodePOST: (code: string = "", config = {}): Promise<IWithdrawInfoResp> => {
      return request({
        url: `/withdraw/config/getLeger/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 提币和提现配置-设置数字货币提币配置      
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
    WithdrawConfigSetDigitalPOST: (data: IWithdrawInfoResp = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/config/setDigital`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币和提现配置-设置提现配置      
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
    WithdrawConfigSetLegerPOST: (data: IWithdrawInfoResp = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/config/setLeger`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币信息-审核通过（数字货币调用）      
      req =>>
        IWithdrawNoChannelTypeReq {
          channelType: string //通道类型
          withdrawNo: string //提币/提现单号
        }
      */
    WithdrawDigitalCheckPassPOST: (data: IWithdrawNoChannelTypeReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/digital/checkPass`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币信息-审核拒绝      
      req =>>
        IWithdrawRefuseReq {
          channelType: string //通道类型
          refuseDesc: string //拒绝理由
          withdrawNo: string //提币/提现单号
        }
      */
    WithdrawDigitalCheckRefusePOST: (data: IWithdrawRefuseReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/digital/checkRefuse`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币信息-提币记录 - 导出excel      
      req =>>
        IWithdrawdigitalexportExcelQueryParams {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          withdrawNo: string //提现/币单号
          userId: number //用户编号
          userAccount: string //用户账号
          currencyType: number //提款类型：1 数字货币；2 法币
          status: number //状态 0:待审核 1:审核通过 3:提币中 4:提币失败 8:提币成功
          withdrawWay: number //提现方式，1：线上，2：线下
          address: string //提币地址
          start: string //交易时间开始
          end: string //交易时间结束
          channelOrderNo: string //第三方订单号
          withdrawType: number //提币类型 1:外部提币 2:内部提币 3：系统提现
          channelType: string //渠道类型
        }
      */
    WithdrawDigitalExportExcelGET: (data: IWithdrawdigitalexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/digital/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 提币信息-提现失败      
      req =>>
        IWithdrawRefuseReq {
          channelType: string //通道类型
          refuseDesc: string //拒绝理由
          withdrawNo: string //提币/提现单号
        }
      */
    WithdrawDigitalFailPOST: (data: IWithdrawRefuseReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/digital/fail`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币信息-收款信息      
      req =>>
        IDepositNoReq {
          depositNo: string //充值单号
        }
      */
    WithdrawDigitalGetCardPOST: (data: IDepositNoReq = {}, config = {}): Promise<IDepositBankCardResp[]> => {
      return request({
        url: `/withdraw/digital/getCard`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币信息-提币记录      
      res =>>
        IPageResultWithdrawResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IWithdrawResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IWithdrawReq {
          address: string //提币地址
          channelOrderNo: string //第三方订单号
          channelType: string //渠道类型
          currencyType: number //提款类型：1 数字货币；2 法币
          end: string //交易时间结束
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          start: string //交易时间开始
          status: number //状态 0:待审核 1:审核通过 3:提币中 4:提币失败 8:提币成功
          userAccount: string //用户账号
          userId: number //用户编号
          withdrawNo: string //提现/币单号
          withdrawType: number //提币类型 1:外部提币 2:内部提币 3：系统提现
          withdrawWay: number //提现方式，1：线上，2：线下
        }
      */
    WithdrawDigitalListPOST: (data: IWithdrawReq = {}, config = {}): Promise<IPageResultWithdrawResp> => {
      return request({
        url: `/withdraw/digital/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币信息-手动发起提现支付重试      
      req =>>
        IWithdrawNoReq {
          channelType: string //通道类型
          withdrawNo: string //提币/提现单号
        }
      */
    WithdrawDigitalManualReTryWithdrawPOST: (data: IWithdrawNoReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/digital/manualReTryWithdraw`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 提币信息-代理处理订单数量  */
    WithdrawDigitalPendingCountPOST: (config = {}): Promise<number> => {
      return request({
        url: `/withdraw/digital/pendingCount`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 提币信息-提现成功（仅线下转账方式）      
      req =>>
        IWithdrawNoReq {
          channelType: string //通道类型
          withdrawNo: string //提币/提现单号
        }
      */
    WithdrawDigitalSuccessPOST: (data: IWithdrawNoReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/digital/success`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币信息-汇总信息      
      req =>>
        IDepositSummaryReq {
          agentLayerCode: string //代理layer
          end: string //结束日期
          start: string //开始日期
          userId: string //代理ID
        }
    
      res =>>
        IWithdrawSummaryResp {
          withdrawAmount: number //总提款
          withdrawDigitalAmount: number //USDT提款
          withdrawLegalAmount: number //法币提款
        }
      */
    WithdrawDigitalSummaryPOST: (data: IDepositSummaryReq = {}, config = {}): Promise<IWithdrawSummaryResp> => {
      return request({
        url: `/withdraw/digital/summary`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提币信息-确认提现（线上渠道）      
      req =>>
        IWithdrawNoChannelTypeReq {
          channelType: string //通道类型
          withdrawNo: string //提币/提现单号
        }
      */
    WithdrawDigitalWithdrawConfirmPOST: (data: IWithdrawNoChannelTypeReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/digital/withdrawConfirm`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 提现/币限制-调整      
      req =>>
        IAdjustWithdrawLimitReq {
          amount: number //金额
          type: number //类型：0：减少，1：增加
          userId: number //用户id
        }
      */
    WithdrawLimitAdjustPOST: (data: IAdjustWithdrawLimitReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/withdraw/limit/adjust`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 提现/币限制-调整记录  */
    WithdrawLimitAdjustRecord$userId$GET: (code: string = "", config = {}): Promise<IUserTurnoverHistoryResp[]> => {
      return request({
        url: `/withdraw/limit/adjust/record/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 提现/币限制-调整记录  */
    WithdrawLimitAdjustRecordByCodeGET: (code: string = "", config = {}): Promise<IUserTurnoverHistoryResp[]> => {
      return request({
        url: `/withdraw/limit/adjust/record/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 提现/币限制-调整记录  */
    WithdrawLimitAdjustRecordByCodeUserIdGET: (code: string = "", config = {}): Promise<IUserTurnoverHistoryResp[]> => {
      return request({
        url: `/withdraw/limit/adjust/record/${code}`,
        method: "GET",
        ...config
      });
    }
  };
};
