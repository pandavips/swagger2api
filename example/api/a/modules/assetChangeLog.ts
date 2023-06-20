/* eslint-disable */
// @ts-nocheck

/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

import request,{ExtraInInternalAxiosRequestConfig} from "../request";
export default {
  
  /**
   * @description: 账户资金变动记录 - 资金变动记录 - 导出excel
   */

  AssetChangeLogExportExcelGET: (
    data: IAssetChangeLogExportExcelGETReqQuery={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/assetChangeLog/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },  
  /**
   * @description: 账户资金变动记录 - 资金变动记录
   */

  AssetChangeLogListPOST: (
    data: IAssetChangeLogReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultAssetChangeLogResp>> => {
    return request({
      url: `/assetChangeLog/list`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 账户资金变动记录 - 下拉类型
   */

  AssetChangeLogTypeGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IAssetChangeLogType>[]> => {
    return request({
      url: `/assetChangeLog/type`,
      method: "GET",
            ...config
    });
  }  };
