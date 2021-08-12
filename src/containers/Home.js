import { useState, useEffect } from 'react';
import DealListItem from '../components/DealListItem';
import '../styles/Home.scss';

function Home() {
    const [deals, updateDeals] = useState([]);

    useEffect(() => {
        getDealListData();
    }, []);

    function getDealListData() {
        fetch("https://bakesaleforgood.com/api/deals")
        .then(response => response.json())
        .then(data => {
            if (data && data.length) {
            console.log('useEffect --->', data);
            updateDeals(data);
            }
        });
    }

    return (
        <div className="App-container">
            <div className="List-container">
                {deals.map(deal =>
                <DealListItem
                    key={deal.key}
                    deal={deal} />
                )}
            </div>
            <div className="Detail-container">Detail</div>
        </div>
    );
}

export default Home;
