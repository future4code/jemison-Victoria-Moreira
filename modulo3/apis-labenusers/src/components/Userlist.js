import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonAddUser, ButtonDeleteUser, Display, FormPlay, IconUser, UserList } from "../styled";

function Userlist() {
    // PASSO 1: CRIAR OS ESTADOS DA PLAYLIST
    const [user, setUser] = useState([]);

    // PASSO 8: CRIAÇÃO DO ESTADO DO INPUT
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    // PASSO 9: CRIAÇÃO DO HANDLE PARA CUIDAR DO INPUT
    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    // PASSO 2: COMPONENTIZAR OS ITENS DA LISTA
    const allUsers = user.map((user, index) => {
        return (
            <UserList key={index}>
                <IconUser src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png' />
                {user.name}
            </UserList>
        )
    })

    // PASSO 5: PASSAR O USEEFFECT COM A REQUISIÇÃO GET
        // PARA RENDERIZAR NA TELA AUTOMATICAMENTE
    useEffect(() => {
        getAllUsers()
    }, [])


    // PASSO 3: CRIAÇÃO DAS VARIÁVEIS DA MINHA API
        // QUE ESTARÃO PRESENTES EM TODAS AS REQUISIÇÕES
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            Authorization: 'victoria-moreira-jemison'
        }
    }

    // PASSO 4: CRIAÇÃO DA REQUISIÇÃO GET
    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
        .then((response) => { setUser(response.data) })
        .catch((error) => { console.log(error.response) })
    }

    // PASSO 10: CRIAÇÃO DA REQUISIÇÃO POST
    const body = {
        "name": inputName,
        "email": inputEmail
    }

    const createUser = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert("Usuário cadastrado com sucesso!")
            getAllUsers()
        }).catch((error) => {
            alert("Tente novamente")
        })

        setInputName("")
        setInputEmail("")
    }

    // PASSO 11: CRIAÇÃO DA REQUISIÇÃO DELETE
    const deleteUser = (e) => {
        e.preventDefault();

        const delUser = user.filter((user) => user.name === inputName)

        axios.delete(url + "/" + delUser[0].id, serviceHeaders)
        .then((response) => {
            alert("Usuário deletado com sucesso!")
            getAllUsers();
        }).catch((error) => {
            alert("Algo deu errado. Tente novamente!")
        })

        setInputName("")
    }

    return (
        <Display>
            {/* PASSO 6: RENDERIZAR ISSO NA TELA */}
            <ul>
                {allUsers}
            </ul>
            {/* PASSO 7: CRIAÇÃO DE UM FORMULÁRIO */}
            <FormPlay>
                <input type="text" value={inputName} placeholder="Insira o nome:" onChange={handleInputName} />
                <input type="text" value={inputEmail} placeholder="Insira o e-mail:"  onChange={handleInputEmail} />
                <ButtonAddUser onClick={createUser}>
                    Adicionar
                </ButtonAddUser>
                <ButtonDeleteUser onClick={deleteUser}>
                    Excluir
                </ButtonDeleteUser>
            </FormPlay>
        </Display>
    )
}

export default Userlist;