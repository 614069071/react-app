export default function (state = { nickname: "小黑" }, action) {
  const result = {};

  switch (action.type) {
    case "register":
      result.nickname = action.data;
      break;
    default:
  }

  return Object.assign({}, state, result);
}
