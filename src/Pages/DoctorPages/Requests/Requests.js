import React from 'react'
import RequestsCSS from './Requests.module.css'

const Requests = () => {

    const data = [
        {
            name:'ahmed',
            date:'29 Feb 10:30 am',
            gender: 'male',
            status:'pending'
        },
        {
            name:'ahmed',
            date:'29 Feb 10:30 am',
            gender: 'male',
            status:'pending'
        },
        {
            name:'ahmed',
            date:'29 Feb 10:30 am',
            gender: 'male',
            status:'pending'
        },
        {
            name:'ahmed',
            date:'29 Feb 10:30 am',
            gender: 'male',
            status:'pending'
        },
    ]

  return (
    <div className='p-4'>
        <table className={[RequestsCSS.RQT, 'p-4'].join(' ')}>
                <tr className={[RequestsCSS.thead, RequestsCSS.NB, 'p-4'].join(' ')}>
                    <th style={{borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px'}}>Patient</th>
                    <th>Appointment</th>
                    <th>Gender</th>
                    <th>Action</th>
                    <th style={{borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}}>Status</th>
                </tr>
                {data.map(d => <tr>
                    <td>{d.name}</td>
                    <td>{d.date}</td>
                    <td>{d.gender}</td>
                    <td>
                        <button className={[RequestsCSS.cnclBtn, 'p-1 mx-1'].join(' ')}>Cancel</button>
                        <button className={[RequestsCSS.cnfrmBtn, 'p-1 mx-1'].join(' ')}>Confirm</button>
                    </td>
                    <td>{d.status}</td>
                </tr>)}
                <tr style={{border:'none'}} className={RequestsCSS.NB}>
                    <td></td>
                </tr>
        </table>
    </div>
  )
}

export default Requests