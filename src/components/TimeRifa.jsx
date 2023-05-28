import PropTypes from 'prop-types'

const formatTimeUnit = (value) => {
  return value.toString().padStart(2, '0') // Agrega ceros a la izquierda si el valor es de un solo dígito
}

// NOT ACCEPT MORE THAN 99 DAYS
export default function TimeRifa ({ rifaDate }) {
  const currentDate = new Date()
  const timeDifference = Math.abs(new Date(rifaDate) - currentDate)

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))

  const formattedDays = formatTimeUnit(days)
  const formattedHours = formatTimeUnit(hours)
  const formattedMinutes = formatTimeUnit(minutes)

  const isMoreThan99Days = days > 99

  return (
    <>
      {!isMoreThan99Days
        ? <div className="flex justify-end items-center text-[#0c7065]">
          <p className='flex justify-center items-center h-[14.5px] w-[11.5px] rounded-[4.3px] bg-white text-2B726E shadow-md'>{formattedDays.charAt(0)}</p>
          <p className='flex justify-center items-center h-[14.5px] w-[11.5px] rounded-[4.3px] bg-white text-2B726E shadow-md'>{formattedDays.charAt(1)}</p>:
          <p className='flex justify-center items-center h-[14.5px] w-[11.5px] rounded-[4.3px] bg-white text-2B726E shadow-md'>{formattedHours.charAt(0)}</p>
          <p className='flex justify-center items-center h-[14.5px] w-[11.5px] rounded-[4.3px] bg-white text-2B726E shadow-md'>{formattedHours.charAt(1)}</p>:
          <p className='flex justify-center items-center h-[14.5px] w-[11.5px] rounded-[4.3px] bg-white text-2B726E shadow-md'>{formattedMinutes.charAt(0)}</p>
          <p className='flex justify-center items-center h-[14.5px] w-[11.5px] rounded-[4.3px] bg-white text-2B726E shadow-md'>{formattedMinutes.charAt(1)}</p>
        </div>
        : <div className="flex justify-end items-center text-[7px] text-[#0c7065]"><p className='flex justify-center items-center h-[14.5px] rounded-[4.3px] bg-white text-2B726E shadow-md'>Pronto</p></div>
         }
    </>
  )
}

TimeRifa.propTypes = {
  rifaDate: PropTypes.object
}
