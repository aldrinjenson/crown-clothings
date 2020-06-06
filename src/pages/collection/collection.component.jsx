// import React from 'react'
// import './collection.styles.scss'
// import collectionItemComponent from '../../components/collection-item/collection-item.component'
// import { connect } from 'react-redux'
// import { selectCollection } from '../../redux/shop/shop.selectors'

// const CollectionPage = ({collection}) => {
//    console.log(collection)
//    return (
//       <div className='collection'>
//          <h2>COLLECTION PAGE</h2>
//       </div>
//    )
// }

// const mapStateToProps = (state, ownProps) => ({
//    collection: selectCollection(ownProps.match.params.collectionId)(state)
//    // unlike other selectors, this one needs the part of the url for performing actions, hence this wayis necessary
// })

// export default  connect(mapStateToProps)(CollectionPage)

import React from 'react'
import './collection.styles.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ collection }) => {
   const { title, items } = collection
   return (
      <div className='collection-page'>
         <h2 className='title' >{title}</h2>
         <div className="items">
            {items.map(item=><CollectionItem key={item.id} item={item} />)}
         </div>
      </div>
   )
}

const mapStateToProps = (state, ownProps) => ({
   // unlike other selectors, this one needs the part of the url for performing actions, hence this wayis necessary
   collection: selectCollection(ownProps.match.params.collectionId)(state)
   // Note: here the selectCollection if first called with the state object and then once the input selector need is initialized inside, then the collectionId is passed into it for the final selector function to return only the needed collection item
   // the above method and also the method below in connect function is called currying
})

export default connect(mapStateToProps)(CollectionPage)
