import { NavLink } from "react-router-dom"

export default function Card({id, title, photo, price}) {
    return (
        <>
            <NavLink to={`/products/${id}`}>
                <a key={id} href='#' className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            src={photo}
                            alt={photo}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">Товар - {title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{price} ₽</p>
                </a>
            </NavLink>
        </>
    )
}