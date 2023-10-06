/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
     * @description: 文件上传下载-下载文件  */
    FileDownload$fileNo$GET: (code: string = "", config = {}): Promise<null> => {
      return request({
        url: `/file/download/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 文件上传下载-下载文件  */
    FileDownloadByCodeGET: (code: string = "", config = {}): Promise<null> => {
      return request({
        url: `/file/download/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 文件上传下载-下载文件  */
    FileDownloadByCodeFileNoGET: (code: string = "", config = {}): Promise<null> => {
      return request({
        url: `/file/download/${code}`,
        method: "GET",
        ...config
      });
    },
    /**
     * @description: 文件上传下载-下载文件  */
    FileDownload$fileNo$POST: (code: string = "", config = {}): Promise<null> => {
      return request({
        url: `/file/download/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 文件上传下载-下载文件  */
    FileDownloadByCodePOST: (code: string = "", config = {}): Promise<null> => {
      return request({
        url: `/file/download/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
     * @description: 文件上传下载-下载文件  */
    FileDownloadByCodeFileNoPOST: (code: string = "", config = {}): Promise<null> => {
      return request({
        url: `/file/download/${code}`,
        method: "POST",
        ...config
      });
    },
    /**
      * @description: 文件上传下载-上传文件      
      res =>>
        IUploadResultResp {
          fileName: string //文件名称
          fileNo: string //文件编号
          fileSize: string //文件大小
          fileType: number //文件类型 2:图片 3:语音 4:视频 5:PDF文件 6:其他文件
          url: string //文件全路径,用于展示
        }
      */
    FileUploadPOST: (data: FormData = {}, config = {}): Promise<IUploadResultResp> => {
      return request({
        url: `/file/upload`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
