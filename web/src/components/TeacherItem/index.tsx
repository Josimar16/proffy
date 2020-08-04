import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface Teacher {
  name: string,
  avatar: string,
  discipline: string,
  feature: string,
  description: string,
  preco: number
}

const TeacherItem: React.FC<Teacher> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={props.avatar} alt={props.name} />
        <div>
          <strong>{props.name}</strong>
          <span>{props.discipline}</span>
        </div>
      </header>
      <p>
        {props.feature}
        <br /><br />
        {props.description}
      </p>
      <footer>
        <p>Preço/hora <strong>R$ {props.preco},00</strong></p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
      </footer>
    </article>
  )
}

export default TeacherItem