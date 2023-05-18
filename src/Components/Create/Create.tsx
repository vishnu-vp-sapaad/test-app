import "./Create.css";
import { dataContext } from "../Context/dataContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();

  const { id, setId, data, setData } = useContext(dataContext);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function createData() {
    setData([...data, { id: id, title: title, note: note }]);
    setId(id + 1);
    navigate("/");
  }

  return (
    <div className="create">
      <form className="form" onSubmit={createData}>
        <div className="input-div">
          <input required value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Title</label>
        </div>
        <div className="input-div">
          <input required value={note} onChange={(e) => setNote(e.target.value)} />
          <label>Note</label>
        </div>
        <button className="btn">Create</button>
      </form>
    </div>
  );
}
