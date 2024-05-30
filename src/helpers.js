class Helper {
  static async printCallbackInformation(context) {
    const {
      pathname,
      method,
    } = context.req;

    const print = {
      pathname,
      params: context.req.param(),
      headers: context.req.header(),
      queries: context.req.query(),
    };

    if (method !== 'GET') {
      print.body = await context.req.json();
    }

    console.info(JSON.stringify(print));

    return true;
  }
}

module.exports = Helper;
