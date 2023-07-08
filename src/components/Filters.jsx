import PropTypes from 'prop-types'
import { useFilters } from '../context/filtersContext'

export default function Filters () {
  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <>
      <section>
        <div className='flex gap-2 text-xs p-4'>
          <label htmlFor="price">Precio a partir de: </label>
          <input
              type="range"
              id='price'
              min='0'
              max='100'
              onChange={handleChangeMinPrice}
            />
          <p>$ {filters.minPrice}</p>
        </div>

        <div className="flex gap-2 text-xs p-4">
          <label htmlFor="category">Categoría: </label>
          <select name="category" id="category" onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="keyboards">Teclados</option>
            <option value="pc">PC s</option>
            <option value="screens">Monitores</option>
            <option value="earphones">Audifonos</option>
          </select>
        </div>
      </section>
    </>
  )
}

Filters.propTypes = {
  setFilters: PropTypes.any
}
