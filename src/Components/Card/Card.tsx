import "./Card.css";

interface ICardProps{
info:{};
show:boolean;
setShow(value : boolean):any;
setShowInfo(value : {}):any;
}

export default function Card({ info, show, setShow, setShowInfo }:ICardProps) {
  return (
    <div
      className="card"
      onClick={() => {
        if (!show) {
          setShow(true);
          setShowInfo(info);
        }
      }}
    >
      <span className="card-title">{info.title}</span>
      <span className="card-note">{info.note}</span>
    </div>
  );
}
