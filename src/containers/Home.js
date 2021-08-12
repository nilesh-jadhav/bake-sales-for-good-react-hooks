import { useState, useEffect } from 'react';
import DealDetail from '../components/DealDetail';
import DealListItem from '../components/DealListItem';
import '../styles/Home.scss';

function Home() {
    const [deals, updateDeals] = useState([]);
    const [dealDetail, updateDealDetail] = useState({});
    const [selectedDeal, updateSelectedDeal] = useState('');

    useEffect(() => {
        getDealListData();
    }, []);

    useEffect(() => {
        if (deals.length) {
            deals[0].key && getDealDetailsById(deals[0].key);
        }
    }, [deals]);

    function getDealDetails(id) {
        id && getDealDetailsById(id);
    };

    function getDealDetailsById(id) {
        fetch(`https://bakesaleforgood.com/api/deals/${id}`)
            .then(response => response.json())
            .then(data => {
            if (data) {
                console.log('useEffect 2 --->', data);
                updateDealDetail(data);
                updateSelectedDeal(id);
            }
        });
    };

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
                    deal={deal}
                    selectedDeal={selectedDeal}
                    getDealDetails={getDealDetails} />
                )}
            </div>
            <DealDetail dealDetail={dealDetail} />
        </div>
    );
}

export default Home;
