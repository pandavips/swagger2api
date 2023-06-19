/**
  * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
  */

/* eslint-disable */
// @ts-nocheck
import request,{ExtraInInternalAxiosRequestConfig} from "./index";

export default {
  /**
   * @description: 用户彩金发放记录 - 导出excel
   */
  WinningsRecordExportExcelGET: (
    data: IWinningsRecordExportExcelGETReqQuery,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/winnings/record/exportExcel`,
      method: "GET",
                              params: data,
                    ...config
    });
  },
  /**
   * @description: 用户彩金发放记录 - 彩金记录查询
   */
  WinningsRecordPagePOST: (
    data: IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultYongHuCaiJinFaFangJiLu>> => {
    return request({
      url: `/winnings/record/page`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户彩金发放记录 - 彩金审核
   */
  WinningsRecordReviewPOST: (
    data: IReviewUserWinningsRecordProxyReq,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/winnings/record/review`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 用户彩金发放记录 - 查询统计信息
   */
  WinningsRecordStatisticPOST: (
    data: IBaoWangShangChaXunYongHuCaiJinJiLuCanShuDuiXiang,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ICaiJinTongJiShuJuBossZhiDuiXiang>> => {
    return request({
      url: `/winnings/record/statistic`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 彩金规则配置控制器 - 删除配置
   */
  WinningsRuleDeletePOST: (
    data: ICaiJinPeiZhiChaXunDuiXiang,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/winnings/rule/delete`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 彩金规则配置控制器 - 通过id获取配置
   */
  WinningsRuleGetPOST: (
    data: ICaiJinPeiZhiChaXunDuiXiang,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<ICaiJinGuiZePeiZhiXinXi>> => {
    return request({
      url: `/winnings/rule/get`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 彩金规则配置控制器 - 列表
   */
  WinningsRulePagePOST: (
    data: IPaging,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<Required<IPageResultCaiJinGuiZePeiZhiXinXi>> => {
    return request({
      url: `/winnings/rule/page`,
      method: "POST",
                      data: data,
                            ...config
    });
  },
  /**
   * @description: 彩金规则配置控制器 - 保存配置
   */
  WinningsRuleSavePOST: (
    data: ICaiJinGuiZePeiZhiCanShuDuiXiang,
    config:Partial<ExtraInInternalAxiosRequestConfig>={}
  ): Promise<null> => {
    return request({
      url: `/winnings/rule/save`,
      method: "POST",
                      data: data,
                            ...config
    });
  }
  };
