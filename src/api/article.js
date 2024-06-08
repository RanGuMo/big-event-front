//导入请求工具类
import request from "@/utils/request.js";
//导入@/stores/token.js
import { useTokenStore } from "@/stores/token";

//文章分类列表查询
export const articleCategoryListService = () => {
  //   // return request.get('/category')
  //   //获取token状态
  //   const tokenStore = useTokenStore();
  //   //通过请求头Authorization携带token
  //   return request.get("/category", {
  //     headers: { Authorization: tokenStore.token },
  //   });
  return request.get("/category");
};


//添加文章分类
export const articleCategoryAddService = (categoryModel) => {
    return request.post('/category', categoryModel)
}