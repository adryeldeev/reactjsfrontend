import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Create() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    numero: "",
  });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8081/user/${id}`)
      .then((res) => {
        console.log(res);
        setUsers({
          ...values,
          name: data[0].name,
          email: data[0].email,
          numero: data[0].numero
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Adicionar Cliente</h2>
          <div className="mb-2">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Nome"
              className="form-control"
              required
              value={users.name}
              onChange={(e) =>
                setValues({ ...values, name: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              required
              value={users.email}
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Numero</label>
            <input
              type="text"
              placeholder="Numero"
              className="form-control"
              required
              value={users.numero}
              onChange={(e) =>
                setValues({ ...values, numero: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success">Editar</button>
        </form>
      </div>
    </div>
  );
}

export default Create;