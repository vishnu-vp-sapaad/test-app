import { dataContext } from "../Context/dataContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, setData } = useContext(dataContext);

  const [title, setTitle] = useState(() => {
    const reqData = data.find((e) => e.id == id);
    if (reqData) return reqData.title;
    return "";
  });
  const [note, setNote] = useState(() => {
    const reqData = data.find((e) => e.id == id);
    if (reqData) return reqData.note;
    return "";
  });

  useEffect(() => {
    const reqData = data.find((e) => e.id == id);
    if (!reqData) navigate("/");
  }, []);

  function editData() {
    const newData = data.filter((e) => e.id != id);
    const reqData = [...newData, { id: id, title: title, note: note }];
    setData(reqData);
    navigate("/");
  }

  return (
    <div className="create">
      <form className="form" onSubmit={editData}>
        <div className="input-div">
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Title</label>
        </div>
        <div className="input-div">
          <input
            required
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <label>Note</label>
        </div>
        <button className="btn">Edit</button>
      </form>
    </div>
  );
}
