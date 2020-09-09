export const login = (data) => ({ type: "login", data });

export const register = (data) => {
  // 实现异步操作
  return (dispatch) => {
    // 做异步操作，请求数据 此处即为异步请求
    setTimeout(() => {
      dispatch({ type: "register", data });
    }, 2000);
  };
};
