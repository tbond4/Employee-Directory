function Filter({handleInputChange, handleCheckbox}){
return(
    <form className="m-4 w-25"> 
        <div className="form-group">
            <label htmlFor="filterSearch">Search by Name</label>
            <input type="text" onChange={handleInputChange} className="form-control" name="filterSearch" />
        </div>

        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" onChange={handleCheckbox} />
            <label className="form-check-label" htmlFor="exampleCheck1">Alphabetical Sort</label>
        </div>
    </form>
);
}

export default Filter;