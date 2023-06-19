/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 日志相关接口 - 日志记录 - 导出excel
   */
  CommonLogOperateExportExcelGET: (
    data: ICommonLogOperateExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/common/log/operate/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 日志相关接口 - 查询操作日志信息
   */
  CommonLogOperateListPOST: (
    data: IOperationLogReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultOperationLogVo>> => {
    return request({
      url: `/common/log/operate/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
