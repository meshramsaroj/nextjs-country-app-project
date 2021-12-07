import Link from "next/link"

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="d-flex mv-2">
            {pageNumber.map(number => (
                <div key={number} className='btn btn-secondary mh-1h ph-1'>
                    <Link href='#' className="">
                        <a  onClick={()=> paginate(number)}>{number}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Pagination;