/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 返水方案管理-新增方案
          req =>>
            IXinZengFanShuiFangAnQingQiu {
              calculationMethod: number //计算方式：1阶梯式，2平铺式
              items: IXinZengFanShuiFangAnMingXi[] //明细
              planName: string //方案名称
              rebateUpper: number //返水流水上限
              vipLevels: string //vip等级id集合(用,分隔)
              withdrawalMultiple: number //提现倍数
            }
          */
    RebatePlanAddPlanPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/plan/addPlan`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 返水方案管理-查询厂商类型列表  */
    RebatePlanAllTypeGET: (config = {}) => {
      return request({
        url: `/rebate/plan/allType`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 返水方案管理-删除明细信息
          req =>>
            IDeleteItemsReq {
              itemsId: number[] //明细编号
              planId: number //方案编号
            }
          */
    RebatePlanDeleteItemsPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/plan/deleteItems`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水方案管理-删除方案信息
          req =>>
            IPlanIdReq {
              planId: number //方案编号
            }
          */
    RebatePlanDeletePlanPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/plan/deletePlan`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水方案管理-禁用方案
          req =>>
            IPlanIdReq {
              planId: number //方案编号
            }
          */
    RebatePlanDisablePlanPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/plan/disablePlan`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水方案管理-启用方案
          req =>>
            IPlanIdReq {
              planId: number //方案编号
            }
          */
    RebatePlanEnablePlanPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/plan/enablePlan`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水方案管理-查询方案明细信息
          req =>>
            IPlanIdReq {
              planId: number //方案编号
            }
          */
    RebatePlanQueryItemsPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/plan/queryItems`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水方案管理-查询方案列表
          res =>>
            IPageResultFanShuiFangAnXinXi {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IFanShuiFangAnXinXi[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IPlanQueryReq {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              planName: string //方案名称
              status: number //方案状态
            }
          */
    RebatePlanQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/plan/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水方案管理-更新方案
          req =>>
            IGengXinFanShuiFangAnQingQiu {
              id: number //方案id
              items: IGengXinFanHuiFangAnMingXiQingQiu[] //明细
              planName: string //方案名称
              rebateUpper: number //返水流水上限
              vipLevels: string //vip等级id集合(用,分隔)
              withdrawalMultiple: number //提现倍数
            }
          */
    RebatePlanUpdatePlanPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/plan/updatePlan`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水记录管理-一键发放
          req =>>
            IRecordQueryReq {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              period: string //周期
              status: number //状态
              userId: number //用户id
              userName: string //用户名称
            }
          */
    RebateRecordAllGrantPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/record/allGrant`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水记录管理-批量发放
          req =>>
            IRecordIdsReq {
              ids: number[] //编号集合
            }
          */
    RebateRecordBatchGrantPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/record/batchGrant`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水记录管理-批量拒绝
          req =>>
            IRecordIdsReq {
              ids: number[] //编号集合
            }
          */
    RebateRecordBatchRefusePOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/record/batchRefuse`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 返水记录管理-导出返水记录列表
          req =>>
            IRebaterecordexportExcelQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户id
              userName: string //用户名称
              status: number //状态
              period: string //周期
            }
          */
    RebateRecordExportExcelGET: (data = {}, config = {}) => {
      return request({
        url: `/rebate/record/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 返水记录管理-返水记录列表
          res =>>
            IPageResultProxyRebateRecordResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IProxyRebateRecordResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IRecordQueryReq {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              period: string //周期
              status: number //状态
              userId: number //用户id
              userName: string //用户名称
            }
          */
    RebateRecordQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/rebate/record/queryList`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
