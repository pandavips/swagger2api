/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 公告管理 - 添加公告
     */
    CmsArticleAddPOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/article/add`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 公告管理 - 停用公告
     */
    CmsArticleDisablePOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/article/disable`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 公告管理 - 启用公告
     */
    CmsArticlePublishPOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/article/publish`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 公告管理 - 查询公告列表
     */
    CmsArticleQueryListPOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/article/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 公告管理 - 查询公告详情
     */
    CmsArticleQueryOnePOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/article/queryOne`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 公告管理 - 修改公告
     */
    CmsArticleUpdatePOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/article/update`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: banner管理 - 添加横幅
     */
    CmsBannerAddPOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/banner/add`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: banner管理 - 停用横幅
     */
    CmsBannerDisablePOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/banner/disable`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: banner管理 - 启用横幅
     */
    CmsBannerPublishPOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/banner/publish`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: banner管理 - 查询横幅列表
     */
    CmsBannerQueryListPOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/banner/queryList`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: banner管理 - 查询横幅详情
     */
    CmsBannerQueryOnePOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/banner/queryOne`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: banner管理 - 修改横幅
     */
    CmsBannerUpdatePOST: (data = {}, config = {}) => {
        return request({
            url: `/cms/banner/update`,
            method: "POST",
            data: data,
            ...config
        });
    },
    /**
     * @description: 标签管理 - 查询所有用户标签
     */
    CmsLabelQueryAllGET: (config = {}) => {
        return request({
            url: `/cms/label/queryAll`,
            method: "GET",
            ...config
        });
    }
};
