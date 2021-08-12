import '../styles/DealListItem.scss';

function DealListItem(props) {
    const { deal = {}, selectedDeal, getDealDetails = () => {} } = props;
    return(
        <div className={`List-item ${deal.key === selectedDeal ? 'selected' : ''}`} onClick={() => getDealDetails(deal.key)}>
            <img width="70px" height="60px" src={deal.media[0]} alt=""/>
            <div className="List-item-content">
                <h6>{deal.title}</h6>
                <div className="List-item-sub-content">
                    <div className="Small-text">{deal.price}</div>
                    <div className="Small-text">{deal.cause.name}</div>
                </div>
            </div>
        </div>
    )
}

export default DealListItem;
