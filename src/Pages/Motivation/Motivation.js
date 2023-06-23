import React from 'react'
import MotivationCard from '../../Components/MotivationCard/MotivationCard'
import img1 from '../../Assets/Manal.jpg'
import img2 from '../../Assets/Raghda.jpg'
import MotivationCardCSS from '../../Components/MotivationCard/MotivationCard.module.css'

const Motivation = () => {
  // const MD = [
  //   {
  //     name : 'Manal hosny',
  //     text : `A girl in her thirties who survived burns. The girl was exposed to a painful accident, which caused her physical burns, and pain in her heart. Whenever she looked in the mirror, she remembered her mother, uncle, and grandmother, who had lost them in the same accident.
  //     Things changed a lot after President Abdel-Fattah El-Sisi embraced the issue of Al-Harw last December through the “Qaderoon with a Difference” celebration, where Manal had the opportunity for the first time.
  //     To present one of the ceremonial paragraphs in front of a large number of attendees, which was a turning point in Manal's life. Through her participation, Manal enjoyed the acceptance of society again.`
  //   },
  //   {
  //     name: 'Raghda Abd Elaziz',
  //     text: `"The Lord of good does not come except with good."
  //     The motto of Raghda Abdel Aziz, a real heroine among the burn survivors who refused to surrender to her circumstances and knew that her difference helped her stand out. Raghda's accident made her dream of becoming a deputy in the House of Representatives so that she could reach the voice of all burn survivors and help them get a decent life.`    }
  // ]
  return (
    <div className='p-4'>
      {/* {MD.map(m => <MotivationCard name={m.name} text={m.text}/>)} */}
      <div className={[MotivationCardCSS.MotivationCard, 'p-4 mb-3'].join(' ')}>
        <h2 className='mb-4'>Manal hosny</h2>
        <div className={MotivationCardCSS.Container}>
            <div className={[MotivationCardCSS.imgContainer]}>
                <img src={img1} alt='test'/>
            </div>
            <div className={[MotivationCardCSS.Txt, 'p-2'].join(' ')}>
            A girl in her thirties who survived burns. The girl was exposed to a painful accident, which caused her physical burns, and pain in her heart. Whenever she looked in the mirror, she remembered her mother, uncle, and grandmother, who had lost them in the same accident.
      Things changed a lot after President Abdel-Fattah El-Sisi embraced the issue of Al-Harw last December through the “Qaderoon with a Difference” celebration, where Manal had the opportunity for the first time.
      To present one of the ceremonial paragraphs in front of a large number of attendees, which was a turning point in Manal's life.
            </div>
        </div>
      </div>

      <div className={[MotivationCardCSS.MotivationCard, 'p-4 mb-3'].join(' ')}>
        <h2 className='mb-4'>Raghda Abd Elaziz</h2>
        <div className={MotivationCardCSS.Container}>
            <div className={[MotivationCardCSS.imgContainer]}>
                <img src={img2} alt='test'/>
            </div>
            <div className={[MotivationCardCSS.Txt, 'p-2'].join(' ')}>
            "The Lord of good does not come except with good."
      The motto of Raghda Abdel Aziz, a real heroine among the burn survivors who refused to surrender to her circumstances and knew that her difference helped her stand out. Raghda's accident made her dream of becoming a deputy in the House of Representatives so that she could reach the voice of all burn survivors and help them get a decent life.
            </div>
        </div>
      </div>
    </div>
  )
}

export default Motivation