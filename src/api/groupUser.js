import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/group/getGroupUserList',
    method:'get',
    params:params
  })
}


export function deleteCoupon(id) {
  return request({
    url:'/coupon/delete/'+id,
    method:'post',
  })
}