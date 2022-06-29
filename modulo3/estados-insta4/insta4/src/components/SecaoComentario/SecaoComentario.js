import React, {useState} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export function SecaoComentario(props) {

	const [comentar, setComentar] = useState("")

	const deixarComentario = (event) => {
		setComentar(event.target.value)
		console.log("comentário")
	}

	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={comentar}
				onChange={deixarComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}