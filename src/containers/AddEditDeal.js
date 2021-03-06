import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import '../styles/AddEditDeal.scss';

function AddEditDeal() {
    const [dealDetail, updateDealDetail] = useState({});
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if(id && id !== '0') {
            // fetching data using id/key for updating 
            fetch(`https://bakesaleforgood.com/api/deals/${id}`)
            .then(response => response.json())
            .then(data => {
            if (data) {
                updateDealDetail(data);
            }
        });
        }
    }, [id]);
    
    return(
        <div className="App-container Add-edit">
            { (id && id !== '0') ?
            <div className="Add-edit-container">
                <h1>Edit Deal</h1>
                <h6>Key: {dealDetail.key || ''}</h6>
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
            <div className="Add-edit-container">
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
