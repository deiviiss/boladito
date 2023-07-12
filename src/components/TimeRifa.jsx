import PropTypes from 'prop-types'

const formatTimeUnit = (value) => {
  return value.toString().padStart(2, '0') // Agrega ceros a la izquierda si el valor es de un solo dígito
}

// NOT ACCEPT MORE THAN 99 DAYS
export default function TimeRifa ({ raffleDate }) {
  const currentDate = new Date()
  const timeDifference = Math.abs(new Date(raffleDate) - currentDate)

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
        ? <div className="flex justify-end items-center font-medium text-[#0c7065]">
          <p className='flex justify-center items-center h-5 w-4 rounded bg-white text-quaternary border shadow-md'>{formattedDays.charAt(0)}</p>
          <p className='flex justify-center items-center h-5 w-4 rounded bg-white text-quaternary border shadow-md'>{formattedDays.charAt(1)}</p>:
          <p className='flex justify-center items-center h-5 w-4 rounded bg-white text-quaternary border shadow-md'>{formattedHours.charAt(0)}</p>
          <p className='flex justify-center items-center h-5 w-4 rounded bg-white text-quaternary border shadow-md'>{formattedHours.charAt(1)}</p>:
          <p className='flex justify-center items-center h-5 w-4 rounded bg-white text-2B726E border shadow-md'>{formattedMinutes.charAt(0)}</p>
          <p className='flex justify-center items-center h-5 w-4 rounded bg-white text-2B726E border shadow-md'>{formattedMinutes.charAt(1)}</p>
        </div>
        : <div className="flex justify-end items-center text-[8px] text-[#0c7065]"><p className='flex justify-center items-center w-12 py-1 px-2 rounded bg-white text-2B726E border shadow-md'>Pronto</p></div>
         }
    </>
  )
}

TimeRifa.propTypes = {
  raffleDate: PropTypes.object
}
