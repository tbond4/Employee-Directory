function Filter({handleInputChange}){
return(
    <form>
        <div className="form-group">
            <label htmlFor="filterSearch">Search by Name</label>
            <input type="text" onChange={handleInputChange} className="form-control" name="filterSearch" />
        </div>
    </form>
);
}

export default Filter;