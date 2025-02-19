import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App";
import useDiary from "../hooks/usediary";

import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  const {onDelete, onUpdate} = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);
  /*
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find((item) => {
      return String(item.id) === String(params.id);
    });

    if (!currentDiaryItem) {
      alert("존재하지 않는 일기입니다.");
      nav("/", {relative: true});
    }
    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);
*/
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요?")) {
      onDelete(params.id);
      nav("/", {replace: true});
    }
  };

  const onSubmit = (input) => {
    console.log(input);
    if (confirm("수정할까요?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
      nav("/", {replace: true});
    }
  };

  return (
    <div>
      <Header
        title="일기수정하기"
        leftChild={
          <Button
            text="< 뒤로가기"
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button
            text="삭제하기"
            type="NEGATIVE"
            onClick={onClickDelete}
          />
        }
      />
      <Editor
        initData={curDiaryItem}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Edit;
