/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 文件上传下载 - 下载文件
   */
  FileDownloadByCodeFileNoGET: (
    fileNo:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/file/download/${fileNo}`,
      method: "GET",
            ...config
    });
  },
  /**
   * @description: 文件上传下载 - 下载文件
   */
  FileDownloadByCodeFileNoPOST: (
    fileNo:string,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/file/download/${fileNo}`,
      method: "POST",
            ...config
    });
  },
  /**
   * @description: 文件上传下载 - 上传文件
   */
  FileUploadPOST: (
    data: IFileUploadPOSTFromData,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IUploadResultResp>> => {
    return request({
      url: `/file/upload`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
