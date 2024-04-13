
export default function Search({ query, onChangeQuery }) {
    return (
        <>

            <div className="search border border-1 border-gray-200 py-[10px] px-[30px] rounded outline-0 focus:outline-0">

                <label htmlFor="search"></label>
                <input
                    value={query}
                    type="text"
                    name="search"
                    placeholder="Поиск"
                    onChange={(e) => onChangeQuery(e)}
                />


            </div>

        </>
    )
}