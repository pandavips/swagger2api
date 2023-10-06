/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 公告管理-添加公告
          req =>>
            IAddArticleReq {
              content: string //内容(最大不能超过2000)
              lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
              status: number //状态 1:启用 0:禁用
              title: string //标题(最大不能超过64)
            }
          */
    CmsArticleAddPOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/article/add`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 公告管理-停用公告
          req =>>
            IArticleIdReq {
              articleNo: string //公告编号
            }
          */
    CmsArticleDisablePOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/article/disable`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 公告管理-启用公告
          req =>>
            IArticleIdReq {
              articleNo: string //公告编号
            }
          */
    CmsArticlePublishPOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/article/publish`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 公告管理-查询公告列表
          res =>>
            IPageResultArticleResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IArticleResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IQueryArticleReq {
              lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: number //状态 1:启用 0:禁用
              title: string //标题
            }
          */
    CmsArticleQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/article/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 公告管理-查询公告详情
          req =>>
            IArticleIdReq {
              articleNo: string //公告编号
            }
        
          res =>>
            IArticleResp {
              articleNo: string //公告编号
              content: string //内容
              createTime: string //创建时间
              lang: string //语言
              status: number //状态 1:启用 0:禁用
              title: string //标题
              updateTime: string //更新时间
            }
          */
    CmsArticleQueryOnePOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/article/queryOne`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 公告管理-修改公告
          req =>>
            IUpdateArticleReq {
              articleNo: string //公告编号
              content: string //内容(最大不能超过2000)
              lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
              status: number //状态 1:启用 0:禁用
              title: string //标题(最大不能超过64)
            }
          */
    CmsArticleUpdatePOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/article/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: banner管理-添加横幅
          req =>>
            IAddBannerReq {
              fileNo: string //文件编号
              lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
              status: number //状态 1:启用 0:禁用
              url: string //链接(最大不能超过256)
            }
          */
    CmsBannerAddPOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/banner/add`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: banner管理-停用横幅
          req =>>
            IBannerNoReq {
              bannerNo: string //横幅编号
            }
          */
    CmsBannerDisablePOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/banner/disable`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: banner管理-启用横幅
          req =>>
            IBannerNoReq {
              bannerNo: string //横幅编号
            }
          */
    CmsBannerPublishPOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/banner/publish`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: banner管理-查询横幅列表
          res =>>
            IPageResultBannerResp {
              pageIndex: number //没有提供描述
              pageSize: number //没有提供描述
              rows: IBannerResp[] //没有提供描述
              totalNum: number //没有提供描述
              totalPages: number //没有提供描述
            }
        
          req =>>
            IQueryBannerReq {
              lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
              pageIndex: number //页码 从1开始计数
              pageSize: number //页容 区间[1, 1000]
              status: number //状态 1:启用 0:禁用
            }
          */
    CmsBannerQueryListPOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/banner/queryList`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: banner管理-查询横幅详情
          req =>>
            IBannerNoReq {
              bannerNo: string //横幅编号
            }
        
          res =>>
            IBannerResp {
              bannerNo: string //横幅编号
              createTime: string //创建时间
              fileNo: string //横幅文件
              fileUrl: string //横幅文件地址
              lang: string //语言
              status: number //状态 1:启用 0:禁用
              updateTime: string //更新时间
              url: string //横幅点击跳转链接
            }
          */
    CmsBannerQueryOnePOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/banner/queryOne`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: banner管理-修改横幅
          req =>>
            IUpdateBannerReq {
              bannerNo: string //横幅编号
              fileNo: string //文件编号
              lang: string //语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH
              status: number //状态 1:启用 0:禁用
              url: string //链接(最大不能超过256)
            }
          */
    CmsBannerUpdatePOST: (data = {}, config = {}) => {
      return request({
        url: `/cms/banner/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
     * @description: 标签管理-查询所有用户标签  */
    CmsLabelQueryAllGET: (config = {}) => {
      return request({
        url: `/cms/label/queryAll`,
        method: "GET",
        ...config
      });
    }
  };
};
