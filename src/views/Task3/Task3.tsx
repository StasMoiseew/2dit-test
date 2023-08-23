import { FC } from 'react'
import { Task3Block } from '../../models';

import './Task3.css';
import useDeviceType from '../../hooks/useDeviceType';

type Props = {
  blocks: Task3Block[];
}

export const Task3: FC<Props> = ({ blocks }) => {
  const getIndex = (index: number) => {
    if (index < 10) {
      return `.0${index}`;
    }
    return `.${index}`;
  }

  const deviceType = useDeviceType();

  const isMobile = deviceType !== 'desktop';

  return (
    <div className='task3'>
      {blocks.map(block => (
        <article className='task3__block'>
          {isMobile ? (
            <>
              <div className='task3__block-info'>
                <div className='task3__block-index'>{getIndex(block.index)}</div>
                <div className='task3__block-title'>{block.title.toUpperCase()}</div>
              </div>
              <div className='task3__block-image' style={{
                backgroundImage: `url(${block.imageUrl})`
              }} />
              <div className='task3__block-info'>
                <div className='task3__block-description'>{block.description}</div>
              </div>
            </>
          ) : (
            <>
              <div className='task3__block-info'>
                <div className='task3__block-index'>{getIndex(block.index)}</div>
                <div className='task3__block-title'>{block.title.toUpperCase()}</div>
                <div className='task3__block-description'>{block.description}</div>
              </div>
              <div className='task3__block-image' style={{
                backgroundImage: `url(${block.imageUrl})`
              }} />
            </>
          )}
        </article>
      ))}
    </div>
  )
}