import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../component/layout/layout'
import CountriesTable from '../component/countriesTable/countriesTable'
import { useState } from 'react';
import SearchBar from '../component/searchbar/searchbar'
import Pagination from  '../component/pagination/pagination'


export default function Home({ countries }) {
  console.log(countries[0]);
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  const filterCountires = countries.filter(country => {
    return country.name.common.toLowerCase().includes(searchValue) 
    // || country.region.toLowerCase().includes(searchValue) || country.subregion.toLowerCase().includes(searchValue)
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
        <section className="grid-3x1 search-bar">
          <SearchBar onChange={onInputChange}></SearchBar>
          <section className="t-right f-3 xs-f-caps fw-400 c-neutral-3 mv-20px pr-3">Found {countries.length} countries</section>
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
