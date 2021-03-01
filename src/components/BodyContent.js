function Body({users,filterSearch}){
    return(
        <div className="d-flex flex-wrap justify-content-around">
            {users.filter((user)=>{
                return user.name.first.includes(filterSearch)
            }).map(  user => 
                <div className="card" style={{width: "20rem"}}>
                <img src={user.picture.medium} className="card-img-top" alt="..." style={{objectFit: "cover", height:"18rem", width:"20rem"}}/>
                <div className="card-body">
                <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
                </div>
                </div> ) }
        </div>
    )
    }
    export default Body;




