import UserAvtar from "./UserAvtar";
import '../styles/DealDetail.scss';
import { useHistory } from "react-router-dom";

function DealDetail(props) {
    const { dealDetail } = props;
    let history = useHistory();

    return(
        <div className="Detail-container">
          <div className="Detail-header">
            <h1 className="Detail-title">{dealDetail.title || ''}</h1>
            <button className="Button-primary Detail-edit" onClick={() => history.push(`/add-edit/${dealDetail.key}`)}>Edit</button>
          </div>
          <div className="Detail-sub-container-spread">
            <div>
              <div>Price: {dealDetail.price || ''}</div>
              <div>Cause: {dealDetail.cause && dealDetail.cause.name}</div>
            </div>
            <div>
              <div>Deal Type: {dealDetail.dealType || ''}</div>
              <div>Available Quantity: {dealDetail.availableQuantity || ''}</div>
            </div>
            <div>
              <div>maker Percentage: {dealDetail.makerPercentage || ''}</div>
              <div>URL: {dealDetail.url && <a href={dealDetail.url}>link</a>}</div>
            </div>
          </div>
          <img className="Detail-media" src={dealDetail.media && dealDetail.media[0]} alt={dealDetail.title || ''}></img>
          <p>{dealDetail.description || ''}</p>
          {dealDetail.user && dealDetail.user.avatar &&
            <UserAvtar user={dealDetail.user} />
          }
        </div>
    )
}

export default DealDetail;
