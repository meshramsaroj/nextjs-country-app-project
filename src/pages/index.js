import Layout from '../component/layout/layout'
import CountriesTable from '../component/countriesTable/countriesTable'
import { useState } from 'react';
import SearchBar from '../component/searchbar/searchbar'
import Pagination from '../component/pagination/pagination'
import CountUp from 'react-countup';


export default function Home({ countries }) {
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  const filterCountires = countries.filter(country => {
    return country.name.common.toLowerCase().includes(searchValue)
  });


  const onInputChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value.toLowerCase())
  }

  // Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filterCountires.slice(indexOfFirstCountry, indexOfLastCountry)

  // change page
  const paginate = (number) => {
    setCurrentPage(number)
  }


  return (
    <Layout countries={countries}>
      <section>
        <section className="sm-grid-2x2 search-bar bb-solid md-grid-2x1">
          <SearchBar onChange={onInputChange}></SearchBar>
          <section className="t-center f-3 xs-f-caps fw-400 c-neutral-3 mv-20px pr-3 sm-pos-2_2 sm-col-span-2 md-pos-2_1">
            Found {` `}<CountUp start={0} end={countries.length} duration={3} useEasing={true} className="c-semantic-primary" /> {` `}countries
          </section>
        </section>
        <CountriesTable countries={currentCountries} />
        <Pagination countriesPerPage={countriesPerPage} totalCountries={filterCountires.length} paginate={paginate} />
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    props: {
      countries
    }
  }
}
