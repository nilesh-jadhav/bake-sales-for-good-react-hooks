import { useParams, useHistory } from "react-router-dom";

function AddEditDeal() {
    let { id } = useParams();
    let history = useHistory();
    
    return(
        <div className="App-container">
            { (id && id !== '0') ?
            <div>
                <h1>Edit Deal</h1>
                <h6>ID: {id}</h6>
                <div>
                    Add UI for edit Deal
                </div>
                <div>Do the API call on Update button click, which will update the existing Deal and then redirect 
                    to Home page which will show updated list of deals
                </div>
                <div>
                    For now I am redirecting it to home page directly
                </div>
                <button className="Button-primary" onClick={() => history.push('/')}>Update</button> 
            </div>
            :
            <div>
                <h1>Add a new Deal</h1>
                <div>
                    Add UI for Adding new Deal
                </div>
                <div>
                    Do the API call on Save button click, which will add new Deal and then redirect to Home 
                    page which will show updated list of deals
                </div>
                <div>
                    For now I am redirecting it to home page directly
                </div>
                <button className="Button-primary" onClick={() => history.push('/')}>Save</button> 
            </div>
            } 
        </div>
    )
}

export default AddEditDeal;
