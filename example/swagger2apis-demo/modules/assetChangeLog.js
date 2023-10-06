/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 账户资金变动记录-资金变动记录 - 导出excel
          req =>>
            IAssetChangeLogexportExcelQueryParams {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              userId: number //用户编号
              proxyUid: number //包网商编号
              type: string //类型
              start: string //交易时间开始
              end: string //交易时间结束
            }
          */
    AssetChangeLogExportExcelGET: (data = {}, config = {}) => {
      return request({
        url: `/assetChangeLog/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 账户资金变动记录-资金变动记录
          req =>>
            IAssetChangeLogReq {
              end: string //交易时间结束
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              proxyUid: number //包网商编号
              start: string //交易时间开始
              type: string //类型
              userId: number //用户编号
            }
        
          res =>>
            IPageResultAssetChangeLogResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IAssetChangeLogResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
          */
    AssetChangeLogListPOST: (data = {}, config = {}) => {
      return request({
        url: `/assetChangeLog/list`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 账户资金变动记录-下拉类型  */
    AssetChangeLogTypeGET: (config = {}) => {
      return request({
        url: `/assetChangeLog/type`,
        method: "GET",
        ...config
      });
    }
  };
};
