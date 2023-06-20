/* eslint-disable */
// @ts-nocheck
/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */
import request from "../request";
export default {
    /**
     * @description: 渠道充提信息接口 - 汇总信息
     */
    ChannelDepositWithdrawSummaryPOST: (data = {}, config = {}) => {
        return request({
            url: `/channel/deposit/withdraw/summary`,
            method: "POST",
            data: data,
            ...config
        });
    }
};
