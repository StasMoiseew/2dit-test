import React, { FC, useState } from 'react'

import './Accordion.css';
import { ArrowDownIcon } from '../../assets/icons';

type Props = {
  title: string;
  description: string;
  className?: string;
}

export const Accordion: FC<Props> = ({ title, description, className }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(prevState => !prevState);
  }

  const classNames = className ? `accordion ${className}` : 'accordion';

  const iconClassNames = open ? `accordion__icon accordion__icon_opened` : 'accordion__icon';

  const descriptionWrapperClassNames = open
    ? `accordion__description-wrapper accordion__description-wrapper_opened`
    : 'accordion__description-wrapper';

  return (
    <div className={classNames}>
      <button className='accordion__button' onClick={toggleAccordion}>
        <span className='accordion__title'>{title}</span>
        <ArrowDownIcon className={iconClassNames} />
      </button>
      <div className={descriptionWrapperClassNames}>
        <span className={`accordion__description`}>
          {description}
        </span>
      </div>
    </div>
  )
}