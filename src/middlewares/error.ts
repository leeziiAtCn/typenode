/**
 * Created: leezii
 * Date: 2017/10/21
 * Time: 10:19
 */
export default async function handleError(ctx, next) {
  try {
    await next()
  } catch (err) {
    console.log(JSON.stringify(err))
    ctx.response.body = {
      message: err.msg || err.message,
      code: err.code,
      result: [],
    }
  }
}