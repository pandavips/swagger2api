/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 文件上传下载 - 下载文件
     */
    FileDownloadByCodeFileNoGET: (fileNo, config = {}) => {
        return request({
            url: `/file/download/${fileNo}`,
            method: "GET",
            ...config
        });
    },
    /**
     * @description: 文件上传下载 - 下载文件
     */
    FileDownloadByCodeFileNoPOST: (fileNo, config = {}) => {
        return request({
            url: `/file/download/${fileNo}`,
            method: "POST",
            ...config
        });
    },
    /**
     * @description: 文件上传下载 - 上传文件
     */
    FileUploadPOST: (data = {}, config = {}) => {
        return request({
            url: `/file/upload`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
