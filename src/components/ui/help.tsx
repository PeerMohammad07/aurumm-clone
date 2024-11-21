import React from "react"
import { HoverCardGrid } from "./card-hover-effect"

const Help:React.FC<any> = ({cardData}) => {
  return (
    <div>
      <h3 className="font-bold text-center pt-10">WHY AURUMM - AU PAY?</h3>
      <h1 className="text-center text-4xl py-4 font-bold">Euismod Scelerisque Pretiumdui</h1>
      <HoverCardGrid items={cardData} />
    </div>
  )
}

export default Help
