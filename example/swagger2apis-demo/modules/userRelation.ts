/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 用户关系统计-导出目标伞下数据      
      req =>>
        IUserRelationstatisticsexportSubExcelQueryParams {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          layer: string //层级
        }
      */
    UserRelationStatisticsExportSubExcelGET: (data: IUserRelationstatisticsexportSubExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/userRelation/statistics/exportSubExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 用户关系统计-导出目标查询数据      
      req =>>
        IUserRelationstatisticsexportTargetExcelQueryParams {
          userId: string //用户Id
          account: string //用户名
          selfLayer: string //邀请码
        }
      */
    UserRelationStatisticsExportTargetExcelGET: (data: IUserRelationstatisticsexportTargetExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/userRelation/statistics/exportTargetExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 用户关系统计-目标伞下数据      
      res =>>
        IPageResultUserRelationResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IUserRelationResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IUserRelationSubReq {
          layer: string //层级
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
        }
      */
    UserRelationStatisticsSubPOST: (data: IUserRelationSubReq = {}, config = {}): Promise<IPageResultUserRelationResp> => {
      return request({
        url: `/userRelation/statistics/sub`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 用户关系统计-目标查询数据      
      req =>>
        IUserRelationReq {
          account: string //用户名
          selfLayer: string //邀请码
          userId: string //用户Id
        }
    
      res =>>
        IUserRelationResp {
          account: string //用户名
          agentLevel: number //代理等级
          depositAmount: string //存款值（分数）
          gameResult: string //输赢结果
          gameValidAmount: string //有效流水（分数）
          isAgent: boolean //是否代理
          layer: string //层级信息
          lose: string //总输
          selfLayer: string //邀请码
          settleAmount: string //返佣金额
          subCount: number //伞下数
          userId: string //用户Id
          userType: number //用户类型
          win: string //总赢
          withdrawAmount: string //提款值（分数）
        }
      */
    UserRelationStatisticsTargetPOST: (data: IUserRelationReq = {}, config = {}): Promise<IUserRelationResp> => {
      return request({
        url: `/userRelation/statistics/target`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
