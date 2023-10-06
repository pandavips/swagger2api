/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
          * @description: 三方支付管理-添加或编辑
          req =>>
            IThirdPayUpdateReq {
              account: string //三方支付账号
              bizNo: string //业务唯一编码,编辑必传
              currency: string //币种，多个用逗号隔开
              name: string //支付工具名称
              receivingDayLimit: number //单日收款上限
              receivingEnd: string //收款结束时间
              receivingName: string //三方支付收款名称
              receivingSingleMax: number //单笔收款最大金额
              receivingSingleMin: number //单笔收款最小金额
              receivingStart: string //收款开始时间
              status: string //状态 1:可用 0:不可用
              userLabel: string //用户标签，多个用逗号隔开，为空表示全部
              vipLevel: string //vip等级，多个用逗号隔开，为空表示全部
            }
          */
    ThirdPartyPaymentAddOrUpdatePOST: (data = {}, config = {}) => {
      return request({
        url: `/thirdPartyPayment/addOrUpdate`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
          * @description: 三方支付管理-删除
          req =>>
            IThirdPartyPaymentdeleteQueryParams {
              bizNo: string //业务唯一编码
            }
          */
    ThirdPartyPaymentDeleteGET: (data = {}, config = {}) => {
      return request({
        url: `/thirdPartyPayment/delete`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 三方支付管理-详情
          res =>>
            IThirdPayDetailResp {
              account: string //三方支付账号
              bizNo: string //业务唯一编码
              createTime: string //创建时间
              currency: string //币种，多个用逗号隔开
              name: string //支付工具名称
              proxyUserId: number //包网商id
              receivingDayLimit: number //单日收款上限
              receivingEnd: string //收款结束时间
              receivingName: string //三方支付收款名称
              receivingSingleMax: number //单笔收款最大金额
              receivingSingleMin: number //单笔收款最小金额
              receivingStart: string //收款开始时间
              status: number //状态 1:可用 0:不可用
              updateTime: string //更新时间
              userLabel: string //用户标签，多个用逗号隔开
              userLabelText: string //用户标签文本，多个用逗号隔开
              vipLevel: string //vip等级，多个用逗号隔开
              vipLevelText: string //vip等级文本，多个用逗号隔开
            }
        
          req =>>
            IThirdPartyPaymentdetailQueryParams {
              bizNo: string //业务唯一编码
            }
          */
    ThirdPartyPaymentDetailGET: (data = {}, config = {}) => {
      return request({
        url: `/thirdPartyPayment/detail`,
        method: "GET",
        params: data,
        ...config
      });
    },
    /**
          * @description: 三方支付管理-列表查询
          req =>>
            IThirdPayListReq {
              end: string //更新结束时间
              name: string //支付工具名称
              start: string //更新开始时间
              status: string //状态 1:可用 0:不可用
            }
          */
    ThirdPartyPaymentListPOST: (data = {}, config = {}) => {
      return request({
        url: `/thirdPartyPayment/list`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
