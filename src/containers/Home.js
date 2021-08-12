import { useState, useEffect } from 'react';
import DealDetail from '../components/DealDetail';
import SearchDeal from '../components/SearchDeal';
import DealListItem from '../components/DealListItem';
import '../styles/Home.scss';

function Home() {
    const [deals, updateDeals] = useState([]);
    const [dealDetail, updateDealDetail] = useState({});
    const [selectedDeal, updateSelectedDeal] = useState('');
    const [searchText, updateSearch] = useState([]);

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

    function searchDeals() {
        fetch(`https://bakesaleforgood.com/api/deals?searchTerm=${searchText}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length) {
            console.log('search --->', data);
            updateDeals(data);
            }
        });
    };

    function clearSearchText() {
        updateSearch('');
        getDealListData();
    }

    return (
        <div className="App-container">
            <div className="List-container">
                <SearchDeal
                searchText={searchText}
                updateSearch={updateSearch}
                searchDeals={searchDeals}
                clearSearchText={clearSearchText} />
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
