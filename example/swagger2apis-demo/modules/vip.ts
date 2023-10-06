/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: VIP管理-新增vip      
      req =>>
        IAddVipReq {
          cycleLottery: number //周期奖励彩金
          downDepositAmount: number //降级存款值条件
          downNegativeProfitAmount: number //降级负盈利值条件
          downValidAmount: number //降级有效流水值条件
          downValidMembers: number //降级有效会员数条件
          upDepositAmount: number //升级存款值条件
          upLottery: number //升级奖励彩金
          upNegativeProfitAmount: number //升级负盈利值条件
          upValidAmount: number //升级有效流水值条件
          upValidMembers: number //升级有效会员数条件
          vipName: string //vip名称(中文)
          vipNameBr: string //vip名称(葡语-巴西)
          vipNamePh: string //vip名称(菲律宾语)
          vipNameTh: string //vip名称(泰语)
          vipNameUs: string //vip名称(英文)
          vipNameVn: string //vip名称(越南语)
        }
      */
    VipManagementAddVipPOST: (data: IAddVipReq = {}, config = {}): Promise<number> => {
      return request({
        url: `/vip/management/addVip`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: VIP管理-删除单条vip信息      
      req =>>
        IDeleteVipManagementReq {
          deleteId: number //需要删除的VIPid
          targetId: number //转移用户的VIPid
        }
      */
    VipManagementDeleteOnePOST: (data: IDeleteVipManagementReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/vip/management/deleteOne`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: VIP管理-获取vip降级周期  */
    VipManagementGetPeriodGET: (config = {}): Promise<string> => {
      return request({
        url: `/vip/management/getPeriod`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: VIP管理-查询vip信息下拉  */
    VipManagementQueryAllPOST: (config = {}): Promise<object> => {
      return request({
        url: `/vip/management/queryAll`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: VIP管理-查询vip信息列表      
      res =>>
        IPageResultVipManagementResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IVipManagementResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IPaging {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
        }
      */
    VipManagementQueryListPOST: (data: IPaging = {}, config = {}): Promise<IPageResultVipManagementResp> => {
      return request({
        url: `/vip/management/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: VIP管理-查询单条vip信息      
      req =>>
        IQueryVipManagementReq {
          vipId: number //数据id
        }
    
      res =>>
        IVipManagementVo {
          cycleLottery: number //周期奖励彩金
          downDepositAmount: number //降级存款值条件
          downNegativeProfitAmount: number //降级负盈利值条件
          downValidAmount: number //降级有效流水值条件
          downValidMembers: number //降级有效会员数条件
          settlementType: string //结算周期：WEEK、MONTH
          upDepositAmount: number //升级存款值条件
          upLottery: number //升级奖励彩金
          upNegativeProfitAmount: number //升级负盈利值条件
          upValidAmount: number //升级有效流水值条件
          upValidMembers: number //升级有效会员数条件
          vipId: number //编号
          vipLevel: number //vip等级
          vipName: string //vip名称(中文)
          vipNameBr: string //vip名称(葡语-巴西)
          vipNamePh: string //vip名称(菲律宾语)
          vipNameTh: string //vip名称(泰语)
          vipNameUs: string //vip名称(英文)
          vipNameVn: string //vip名称(越南语)
        }
      */
    VipManagementQueryOnePOST: (data: IQueryVipManagementReq = {}, config = {}): Promise<IVipManagementVo> => {
      return request({
        url: `/vip/management/queryOne`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: VIP管理-更新vip降级周期      
      req =>>
        IUpdatePeriodReq {
          settlementType: string //结算周期：WEEK、MONTH
        }
      */
    VipManagementUpdatePeriodPOST: (data: IUpdatePeriodReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/vip/management/updatePeriod`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: VIP管理-更新vip      
      req =>>
        IUpdateVipReq {
          cycleLottery: number //周期奖励彩金
          downDepositAmount: number //降级存款值条件
          downNegativeProfitAmount: number //降级负盈利值条件
          downValidAmount: number //降级有效流水值条件
          downValidMembers: number //降级有效会员数条件
          upDepositAmount: number //升级存款值条件
          upLottery: number //升级奖励彩金
          upNegativeProfitAmount: number //升级负盈利值条件
          upValidAmount: number //升级有效流水值条件
          upValidMembers: number //升级有效会员数条件
          vipId: number //数据id
          vipName: string //vip名称(中文)
          vipNameBr: string //vip名称(葡语-巴西)
          vipNamePh: string //vip名称(菲律宾语)
          vipNameTh: string //vip名称(泰语)
          vipNameUs: string //vip名称(英文)
          vipNameVn: string //vip名称(越南语)
        }
      */
    VipManagementUpdateVipPOST: (data: IUpdateVipReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/vip/management/updateVip`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
