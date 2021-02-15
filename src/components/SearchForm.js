import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="cocktail777" style={{ letterSpacing: "0.06em" }} > Выберете ваш любимый коктейль </label>
          <input type="text" id="cocktail777" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )

}

export default SearchForm
