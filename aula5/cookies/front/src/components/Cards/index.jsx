export default function CardItems({ item }) {
    return (
        <div className="grid grid-cols-5">
            <li className=" p-2 border">
                <h1>{item.titulo}</h1>
                <p>{item.status}</p>
            </li>
        </div>
    )
}