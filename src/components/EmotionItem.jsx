import "./EmotionItem.css";
import {getEmotionIamge} from "../util/get-emotion-image";

const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
  return (
    <div
      className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
      onClick={onClick}>
      <img
        className="emotion_img"
        src={getEmotionIamge(emotionId)}
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
