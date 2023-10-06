/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 包网商返佣-批量审批      
      req =>>
        IPiLiangShenPiFanYongJiLuQingQiu {
          rakeBackNoList: string[] //返佣编号
          remarks: string //备注（拒绝备注）
          status: number //审批结果：1.通过 2.拒绝
          type: number //返佣类型 1:充值返佣 2:有效流水返佣
        }
      */
    RakebackAuditBatchPOST: (data: IPiLiangShenPiFanYongJiLuQingQiu = {}, config = {}): Promise<null> => {
      return request({
        url: `/rakeback/auditBatch`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商返佣-配置返佣规则      
      req =>>
        IFanYongGuiZePeiZhiQingQiu {
          achievingAmount: number //返佣达成金额
          autoRakeback: number //返佣发放方式：1:自动 0:手动
          isAgent: boolean //是否是代理 true:是 false:否
          levelFourRate: number //直属四级代理返佣比例
          levelOneRate: number //直属一级代理返佣比例
          levelThreeRate: number //直属三级代理返佣比例
          levelTwoRate: number //直属二级代理返佣比例
          status: number //返佣开关 1:开启 0:关闭（默认）
          type: number //返佣类型 1:充值返佣 2:有效流水返佣
        }
      */
    RakebackConfigRulePOST: (data: IFanYongGuiZePeiZhiQingQiu = {}, config = {}): Promise<null> => {
      return request({
        url: `/rakeback/configRule`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商返佣-查询返佣规则      
      res =>>
        IFanYongGuiZePeiZhi {
          achievingAmount: number //返佣达成金额
          autoRakeback: number //返佣发放方式：1:自动 0:手动
          isAgent: boolean //是否是代理 true:是 false:否
          levelFourRate: number //直属四级代理返佣比例
          levelOneRate: number //直属一级代理返佣比例
          levelThreeRate: number //直属三级代理返佣比例
          levelTwoRate: number //直属二级代理返佣比例
          status: number //返佣开关 1:开启 0:关闭（默认）
          type: number //返佣类型 1:充值返佣 2:有效流水返佣
        }
      */
    RakebackGetRule$type$GET: (code: string = "", config = {}): Promise<IFanYongGuiZePeiZhi> => {
      return request({
        url: `/rakeback/getRule/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 包网商返佣-查询返佣规则      
      res =>>
        IFanYongGuiZePeiZhi {
          achievingAmount: number //返佣达成金额
          autoRakeback: number //返佣发放方式：1:自动 0:手动
          isAgent: boolean //是否是代理 true:是 false:否
          levelFourRate: number //直属四级代理返佣比例
          levelOneRate: number //直属一级代理返佣比例
          levelThreeRate: number //直属三级代理返佣比例
          levelTwoRate: number //直属二级代理返佣比例
          status: number //返佣开关 1:开启 0:关闭（默认）
          type: number //返佣类型 1:充值返佣 2:有效流水返佣
        }
      */
    RakebackGetRuleByCodeGET: (code: string = "", config = {}): Promise<IFanYongGuiZePeiZhi> => {
      return request({
        url: `/rakeback/getRule/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 包网商返佣-查询返佣规则      
      res =>>
        IFanYongGuiZePeiZhi {
          achievingAmount: number //返佣达成金额
          autoRakeback: number //返佣发放方式：1:自动 0:手动
          isAgent: boolean //是否是代理 true:是 false:否
          levelFourRate: number //直属四级代理返佣比例
          levelOneRate: number //直属一级代理返佣比例
          levelThreeRate: number //直属三级代理返佣比例
          levelTwoRate: number //直属二级代理返佣比例
          status: number //返佣开关 1:开启 0:关闭（默认）
          type: number //返佣类型 1:充值返佣 2:有效流水返佣
        }
      */
    RakebackGetRuleByCodeTypeGET: (code: string = "", config = {}): Promise<IFanYongGuiZePeiZhi> => {
      return request({
        url: `/rakeback/getRule/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
      * @description: 包网商返佣-返佣记录列表      
      res =>>
        IPageResultChongZhiFanYongJiLu {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IChongZhiFanYongJiLu[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IFanYongJiLuLieBiaoQingQiu {
          bizNo: string //订单id
          end: string //结束日期
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          start: string //开始日期
          status: number //状态 0:待审核 1:已发放 2:拒绝发放
          type: number //返佣类型 1:充值返佣 2:有效流水返佣
          userAccount: string //用户名
          userId: number //用户id
        }
      */
    RakebackRecordListPOST: (data: IFanYongJiLuLieBiaoQingQiu = {}, config = {}): Promise<IPageResultChongZhiFanYongJiLu> => {
      return request({
        url: `/rakeback/recordList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 包网商返佣-返佣金额统计      
      res =>>
        IChongZhiFanYongZongJinETongJiXinXi {
          achievingAmount: number //达成返佣总金额
          auditingAmount: number //待审核发放
          passedAmount: number //充值返佣总发放
          rejectedAmount: number //审核拒绝发放
        }
      */
    RakebackStatistics$type$POST: (code: string = "", config = {}): Promise<IChongZhiFanYongZongJinETongJiXinXi> => {
      return request({
        url: `/rakeback/statistics/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 包网商返佣-返佣金额统计      
      res =>>
        IChongZhiFanYongZongJinETongJiXinXi {
          achievingAmount: number //达成返佣总金额
          auditingAmount: number //待审核发放
          passedAmount: number //充值返佣总发放
          rejectedAmount: number //审核拒绝发放
        }
      */
    RakebackStatisticsByCodePOST: (code: string = "", config = {}): Promise<IChongZhiFanYongZongJinETongJiXinXi> => {
      return request({
        url: `/rakeback/statistics/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 包网商返佣-返佣金额统计      
      res =>>
        IChongZhiFanYongZongJinETongJiXinXi {
          achievingAmount: number //达成返佣总金额
          auditingAmount: number //待审核发放
          passedAmount: number //充值返佣总发放
          rejectedAmount: number //审核拒绝发放
        }
      */
    RakebackStatisticsByCodeTypePOST: (code: string = "", config = {}): Promise<IChongZhiFanYongZongJinETongJiXinXi> => {
      return request({
        url: `/rakeback/statistics/${code}`,
        method: "POST",
        ...config
      });
    }
  };
};
