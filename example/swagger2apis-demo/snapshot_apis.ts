/* eslint-disable */
// @ts-nocheck

/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */

import request from "./request";

export default {
  /**
  * @description: pet-uploads an image
    res =>>  IApiResponse {
      code: number //没有提供描述
      type: string //没有提供描述
      message: string //没有提供描述
    }
  */
  Pet_$petId$_UploadImagePost: (code: string = ""): Promise<IApiResponse> => {
    return request({
      url: `/pet/${code}/uploadImage`,
      method: "POST",
      data
    });
  },
  /**
  * @description: pet-Add a new pet to the store
    res =>>  IPet {
      id: number //没有提供描述
      category: ICategory[] //没有提供描述
      name: string //没有提供描述
      photoUrls: string[] //没有提供描述
      tags: ITag[] //没有提供描述
      status: string //pet status in the store
    }
  */
  PetPost: (data: IPet = {}): Promise<null> => {
    return request({
      url: `/pet`,
      method: "POST",
      data
    });
  },
  /**
  * @description: pet-Update an existing pet
    res =>>  IPet {
      id: number //没有提供描述
      category: ICategory[] //没有提供描述
      name: string //没有提供描述
      photoUrls: string[] //没有提供描述
      tags: ITag[] //没有提供描述
      status: string //pet status in the store
    }
  */
  PetPut: (data: IPet = {}): Promise<null> => {
    return request({
      url: `/pet`,
      method: "PUT",
      data
    });
  },
  /**
  * @description: pet-Multiple status values can be provided with comma separated strings
    req =>>  IPetfindByStatusQueryParams {
      status: string[] //Status values that need to be considered for filter
    }
  */
  Pet_FindByStatusGet: (data: IPetfindByStatusQueryParams = {}): Promise<IPet[]> => {
    return request({
      url: `/pet/findByStatus`,
      method: "GET",
      params: data
    });
  },
  /**
  * @description: pet-Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
    req =>>  IPetfindByTagsQueryParams {
      tags: string[] //Tags to filter by
    }
  */
  Pet_FindByTagsGet: (data: IPetfindByTagsQueryParams = {}): Promise<IPet[]> => {
    return request({
      url: `/pet/findByTags`,
      method: "GET",
      params: data
    });
  },
  /**
  * @description: pet-Returns a single pet
    res =>>  IPet {
      id: number //没有提供描述
      category: ICategory[] //没有提供描述
      name: string //没有提供描述
      photoUrls: string[] //没有提供描述
      tags: ITag[] //没有提供描述
      status: string //pet status in the store
    }
  */
  Pet_$petId$Get: (code: string = ""): Promise<IPet> => {
    return request({
      url: `/pet/${code}`,
      method: "GET"
    });
  },
  /**
   * @description: pet-Updates a pet in the store with form data
   */
  Pet_$petId$Post: (code: string = ""): Promise<null> => {
    return request({
      url: `/pet/${code}`,
      method: "POST",
      data
    });
  },
  /**
   * @description: pet-Deletes a pet
   */
  Pet_$petId$Delete: (code: string = ""): Promise<null> => {
    return request({
      url: `/pet/${code}`,
      method: "DELETE"
    });
  },
  /**
  * @description: store-Place an order for a pet
    res =>>  IOrder {
      id: number //没有提供描述
      petId: number //没有提供描述
      quantity: number //没有提供描述
      shipDate: string //没有提供描述
      status: string //Order Status
      complete: boolean //没有提供描述
    }
  */
  Store_OrderPost: (data: IOrder = {}): Promise<IOrder> => {
    return request({
      url: `/store/order`,
      method: "POST",
      data
    });
  },
  /**
  * @description: store-For valid response try integer IDs with value &gt;= 1 and &lt;= 10. Other values will generated exceptions
    res =>>  IOrder {
      id: number //没有提供描述
      petId: number //没有提供描述
      quantity: number //没有提供描述
      shipDate: string //没有提供描述
      status: string //Order Status
      complete: boolean //没有提供描述
    }
  */
  Store_Order_$orderId$Get: (code: string = ""): Promise<IOrder> => {
    return request({
      url: `/store/order/${code}`,
      method: "GET"
    });
  },
  /**
   * @description: store-For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   */
  Store_Order_$orderId$Delete: (code: string = ""): Promise<null> => {
    return request({
      url: `/store/order/${code}`,
      method: "DELETE"
    });
  },
  /**
   * @description: store-Returns a map of status codes to quantities
   */
  Store_InventoryGet: (): Promise<object> => {
    return request({
      url: `/store/inventory`,
      method: "GET"
    });
  },
  /**
   * @description: user-Creates list of users with given input array
   */
  User_CreateWithArrayPost: (data: IUser[] = {}): Promise<null> => {
    return request({
      url: `/user/createWithArray`,
      method: "POST",
      data
    });
  },
  /**
   * @description: user-Creates list of users with given input array
   */
  User_CreateWithListPost: (data: IUser[] = {}): Promise<null> => {
    return request({
      url: `/user/createWithList`,
      method: "POST",
      data
    });
  },
  /**
  * @description: user-Get user by user name
    req =>>  IUser {
      id: number //没有提供描述
      username: string //没有提供描述
      firstName: string //没有提供描述
      lastName: string //没有提供描述
      email: string //没有提供描述
      password: string //没有提供描述
      phone: string //没有提供描述
      userStatus: number //User Status
    }
  */
  User_$username$Get: (code: string = ""): Promise<IUser> => {
    return request({
      url: `/user/${code}`,
      method: "GET"
    });
  },
  /**
  * @description: user-This can only be done by the logged in user.
    req =>>  IUser {
      id: number //没有提供描述
      username: string //没有提供描述
      firstName: string //没有提供描述
      lastName: string //没有提供描述
      email: string //没有提供描述
      password: string //没有提供描述
      phone: string //没有提供描述
      userStatus: number //User Status
    }
  */
  User_$username$Put: (code: IUser = {}): Promise<null> => {
    return request({
      url: `/user/${code}`,
      method: "PUT",
      data
    });
  },
  /**
   * @description: user-This can only be done by the logged in user.
   */
  User_$username$Delete: (code: string = ""): Promise<null> => {
    return request({
      url: `/user/${code}`,
      method: "DELETE"
    });
  },
  /**
  * @description: user-Logs user into the system
    req =>>  IUserloginQueryParams {
      username: string //The user name for login
      password: string //The password for login in clear text
    }
  */
  User_LoginGet: (data: IUserloginQueryParams = {}): Promise<string> => {
    return request({
      url: `/user/login`,
      method: "GET",
      params: data
    });
  },
  /**
   * @description: user-Logs out current logged in user session
   */
  User_LogoutGet: (): Promise<null> => {
    return request({
      url: `/user/logout`,
      method: "GET"
    });
  },
  /**
  * @description: user-This can only be done by the logged in user.
    req =>>  IUser {
      id: number //没有提供描述
      username: string //没有提供描述
      firstName: string //没有提供描述
      lastName: string //没有提供描述
      email: string //没有提供描述
      password: string //没有提供描述
      phone: string //没有提供描述
      userStatus: number //User Status
    }
  */
  UserPost: (data: IUser = {}): Promise<null> => {
    return request({
      url: `/user`,
      method: "POST",
      data
    });
  }
};

interface IApiResponse {
  /**没有提供描述 */
  code: number;
  /**没有提供描述 */
  type: string;
  /**没有提供描述 */
  message: string;
}
interface ICategory {
  /**没有提供描述 */
  id: number;
  /**没有提供描述 */
  name: string;
}
interface IPet {
  /**没有提供描述 */
  id: number;
  /**没有提供描述 */
  category: ICategory[];
  /**没有提供描述 */
  name: string;
  /**没有提供描述 */
  photoUrls: string[];
  /**没有提供描述 */
  tags: ITag[];
  /**pet status in the store */
  status: string;
}
interface ITag {
  /**没有提供描述 */
  id: number;
  /**没有提供描述 */
  name: string;
}
interface IOrder {
  /**没有提供描述 */
  id: number;
  /**没有提供描述 */
  petId: number;
  /**没有提供描述 */
  quantity: number;
  /**没有提供描述 */
  shipDate: string;
  /**Order Status */
  status: string;
  /**没有提供描述 */
  complete: boolean;
}
interface IUser {
  /**没有提供描述 */
  id: number;
  /**没有提供描述 */
  username: string;
  /**没有提供描述 */
  firstName: string;
  /**没有提供描述 */
  lastName: string;
  /**没有提供描述 */
  email: string;
  /**没有提供描述 */
  password: string;
  /**没有提供描述 */
  phone: string;
  /**User Status */
  userStatus: number;
}
interface IPetfindByStatusQueryParams {
  /**Status values that need to be considered for filter */
  status: string[];
}
interface IPetfindByTagsQueryParams {
  /**Tags to filter by */
  tags: string[];
}
interface IUserloginQueryParams {
  /**The user name for login */
  username: string;
  /**The password for login in clear text */
  password: string;
}
