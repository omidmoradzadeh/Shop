import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-prev.styles.scss'

const CollectionPrev = ({title, items}) => {
 console.log(title);
 console.log(items);

    return (<div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'> 
            {
             items.filter((item , idx) => idx<4)
                    .map(({id, ...restOfProps}) => (<CollectionItem key={id} {...restOfProps} />))   
            }
        </div>
    </div>
    );
};

export default CollectionPrev;