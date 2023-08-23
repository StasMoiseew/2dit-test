import React, { FC } from 'react'

import './Task1.css';
import { Task1Accordion } from '../../models';
import { Accordion } from '../../components/Accordion';

type Props = {
  description: string;
  accordions: Task1Accordion[];
}

export const Task1: FC<Props> = ({ description, accordions }) => {
  const accordionsList = accordions.map(accordion => (
    <Accordion
      key={accordion.title}
      title={accordion.title}
      description={accordion.description}
      className='task1__accordion'
    />
  ))

  return (
    <section className='task1'>
      <div className='task1__main-block'>
        <h2 className='task1__title'>На что рассчитывать привзыскании неустойки по ДДУ?</h2>
        <span className='task1__description' dangerouslySetInnerHTML={{__html: description}} />
      </div>
      <div className='task1__accordion-block'>
        {accordionsList}
      </div>
    </section>
  )
}