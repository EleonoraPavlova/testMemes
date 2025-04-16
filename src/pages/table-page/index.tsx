import {useEffect, useState} from "react";

import ProgressHeroui from "@/components/progress";
import TableCards from "@/components/table";
import {Card} from "@/types";


const TablePage = () => {
 const [cards, setCards] = useState<Card[]>([])
 const [isLoading, setIsLoading] = useState(true)
 const [error, setError] = useState<string | null>(null)

 useEffect(() => {
  const fetchCards = async () => {
   try {
    const response = await fetch('https://67fce9a61f8b41c816881049.mockapi.io/api/mems/cards')
    if (!response.ok) throw new Error('Ошибка при получении карточек')
    const data = await response.json()
    setCards(data)
   } catch (e) {
    setError(e as string)
   } finally {
    setIsLoading(false)
   }
  }
  fetchCards()
 }, [])

 return (
  <div>
   {isLoading && <ProgressHeroui/>}
   <h1 className="text-[30px] font-bold m-[20px]">Table of Memes</h1>
   {error && <p className="text-red-500">{error}</p>}
   <TableCards cards={cards}/>
  </div>
 );
};

export default TablePage;