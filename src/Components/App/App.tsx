import { useEffect, useState } from "react";
import { dataContext } from "../Context/dataContext";
import Main from "../Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "../Nopage/NoPage";
import Create from "../Create/Create";
import "./App.css";
import Edit from "../Edit/Edit";

function App() {
  const [data, setData] = useState(() => {
    const reqData = localStorage.getItem("data");
    if (reqData) {
      return JSON.parse(reqData);
    }
    return [];
  });
  const [id, setId] = useState(() => {
    const reqId = localStorage.getItem("id");
    if (reqId) {
      return parseInt(reqId);
    }
    return 1;
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("id", id.toString());
  }, [data, id]);
  return (
    <dataContext.Provider value={{ id, setId, data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
