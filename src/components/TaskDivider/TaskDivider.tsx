import React, { FC } from 'react'

import './TaskDivider.css';

type Props = {
  title: string;
}

export const TaskDivider: FC<Props> = ({ title }) => {
  return (
    <header className='task-divider'><h1>{title}</h1></header>
  )
}