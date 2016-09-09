import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ListItem
        leftAvatar={<Avatar src="https://lh5.googleusercontent.com/--NpXExobqfc/AAAAAAAAAAI/AAAAAAAAA9A/rJmu_EPyr4c/photo.jpg" />}
      >{this.props.message}</ListItem>
    );
  }
}

export default Message;
