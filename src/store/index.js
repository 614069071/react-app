import { createStore, applyMiddleware } from "redux";
import { connect } from "react-redux";
import thunkMiddleware from "redux-thunk"; //实现异步action
import reducer from "./reducer/index";

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({ dispatch });

// 拓展组件HOC
export const Connect = connect(mapStateToProps, mapDispatchToProps);

// 创建store
export const store = applyMiddleware(thunkMiddleware)(createStore)(reducer);

store.subscribe(() => console.log(store.getState()))