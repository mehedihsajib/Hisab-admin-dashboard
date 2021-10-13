import React from 'react';
import userData from '../assets/data/userData';
import Charts from '../components/Charts';
import FeaturedItem from '../components/FeaturedItem';
import Widget from '../components/Widget';

function Home() {
    return (
        <>
            <FeaturedItem />
            <Charts data={userData} title="User Analytics" dataKey="Active User" />
            <Widget />
        </>
    );
}

export default Home;
