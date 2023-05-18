import "./Show.css";
import { dataContext } from "../Context/dataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Show({ info, setShow }) {
  const navigate = useNavigate();

  const { data, setData } = useContext(dataContext);

  function deleteData() {
    const newData = data.filter((e) => e.id != info.id);
    setData(newData);
    setShow(false);
  }
  return (
    <div className="show">
      <div className="show-div">
        <button className="close" onClick={() => setShow(false)}>
          X
        </button>
        <span className="show-title">{info.title}</span>
        <span className="show-note">{info.note}</span>
        <div className="buttons">
          <button
            className="edit-btn"
            onClick={() => navigate(`/edit/${info.id}`)}
          >
            Edit
          </button>
          <button className="delete-btn" onClick={deleteData}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
