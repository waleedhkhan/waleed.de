exports.handler = async function (event, context) {
  console.dir(event);
  console.dir(context);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
