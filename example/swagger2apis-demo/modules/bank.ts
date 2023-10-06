/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
export default (request) => {
  return {
    /**
      * @description: 银行卡管理-删除      
      req =>>
        IBankCardDeleteReq {
          bizCardCode: string //业务卡号，更新或查看时，必传
        }
      */
    BankCardDeletePOST: (data: IBankCardDeleteReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/bank/card/delete`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 银行卡管理-详情      
      req =>>
        IBankCardDetailReq {
          bizCardCode: string //业务卡号，更新或查看时，必传
        }
    
      res =>>
        IBankCardDetailResp {
          bankName: string //银行名称
          bankNameEn: string //银行英文名称
          bankNamePh: string //银行菲律宾名称
          bankNameTh: string //银行泰语名称
          bankNameVn: string //银行越南名称
          currencyCode: string //法币，都好分割
          props: IBankCardDetailPropResp[] //其他属性
          receivingDayLimit: number //单日收款上限
          receivingEnd: string //收款结束时间
          receivingSingleMax: number //单笔收款最大金额
          receivingSingleMin: number //单笔收款最小金额
          receivingStart: string //收款开始时间
          status: number //状态：1 可用；0 不可用
          userLabel: string //用户标签，多个用逗号隔开
          userLabelText: string //用户标签文本，多个用逗号隔开
          vipLevel: string //vip等级，多个用逗号隔开
          vipLevelText: string //vip等级文本，多个用逗号隔开
        }
      */
    BankCardDetailPOST: (data: IBankCardDetailReq = {}, config = {}): Promise<IBankCardDetailResp> => {
      return request({
        url: `/bank/card/detail`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 银行卡管理-查询      
      req =>>
        IBankCardQueryReq {
          end: string //结束时间
          start: string //开始时间
          status: number //状态：1 可用；0 不可用
        }
      */
    BankCardQueryPOST: (data: IBankCardQueryReq = {}, config = {}): Promise<IBankCardQueryResp[]> => {
      return request({
        url: `/bank/card/query`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 银行卡管理-添加或编辑      
      req =>>
        IBankCardUpdateReq {
          bankName: string //银行名称
          bizCardCode: string //业务卡号，更新或查看时，必传
          currencyCode: string //法币，顿号（、）分割
          props: IBankCardUpdatePropReq[] //其他属性
          receivingDayLimit: number //单日收款上限
          receivingEnd: string //收款结束时间
          receivingSingleMax: number //单笔收款最大金额
          receivingSingleMin: number //单笔收款最小金额
          receivingStart: string //收款开始时间
          status: number //状态：1 可用；0 不可用
          userLabel: string //用户标签，多个用逗号隔开，为空表示全部
          vipLevel: string //vip等级，多个用逗号隔开，为空表示全部
        }
      */
    BankCardUpdatePOST: (data: IBankCardUpdateReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/bank/card/update`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 银行信息-删除      
      req =>>
        IBankQueryReq {
          bankName: string //银行名称
        }
      */
    BankDeleteDataPOST: (data: IBankQueryReq = {}, config = {}): Promise<null> => {
      return request({
        url: `/bank/deleteData`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 银行信息-详情      
      res =>>
        IBankDetailResp {
          bankName: string //银行名称
          bankNameEn: string //银行英文名称
          bankNamePh: string //银行菲律宾名称
          bankNameTh: string //银行泰语名称
          bankNameVn: string //银行越南名称
          props: IYinHangShuXingQingQiu[] //其他属性
        }
    
      req =>>
        IBankQueryReq {
          bankName: string //银行名称
        }
      */
    BankDetailPOST: (data: IBankQueryReq = {}, config = {}): Promise<IBankDetailResp> => {
      return request({
        url: `/bank/detail`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 银行信息-查询      
      req =>>
        IBankQueryReq {
          bankName: string //银行名称
        }
      */
    BankQueryPOST: (data: IBankQueryReq = {}, config = {}): Promise<IBankQueryResp[]> => {
      return request({
        url: `/bank/query`,
        method: "POST",
        data,
        ...config
      });
    },
    /**
      * @description: 银行信息-添加或编辑      
      req =>>
        IYinHangShuXingQingQiu {
          bankName: string //银行名称
          bankNameEn: string //银行英文名称
          bankNamePh: string //银行菲律宾名称
          bankNameTh: string //银行泰语名称
          bankNameVn: string //银行越南名称
          propCode: string //字段编码
          propDesc: string //说明文案
          propLen: number //长度限制
          propName: string //字段名
          propNameBr: string //字段名葡语名称
          propNameEn: string //字段名英文名称
          propNamePh: string //字段名菲律宾名称
          propNameTh: string //字段名泰语名称
          propNameVn: string //字段名越南名称
          propRequired: number //是否必填 1:是 0:否
          props: IZiDuanMingShuXingQingQiu[] //银行属性
          updateTime: string //更新时间
        }
      */
    BankUpdatePOST: (data: IYinHangShuXingQingQiu = {}, config = {}): Promise<null> => {
      return request({
        url: `/bank/update`,
        method: "POST",
        data,
        ...config
      });
    }
  };
};
