import React from 'react';
import ShopData from './shop.data';
import CollectionPrev from '../../components/collection-prev/collection-prev.component';
class ShopPage extends React.Component{

    constructor(){
        super();

        this.state = { collections : ShopData};
    }
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id , ...otherPartOfCollection}) => (<CollectionPrev key={id} {...otherPartOfCollection}  />))
                }
            </div>
        );
    }

}

export default ShopPage;