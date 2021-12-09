
import SearchRounded from '@material-ui/icons/SearchRounded'

const SearchBar = ({onChange}) => {
    return (
        <section className="d-flex c-neutral-3 sm-pos-1_1 sm-col-span-2">
            <SearchRounded className="mv-20px t-right w-20p" fontSize='large' color="inherit" />
            <input type="text" placeholder="Filter by Country Name" className='f-3 w-80p search-input bg-transparent fw-500 ai-start' onChange={onChange}/>
        </section>
    )
}

export default SearchBar