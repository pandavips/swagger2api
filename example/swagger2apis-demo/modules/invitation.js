/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 邀请海报管理-新增邀请海报
          req =>>
            IAddPosterReq {
              img: string //图片
              lang: string //语言:中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
              status: boolean //状态: false:待发布、true:发布中
            }
          */
    InvitationPosterAddPosterPOST: (data = {}, config = {}) => {
      return request({
        url: `/invitation/poster/addPoster`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 邀请海报管理-下架邀请海报
          req =>>
            IOperationPosterReq {
              posterId: number //海报编号
            }
          */
    InvitationPosterOfflinePosterPOST: (data = {}, config = {}) => {
      return request({
        url: `/invitation/poster/offlinePoster`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 邀请海报管理-发布邀请海报
          req =>>
            IOperationPosterReq {
              posterId: number //海报编号
            }
          */
    InvitationPosterOnlinePosterPOST: (data = {}, config = {}) => {
      return request({
        url: `/invitation/poster/onlinePoster`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 邀请海报管理-查询邀请海报列表
          res =>>
            IPageResultProxyInvitationPosterResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IProxyInvitationPosterResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IPaging {
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
            }
          */
    InvitationPosterQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/invitation/poster/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 邀请海报管理-查询单条邀请海报信息
          req =>>
            IOperationPosterReq {
              posterId: number //海报编号
            }
        
          res =>>
            IProxyInvitationPosterResp {
              img: string //图片
              imgUrl: string //图片链接
              lang: string //语言
              posterId: number //序号
              status: boolean //发布状态：false:待发布、true:发布中
              updateTime: string //更新时间
            }
          */
    InvitationPosterQueryOnePOST: (data = {}, config = {}) => {
      return request({
        url: `/invitation/poster/queryOne`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 邀请海报管理-更新邀请海报
          req =>>
            IUpdatePosterReq {
              img: string //图片
              posterId: number //编号
              status: boolean //状态: false:待发布、true:发布中
            }
          */
    InvitationPosterUpdatePosterPOST: (data = {}, config = {}) => {
      return request({
        url: `/invitation/poster/updatePoster`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
