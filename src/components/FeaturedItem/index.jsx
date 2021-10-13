import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import Item from './Item';

function FeaturedItem() {
    return (
        <div className="featured">
            <div className="featured__content">
                <Item
                    title="Revanue"
                    dollar="$2,415"
                    rate="-11.4"
                    icon={<FaArrowDown />}
                    iconClass="featured__item-icon--negative"
                    text="Compare to last month"
                />
                <Item
                    title="Sales"
                    dollar="$4,415"
                    rate="-1.4"
                    icon={<FaArrowDown />}
                    iconClass="featured__item-icon--negative"
                    text="Compare to last month"
                />
                <Item
                    title="Cost"
                    dollar="$2,225"
                    rate="+2.4"
                    icon={<FaArrowUp />}
                    iconClass="featured__item-icon--positive"
                    text="Compare to last month"
                />
            </div>
        </div>
    );
}

export default FeaturedItem;
