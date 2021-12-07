
import SearchRounded from '@material-ui/icons/SearchRounded'

const SearchBar = ({onChange}) => {
    return (
        <section className="grid-8x1 c-neutral-3 col-span-2">
            <SearchRounded className="mv-20px col-span-2 t-right w-100p" fontSize='large' color="inherit" />
            <input type="text" placeholder="Filter by Country Name" className='f-3 w-100p col-span-6 search-input bg-transparent fw-500' onChange={onChange}/>
        </section>
    )
}

export default SearchBar