import React from 'react';
import '../../styles/css';

export default function Card({
  principalImg,
  sencondImg,
  title,
  date,
  tags,
  synopsis,
}: any) {
  return (
    <div className='container-card'>
      <div className='card'>
        <div className='card-inside front'>
          <img src={principalImg} alt={title} className='card-image'/>
        </div>

        <div className='card-inside back'>
          <div className='card-details'>
            <div className='card-snap'>
            <img src={sencondImg || principalImg} alt={title} className='card-image'/>
            </div>
            <h1>
              {title}
              <br />
              <span>{date}</span>
            </h1>
            <ul className='card-tags'>
              {tags.map((object: string, index: number) => {
                return (
                  <li key={index}>
                    <a href='#'>{object}</a>
                  </li>
                );
              })}

              {/* <li>
                <a href='#'>Crime</a>
              </li> */}
            </ul>
            <p className='card-synopsis'>
              {synopsis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
