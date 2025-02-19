import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App";
import {useNavigate} from "react-router-dom";
const useDiary = (id) => {
  const nav = useNavigate;
  const data = useContext(DiaryStateContext);

  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find((item) => {
      return String(item.id) === String(id);
    });

    if (!currentDiaryItem) {
      alert("존재하지 않는 일기입니다.");
      nav("/", {relative: true});
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
