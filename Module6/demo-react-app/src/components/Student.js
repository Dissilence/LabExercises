function Student({name, location, set = 'set1'}) { //destructure the props object into variables, and optionally set default values

    return (
        <li className="Student"><img src={`https://robohash.org/${name}?size=50x50&set=${set}`} alt={name}/> 
        <span className="details"><strong>{name}</strong>, based in {location}</span></li> 
    )
}

export default Student
