function Body({users,filterSearch}){
    return(
        <div className="d-flex flex-wrap justify-content-around">
            {users.filter((user)=>{
                return user.name.first.toLowerCase().includes(filterSearch)
            }).map(  user => 
                <div className="card" style={{width: "20rem"}} >
                <img src={user.picture.medium} className="card-img-top" alt="..." style={{objectFit: "cover", height:"18rem", width:"20rem"}}/>
                <div className="card-body">
                <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                <p className="card-text">{user.cell}</p>
                <p className="card-text">{user.email}</p>
                <p className="card-text">City: {user.location.city}</p>
              
                </div>
                </div> ) }
        </div>
    )
    }
    export default Body;




