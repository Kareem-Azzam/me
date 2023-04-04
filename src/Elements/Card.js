function Card({ title, desc, tags }) {
    return (
        <div className="border p-3">
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{desc}</p>
            <div className="flex flex-wrap gap-1">
                {tags.map((tag, i) => {
                    return (<p key={i} className="border rounded-lg shadow-sm p-2 bg-blue-200 hover:bg-blue-300 cursor-pointer">{tag}</p>)
                })}
            </div>
        </div>
    )
}

export default Card