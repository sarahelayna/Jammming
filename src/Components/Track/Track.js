import React from 'react';
import './Track.css';

class Track extends React.Component {
  /*renderAction() {
    if (isRemoval === 'true') {
      <a className="Track-action"> - </a>;
    } else {
      <a className="Track-action" onClick={this.addTrack}> + </a>;
    }
  }*/


  render() {
    return (
       <div className="Track">
        <div className="Track-information">
         <h3> {this.props.track.name} </h3>
          <p> {this.props.track.artist} | {this.props.track.album} </p>
        </div>
        <a className="Track-action"> + or - will go here </a>
      </div>
    )
  }
}


export default Track;
