import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../firebase';
import StatsRow from '../Components/StatsRow';
import '../css/Stats.css';

const TOKEN = 'bv459bn48v6tcp17hk20';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

function Stats() {
    const [stockData, setStockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);
    const [portValue, setPortValue] = useState();


    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = [];

            snapshot.docs.map((doc) => {
                promises.push(getStockData(doc.data().ticker)
                    .then(res => {
                        tempData.push({
                            id: doc.id,
                            data: doc.data(),
                            info: res.data
                        })
                    })
                )
            })

            Promise.all(promises).then(() => {
                setMyStocks(tempData)
            });
        })
    }

    const portfolioValue = () => {
        var total = [];
        myStocks.forEach((stock) => {
            total.push(stock.data.shares * stock.info.c);
        })

        var totalValue = Number(total.reduce((a, b) => a + b, 0)).toFixed(2)

        setPortValue(totalValue);
    }

    const getStockData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error) => {
                console.error("ERR: ", error.message)
            });
    };

    useEffect(() => {

        getMyStocks();
        portfolioValue();

        let tempData = []
        const stockList = ['AAPL', 'MSFT' , 'TSLA', 'FB', 'BABA', 'UBER', 'DIS', 'SBUX'];

        let promises = [];
        stockList.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res) => {
                    tempData.push({
                        name: stock,
                        ...res.data
                    });
                })
            )
        });

        Promise.all(promises).then(() => {
            setStockData(tempData);
            console.log(tempData);
        })
        
    }, [])

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks: {portValue}</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {myStocks.map((stock) => (
                            <StatsRow 
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                shares={stock.data.shares}
                                price={stock.info.c}
                            />
                        ))}
                    </div>
                </div>
                <div className="stats__header stats__list">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {stockData.map((stock) => (
                            <StatsRow 
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;
