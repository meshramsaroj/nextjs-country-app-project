import KeyboardArrowDownRounded from "@material-ui/icons/KeyboardArrowDownRounded"
import KeyboardArrowUpRounded from "@material-ui/icons/KeyboardArrowUpRounded"
import { useState } from "react"


export const orderBy = (countries, value, direction) => {
    if (value === "name") {
        if (direction === 'asc') return [...countries].sort((a, b) => a.name.common > b.name.common ? 1 : -1)
        if (direction === 'desc') return [...countries].sort((a, b) => a.name.common > b.name.common ? -1 : 1)
    }

    if (direction === 'asc') return [...countries].sort((a, b) => a[value] > b[value] ? 1 : -1)
    if (direction === 'desc') return [...countries].sort((a, b) => a[value] > b[value] ? -1 : 1)
    return countries

}

export const SortArrow = ({ direction }) => {
    if (!direction) return <></>;
    if (direction === "desc") {
        return (
            <div className="c-semantic-success">
                <KeyboardArrowDownRounded />
            </div>
        )
    } else {
        return (
            <div className="c-semantic-success">
                <KeyboardArrowUpRounded />
            </div>
        )
    }
}


const CountriesTable = ({ countries }) => {
    const [direction, setDirection] = useState();
    const [value, setValue] = useState();
    const orderByConuntire = orderBy(countries, value, direction)

    const switchDirection = () => {
        if (!direction) setDirection('desc');
        else if (direction === "desc") setDirection('asc')
        else setDirection(null)
    }

    const switchValueDirection = (value) => {
        console.log(value)
        switchDirection();
        setValue(value)
    }

    return (
        <div>
            <div className="grid-2x1 p-1">
                <button className="p-1 f-2 f-upper fw-600 name bg-transparent t-left c-neutral-2 grid-2x1" onClick={() => switchValueDirection("name")}>
                    Name
                    <SortArrow direction={direction} />
                </button>
                <button className="p-1 f-2 f-upper fw-600 population bg-transparent c-neutral-2 grid-2x1 t-right" onClick={() => switchValueDirection("population")}>
                    Population
                    <SortArrow direction={direction} />
                </button>
            </div>
            <div>
                {orderByConuntire.map((c, index) => (
                    <div className="grid-3x1 bg-secondary elevate-1 round-1 mv-2 p-2 t-center c-neutral-2 f-2 fw-500 country-row" key={index}>
                        <div className="t-left col-span-2">{c.name.common}</div>
                        <div className={c.population + ' t-left'}>{c.population}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountriesTable;