/**
 *
 * todo 는 id & text & completed 프로퍼티를 가지는 객체
 *
 * const todo = {
 *  id: 1,
 *  text: "oo 컨텐츠 상세 조회 API 추가",
 *  completed: false,
 * }
 *
 */
const initialState = [];

let id = 0;

/**
 *
 * reducer 는 state & action 을 파라미터로 받는 하나의 함수
 * action 은 우리가 정의한 액션
 * dispatch 를 통해 발행된 action 을 reducer 가 전달받는다.
 *
 */
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add": {
      const newTodo = {
        id: ++id,
        text: action.payload,
      };
      return state.concat(newTodo);
    }
    case "todo/complete": {
      return state.map((todo) => {
        if (todo.id === payload.id) {
          todo.completed = true;
        }
        return todo;
      });
    }
    case "todo/delete": {
      return state.filter((todo) => todo.id === action.payload);
    }
  }
  return state;
};

export default todoReducer;
