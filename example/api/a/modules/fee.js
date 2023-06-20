/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 手续费 - 手续费
     */
    FeeStatisticsFeePOST: (data = {}, config = {}) => {
        return request({
            url: `/fee/statistics/fee`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
