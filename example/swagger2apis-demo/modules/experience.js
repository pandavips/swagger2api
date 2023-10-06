/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 经验值管理-查询经验值列表
          res =>>
            IPageResultProxyExperienceValueResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IProxyExperienceValueResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IPaging {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
            }
          */
    ExperienceValueQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/experience/value/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 经验值管理-查询单条经验值信息
          res =>>
            IProxyExperienceValueResp {
              dailyCeiling: number //每日上限
              exchangeRate: number //经验值汇率
              proxyId: number //包网商ID
              type: string //类型
              updateTime: string //更新时间
            }
        
          req =>>
            IQueryExperienceValueReq {
              type: string //类型:存款值:DEPOSIT_AMOUNT,负盈利值:NEGATIVE_PROFIT_AMOUNT,下级有效会员数:VALID_MEMBERS
            }
          */
    ExperienceValueQueryOnePOST: (data = {}, config = {}) => {
      return request({
        url: `/experience/value/queryOne`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 经验值管理-查询有效流水值信息  */
    ExperienceValueQueryValidAmountGET: (config = {}) => {
      return request({
        url: `/experience/value/queryValidAmount`,
        method: "GET",
        ...config
      });
    },
    /**
          * @description: 经验值管理-编辑经验值
          req =>>
            IUpdateExperienceValueReq {
              dailyCeiling: number //每日上限
              exchangeRate: number //经验值汇率
              type: string //类型:存款值:DEPOSIT_AMOUNT,负盈利值:NEGATIVE_PROFIT_AMOUNT,下级有效会员数:VALID_MEMBERS
            }
          */
    ExperienceValueUpdateExperienceValuePOST: (data = {}, config = {}) => {
      return request({
        url: `/experience/value/updateExperienceValue`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 经验值管理-编辑有效流水值  */
    ExperienceValueUpdateValidAmountPOST: (data = {}, config = {}) => {
      return request({
        url: `/experience/value/updateValidAmount`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
