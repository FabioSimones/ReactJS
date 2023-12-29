import React from 'react'
import "./Thanks.css"
import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
} from 'react-icons/bs'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>,

}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>Sua opinião é muito importante, em breve você receberá um cupom de desconto para sua próxima compra</p>
      <p>Para concluir sua avaliação, clique no botão enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>    
    </div>
  )
}

export default Thanks