/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 日志相关接口 - 日志记录 - 导出excel
     */
    CommonLogOperateExportExcelGET: (data = {}, config = {}) => {
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
    CommonLogOperateListPOST: (data = {}, config = {}) => {
        return request({
            url: `/common/log/operate/list`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
