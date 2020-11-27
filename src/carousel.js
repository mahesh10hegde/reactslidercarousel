import React from 'react';
import { connect } from 'react-redux';
import {itemsFetchData,itemsHasErrored,itemsIsLoading,itemsFetchDataSuccess,handlerNext,handlerPrev} from './actions';
import ReactCSSTransitionGroup from '../node_modules/react-addons-css-transition-group';
class Carousel extends React.Component {
constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchData('https://api.github.com/users/octocat/followers');
  }
  
  render(){
    let index = this.props.current,
    isnext = this.props.isNext,
    srcList = [];
    this.props.items.forEach((val,ind) => {
      if(ind>=index){
        srcList.push(val);
      }
    });
      return(
        <div className="carousel">
        <ReactCSSTransitionGroup
           transitionName={{
           enter: isnext ? 'enter-next' : 'enter-prev',
           enterActive: 'enter-active',
           leave: 'leave',
           leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
         }}
          >
            <div className="carousel_slide" key={index}>
              {srcList.map((user,i)=>{
                return (
                  <img alt="" src={user.avatar_url} key={i}></img>
                )

              })}
            </div>
          </ReactCSSTransitionGroup>
          <button className="carousel_control carousel_control__prev" onClick={this.props.handlerPrev}><span></span></button>
          <button className="carousel_control carousel_control__next" onClick={this.props.handlerNext}><span></span></button>
         
         </div>
      )
  }
}
const mapStateToProps = (state) => {
    return {
        items: state.carouselReducer.items,
        hasErrored: state.carouselReducer.hasErrored,
        isLoading: state.carouselReducer.isLoading,
        isNext: state.carouselReducer.isNext,
        current: state.carouselReducer.current
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        handlerNext: () => dispatch(handlerNext()),
        handlerPrev: () => dispatch(handlerPrev())
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Carousel);
