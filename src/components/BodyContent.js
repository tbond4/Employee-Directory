function Body({users}){
    return(
        <div>
            {users.map(user => <p> {user.name.first}{user.name.last}</p>)}
        </div>
    )
    }
    export default Body;