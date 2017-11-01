/**
 * Created: leezii
 * Date: 2017/10/23
 * Time: 18:16
 */
export class CtrlRes {
  constructor() {

  }

  validate(ctx, params) {
    const req = ctx.request
    for (let param of params) {
      if (req.body[param] === undefined) {
        ctx.throw({
          msg: '缺少必要参数',
          code: 2,
        })
      }
    }
  }

  success(ctx, msg = '成功', result = []) {
    ctx.response.body = {
      code: 1,
      msg,
      result: result.length ? result : [],
    }
  }

  error(ctx, code = 1, msg = '失败') {
    ctx.throw({code, msg})
  }
}