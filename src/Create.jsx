import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Create(){
    const [values, setValues] = useState({
        name: '',
        email: '',
        numero: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8081/client', values)
        .then(res=>
            {console.log(res)
            navigate('/')
            })
        .catch(err => console.log(err))
    }


    return(
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Adicionar Cliente</h2>
                <div className="mb-2">
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder="Nome" className="form-control" required
                    onChange={e=> setValues({...values, name: e.target.value})}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" className="form-control" required
                    onChange={e=> setValues({...values, email: e.target.value})}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Numero</label>
                    <input type="text" placeholder="Numero" className="form-control" required
                    onChange={e=> setValues({...values, numero: e.target.value})}
                    />
                </div>
                <button className="btn btn-success">Cadastrar</button>
            </form>
        </div>
      </div>
    )
}

export default Create