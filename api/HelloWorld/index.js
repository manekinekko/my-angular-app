module.exports = async function (context, req) {
  context.res = {
    body: {
      message: 'Hello ' + (req.query.name || req.body.name)
    },
  };
};
