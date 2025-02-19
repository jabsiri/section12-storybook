import {useNavigate} from "react-router-dom";
import {getEmotionIamge} from "../util/get-emotion-image";
import "./DiaryItem.css";
import Button from "./Button";

const DiaryItem = ({id, emotionId, createdDate, content}) => {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={() => nav(`/diary/${id}`)}>
        <img src={getEmotionIamge(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button
          text={"수정하기"}
          onClick={() => nav(`/edit/${id}`)}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
