import React from 'react'
import ResultsCSS from './Results.module.css'
import classNames from 'classnames'
import User from '../../../Assets/GenericUser.jpg'

const Results = () => {

  const data = [
    {
        name:'ahmed',
        date:'29 Feb 10:30 am',
        gender: true,
        degree:'First'
    },
    {
        name:'ahmed',
        date:'29 Feb 10:30 am',
        gender: true,
        degree:'Second'
    },
    {
        name:'ahmed',
        date:'29 Feb 10:30 am',
        gender: true,
        degree:'Third'
    },
    {
        name:'ahmed',
        date:'29 Feb 10:30 am',
        gender: false,
        degree:'NA'
    },
]

  return (
    <div className='p-4'>
        <table className={[ResultsCSS.RST, 'p-4'].join(' ')}>
                <tr className={[ResultsCSS.thead, ResultsCSS.NB, 'p-4'].join(' ')}>
                    <th style={{borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px'}}>Patient</th>
                    <th>Date of Burn Captured</th>
                    <th>Burn Classification</th>
                    <th style={{borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}}>Degree of Burn</th>
                </tr>
                {data.map(d => <tr>
                    <td style={{textAlign:'left'}}>
                      <img src={User} style={{width:'25px', height:'25px',borderRadius:'50%',objectFit:'cover'}} className='mx-1'/>
                      {d.name}
                    </td>
                    <td>{d.date}</td>
                    <td style={{fontWeight: '600', color: '#008894'}}>{d.gender ? '🗸' : '☓'}</td>
                    <td>
                      <div className={classNames('p-2', d.degree == 'First' && 'bg-primary', d.degree == 'Second' && 'bg-warning', d.degree == 'Third' && 'bg-danger', d.degree == 'NA' && 'bg-info')} style={{borderRadius:'15px',width:'50%',display:'inline-block'}}>
                        {d.degree}
                      </div>
                    </td>
                </tr>)}
                <tr style={{border:'none'}} className={ResultsCSS.NB}>
                  <td></td>
                </tr>
        </table>
    </div>
  )
}

export default Results