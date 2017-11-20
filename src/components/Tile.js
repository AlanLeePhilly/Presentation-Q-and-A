import React from 'react';

const Tile = props => {
  let button1, button2, tilePrint, className;

  // handleClick = props.handleClick(props.id)
if (props.id%2 === 1){         //is a question
  if (props.id < props.selectedId) {  //older than selector
    className="old-question"
    button1 =  <i className='fa fa-minus-square fa-2x gray ' aria-hidden='true'></i>
    button2 = null
    tilePrint = <h5>{props.body}</h5>
  } else if (props.id === props.selectedId) {
    className="current-question"
    button1 =  <i onClick={props.handleClick} className='fa fa-minus-square fa-2x green ' aria-hidden='true' ></i>
    button2 = null
    tilePrint = <h5 onClick={props.handleClick}>{props.body}</h5>
  } else if (props.id === props.selectedId + 1){
    className="next-question"
    button1 =  <i onClick={props.handleClick} className='fa fa-plus-square fa-2x gray ' aria-hidden='true'></i>
    button2 = null
    tilePrint =   <h5 onClick={props.handleClick}>{props.body}</h5>
  } else {
    className="hidden-question"
    button1 =  <i onClick={props.handleClick} className='fa fa-minus-square fa-2x gray ' aria-hidden='true'></i>
    button2 = null
    tilePrint =   <h5 onClick={props.handleClick}>{props.body}</h5>

  }
} else {
  if (props.id < props.selectedId + 1) {
    className="old-answer"
    button1 = null
    button2 = <div className="button expand old-button">next question</div>
    tilePrint = <p>{props.body}</p>

  } else if (props.id === props.selectedId + 1 ) {
    className="current-answer"
    button1 = null
    button2 = <div onClick={props.handleClick} className="button expand ">next question</div>
    tilePrint =  <p>{props.body}</p>
  } else {
    className="hidden-answer"
    button1 = null
    button2 = null
    tilePrint = <p>{props.body}</p>

  }
}


if (props.id === 26 && props.selectedId != 25) {
  className = "hidden-answer"
} else if (props.id === 26){
  className = "fader3"
  tilePrint = props.body
  button1 = null
  button2 = null

}

  return(
    <div data-toggler data-animate="fade-in fade-out" className={className}>
      <div className="fader row">
        <div className="columns small-1">{button1}</div>
        <div className="columns small-11">{tilePrint}</div>
      </div>
      <div className="fader2 row">{button2}</div>
    </div>
  )
}

export default Tile;
