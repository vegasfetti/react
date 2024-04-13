

export default function Filter({ sorting, onSortingChange }) {
    return (
        <>

            <div className="filter  border border-1 border-gray-200 py-[10px] px-[30px] rounded">

                <div className="select">


                    <label htmlFor="filter"></label>
                    <select className="bg-transparent" id="filter" value={sorting} onChange={onSortingChange}>
                        <option value="default">По умолчанию</option>
                        <option value="priceAscending">По возрастанию цены</option>
                        <option value="priceDescending">По убыванию цены</option>
                        <option value="nameA">По наименованию (A-Z)</option>
                        <option value="nameZ">По наименованию (Z-A)</option>
                    </select>

                </div>


            </div>

        </>
    )
}