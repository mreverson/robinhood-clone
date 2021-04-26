import React from 'react';
import '../css/StatsRow.css';
import StockSVG from '../images/stock.svg';
import { db } from '../firebase';

export default function StatsRow(props) {

    const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

    const buyStock = () => {
        console.log("Buy: ", props.name);
        db
        .collection('myStocks')
        .where("ticker", '==', props.name)
        .get()
        .then((querySnapshot) => {
            if(!querySnapshot.empty){
                //Update Record

                querySnapshot.forEach(function(doc) {
                    db
                    .collection('myStocks')
                    .doc(doc.id)
                    .update({
                        shares: doc.data().shares+=1
                    })
                });
            } else {
                //Add Record
                db
                .collection('myStocks')
                .add({
                    ticker: props.name,
                    shares: 1
                })
                
            }
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="row" onClick={buyStock}>
            <div className="row__intro">
                <h1>{props?.name}</h1>
                <p>{props.shares && (props.shares + " shares")}</p>
            </div>
            <div className="row__chart">
                <img src={StockSVG} height={16} />
            </div>
            <div className="row__numbers">
                <p className="row__price">{props.price}</p>

                {
                    percentage > 0 ? 
                    <p className="row__percentage__pos">{Number(percentage).toFixed(2)}%</p> : 
                    <p className="row__percentage__neg">{Number(percentage).toFixed(2)}%</p> 
                }
                
            </div>
        </div>
    )
}
