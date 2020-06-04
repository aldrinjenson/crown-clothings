import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// // once we move the state to redux, then there's no need for local state and hence no need for a class component
// class Directory extends React.Component {
//    constructor() {
//       super();
//       this.state = {
//       }
//    }
//    render() {
//       return (
//          <div className="directory-menu">
//             {this.state.sections.map(({ id, ...otherSectionProps }) => (   //es6 easy short method
//                <MenuItem key={id} {...otherSectionProps} />
//             ))}
//          </div>
//       )
//    }
// }
// or
// {this.state.sections.map(({id, title, imageUrl, linkUrl, size })=>(
//     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />


const Directory = ({sections}) => (
   <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (   //es6 easy short method
         <MenuItem key={id} {...otherSectionProps} />
      ))}
   </div>
)

const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)