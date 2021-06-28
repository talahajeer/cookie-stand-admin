export default function CookieStandForm() {

    return (
        <form>
            <h2>Create Cookie Stand</h2>
            <div>
                <label>Location</label>
                <input type="text" placeholder="Cookie Stand Location" />
            </div>

                <label>Minimum Customers per Hour</label>
                <input type="number"/>
        
                <label >Maximum Customers per Hour</label>
                <input  type="number"/>
           
                <label >Average Cookies per Sale</label>
                <input type="number"/>

                <button type="submit">Create</button>
          
        </form>
    );
}