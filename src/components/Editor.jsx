import EmotionItem from "./EmotionItem";
import Button from "./Button";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants";
import {getStringedDate} from "../util/get-stringed-date";

import "./Editor.css";

const Editor = ({placeholder, initData, onSubmit}) => {
  placeholder = placeholder || "오늘은 어땠나요?";
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: ""
  });

  useEffect(() => {
    //console.log("111", initData);
    //console.log("222", {initData});

    if (initData) {
      setInput({...initData, createdDate: new Date(Number(initData.createdDate))});
    }
  }, [initData]);

  const nav = useNavigate();

  const onChageInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value
    });
  };

  const onClickSubmitButton = () => {
    console.log("------");
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createDate"
          value={getStringedDate(input.createdDate)}
          type="date"
          onChange={onChageInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => {
            return (
              <EmotionItem
                key={item.emotionId}
                {...item}
                isSelected={item.emotionId === input.emotionId}
                onClick={() => {
                  onChageInput({
                    target: {
                      name: "emotionId",
                      value: item.emotionId
                    }
                  });
                }}
              />
            );
          })}
        </div>
      </section>
      <section className="constent_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder={placeholder}
          name="content"
          value={input.content}
          onChange={onChageInput}
        />
      </section>
      <section className="button_section">
        <Button
          text={"취소하기"}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button
          text={"작성완료"}
          type="POSITIVE"
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
