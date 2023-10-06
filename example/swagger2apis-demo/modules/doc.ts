/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 文档中心管理-新增文档      
      req =>>
        IAddDocReq {
          context: string //内容
          lang: string //语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
          name: string //名称
        }
      */
    DocManagementAddDocPOST: (data: IAddDocReq = {}, config = {}): Promise<number> => {
      return request({
        url: `/doc/management/addDoc`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 文档中心管理-下架文档      
      req =>>
        IOperationDocReq {
          docId: number //文档id
        }
      */
    DocManagementOfflineDocPOST: (data: IOperationDocReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/doc/management/offlineDoc`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 文档中心管理-发布文档      
      req =>>
        IOperationDocReq {
          docId: number //文档id
        }
      */
    DocManagementOnlineDocPOST: (data: IOperationDocReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/doc/management/onlineDoc`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 文档中心管理-查询文档列表      
      res =>>
        IPageResultProxyDocManagementResp {
          pageIndex: number //没有提供描述
          pageSize: number //没有提供描述
          rows: IProxyDocManagementResp[] //没有提供描述
          totalNum: number //没有提供描述
          totalPages: number //没有提供描述
        }
    
      req =>>
        IQueryDocListReq {
          endTime: string //结束时间
          lang: string //语言
          name: string //文档名称，支持模糊查询
          pageIndex: number //页码 从1开始计数
          pageSize: number //页容 区间[1, 1000]
          startTime: string //起始时间
        }
      */
    DocManagementQueryListPOST: (data: IQueryDocListReq = {}, config = {}): Promise<IPageResultProxyDocManagementResp> => {
      return request({
        url: `/doc/management/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 文档中心管理-查询单条文档信息      
      res =>>
        IProxyDocManagementResp {
          context: string //文档内容
          createTime: string //创建时间
          docId: number //序号
          lang: string //语言
          name: string //文档名称
          status: boolean //文档状态：false已下架，true已上架
        }
    
      req =>>
        IQueryDocReq {
          docId: number //文档序号
        }
      */
    DocManagementQueryOnePOST: (data: IQueryDocReq = {}, config = {}): Promise<IProxyDocManagementResp> => {
      return request({
        url: `/doc/management/queryOne`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 文档中心管理-更新文档      
      req =>>
        IUpdateDocReq {
          context: string //内容
          docId: number //编号
          lang: string //语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
          name: string //名称
        }
      */
    DocManagementUpdateDocPOST: (data: IUpdateDocReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/doc/management/updateDoc`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
