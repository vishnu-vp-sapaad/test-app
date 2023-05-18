import "./Main.css";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../Context/dataContext";
import { useContext, useState } from "react";
import Card from "../Card/Card";
import Show from "../Show/Show";

export default function Main() {
  const navigate = useNavigate();

  const { data } = useContext(dataContext);

  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(null);

  return (
    <>
      <div className={show ? "main main-hide" : "main"}>
        <button
          className="btn main-btn"
          onClick={() => !show && navigate("/create")}
        >
          Create
        </button>
        <div className="card-holder">
          {data.map((info) => {
            return (
              <Card
                key={info.id}
                info={info}
                show={show}
                setShow={setShow}
                setShowInfo={setShowInfo}
              />
            );
          })}
        </div>
      </div>
      {show ? <Show info={showInfo} setShow={setShow} /> : null}
    </>
  );
}
