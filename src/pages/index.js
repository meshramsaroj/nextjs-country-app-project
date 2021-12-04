import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../component/layout/layout'
import CountriesTable from '../component/countriesTable/countriesTable'
import { useState } from 'react';
import SearchBar from '../component/searchbar/searchbar'


export default function Home({ countries }) {
  console.log(countries[0]);
  const [searchValue, setSearchValue] = useState('')

  const filterCountires = countries.filter(country =>{
    return country.name.common.toLowerCase().includes(searchValue)
    // ||
    // console.log(country.subregion)
    // return country.region.toLowerCase().includes(searchValue) 
    // ||
    // return country.subregion.toLowerCase().includes(searchValue)
}
    )

  const onInputChange = (e) => {
    console.log(e.target.value)
    e.preventDefault();
    setSearchValue(e.target.value.toLowerCase())
    console.log(searchValue)
  }

  return (
    <Layout countries={countries}>
      <section>
        <section className="grid-3x1 search-bar">
          <SearchBar onChange={onInputChange}></SearchBar>
          <section className="t-right f-3 xs-f-caps fw-400 c-neutral-3 mv-20px pr-3">Found {countries.length} countries</section>
        </section>
        <CountriesTable countries={filterCountires} />
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
