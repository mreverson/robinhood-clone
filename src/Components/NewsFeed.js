import React, {useState, useEffect} from 'react';
import LineGraph from '../Components/LineGraph';
import Timeline from '../Components/Timeline';
import Chip from '@material-ui/core/Chip';
import {Avatar} from '@material-ui/core';
import { db } from '../firebase';
import '../css/NewsFeed.css';

const TOKEN = 'bv3ubkf48v6tcp17bo4g';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

function NewsFeed() {
 
    const [popularTopics, setTopics] = useState([
        'Technology',
        'Top Movers',
        'Upcoming Earnings',
        'Crypto',
        'Cannabis',
        'Healthcare Supplies',
        'Index ETFs',
        'Technology',
        'China',
        'Pharma',
    ]);

    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$114,656</h1>
                        <p>+$44.63 (+0.04%) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph />
                        <Timeline />
                    </div>
                </div>
                <div className="newsfeed__buying__section">
                    <h2> Buying Power</h2>
                    <h2> $4.11</h2>
                </div>
                <div className="newsfeed__market__section">
                    <div className="newsfeed__market__box">
                        <p>Markets Closed</p>
                        <h1>Happy Thanksgiving</h1>
                    </div>
                </div>
                <div className="newsfeed__popularlists__section">
                    <div className="newsfeed__popularlists__intro">
                        <h1>Popular Lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed__popularlists__badges">
                        {popularTopics.map((topic) => (
                            <Chip 
                                className="topic__badge"
                                variant="outlined"
                                label={topic}
                                avatar={<Avatar src={`https://avatars.dicebear.com/api/human/${topic}.svg`} />}
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default NewsFeed;
