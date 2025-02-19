import {useReducer, useRef, createContext} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

import Button from "./components/Button";
import Header from "./components/Header";

import {getEmotionIamge} from "./util/get-emotion-image";

import "./App.css";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-11-04").getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id: 2,
    createdDate: new Date("2024-11-05").getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  },
  {
    id: 3,
    createdDate: new Date("2024-10-03").getTime(),
    emotionId: 3,
    content: "3번 일기 내용"
  },
  {
    id: 4,
    createdDate: new Date("2024-12-05").getTime(),
    emotionId: 4,
    content: "4번 일기 내용"
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => {
        //console.log(item.id, action.data.id, item.id === action.data.id);
        const a = String(item.id) === String(action.data.id) ? action.data : item;
        //console.log(a);
        return a;
      });
    case "DELETE":
      return state.filter((item) => item.id !== action.data.id);
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(5);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    console.log(id, createdDate, emotionId, content);
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {id: 1}
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello");
        }}>
        일기 추가 테스트
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 1, "수정된 일기입니다.");
        }}>
        일기 수정 테스트
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}>
        일기 수정 테스트
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/new"
              element={<New />}
            />
            <Route
              path="/diary/:id"
              element={<Diary />}
            />
            <Route
              path="/edit/:id"
              element={<Edit />}
            />
            <Route
              path="*"
              element={<Notfound />}
            />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
