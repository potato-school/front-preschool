/**
 *
 * action 은 type & payload 프로퍼티를 가지는 객체
 * const action = {
 *  type: "todo/add",
 *  payload: "oo 컨텐츠 상세 조회 API 추가",
 * }
 *
 * 아래의 함수들은 액션을 생성하는 함수들
 *
 */
export const addTodoAction = (text) => {
  return {
    type: "todo/add",
    payload: text,
  };
};

export const completeTodoAction = (id) => {
  return {
    type: "todo/complete",
    payload: id,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: "todo/delete",
    payload: id,
  };
};
