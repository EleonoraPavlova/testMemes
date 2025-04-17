import {ReactElement, useEffect, useState} from "react";

import {PageLayout} from "@/components/page-layout";
import TableCards from "@/components/table";
import {Card} from "@/shared/types";


const TablePage = (): ReactElement => {
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
  <PageLayout isLoading={isLoading} error={error} title={"Table of Memes"}>
   <TableCards cards={cards}/>
  </PageLayout>
 );
};

export default TablePage;