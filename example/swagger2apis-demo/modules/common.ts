/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 日志相关接口-日志记录 - 导出excel      
      req =>>
        ICommonlogoperateexportExcelQueryParams {
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          userId: number //用户编号
          userAccount: string //用户账号
          operationBiz: string //系统模块
          operationType: string //操作类型
          remark: string //操作内容
          start: string //开始时间
          end: string //结束时间
        }
      */
    CommonLogOperateExportExcelGET: (data: ICommonlogoperateexportExcelQueryParams = {}, config = {}): Promise<null> => {
      return request({
        url: `/common/log/operate/exportExcel`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
      * @description: 日志相关接口-查询操作日志信息      
      req =>>
        IOperationLogReq {
          end: string //结束时间
          operationBiz: string //系统模块
          operationType: string //操作类型
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          remark: string //操作内容
          start: string //开始时间
          userAccount: string //用户账号
          userId: number //用户编号
        }
    
      res =>>
        IPageResultOperationLogVo {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IOperationLogVo[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
      */
    CommonLogOperateListPOST: (data: IOperationLogReq = {}, config = {}): Promise<IPageResultOperationLogVo> => {
      return request({
        url: `/common/log/operate/list`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
