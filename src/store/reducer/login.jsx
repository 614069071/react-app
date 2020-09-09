export default function (state = { username: "Jeet" }, action) {
  const result = {};

  switch (action.type) {
    case "login":
      result.username = action.data;
      break;
    default:
  }

  return Object.assign({}, state, result);
}
