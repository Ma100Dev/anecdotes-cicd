import React from 'react';
import { connect } from 'react-redux';

const Notification = (props) => {
  const notification = props.content;
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };
  return (
    <>
      {
        notification ?
          <div style={style}>
            {notification}
          </div >
          : null
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return { content: state.notification.content };
};
const Connected = connect(mapStateToProps)(Notification);
export default Connected;