/* eslint-disable */
// @ts-nocheck

/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

import request,{ExtraInInternalAxiosRequestConfig} from "../request";
export default {
  
  /**
   * @description: 归集管理 - 获取归集配置信息
   */

  CollectGetGET: (
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ICollectResp>> => {
    return request({
      url: `/collect/get`,
      method: "GET",
            ...config
    });
  },  
  /**
   * @description: 归集管理 - 更新归集地址
   */

  CollectUpdateCollectPOST: (
    data: IAddressReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/collect/updateCollect`,
      method: "POST",
                      data: data,
                            ...config
    });
  },  
  /**
   * @description: 归集管理 - 更新头寸
   */

  CollectUpdateHotPOST: (
    data: IPrivateKeyReq={},
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/collect/updateHot`,
      method: "POST",
                      data: data,
                            ...config
    });
  }  };
