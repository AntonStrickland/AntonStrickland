import React, {Component} from 'react'
import {Accordion, Icon} from 'semantic-ui-react'

class TutorialAccordion extends Component {

  state = {
    activeIndex: 0,
    videoUrl: "https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep1.mp4"
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = (activeIndex == index) ? -1 : index


    this.setState({activeIndex: newIndex})
  }

  render() {
    return (
      <Accordion>
        <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #1 - Setting up the IDE
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0}>
        <video controls width="640" height="360">
          <source src={this.state.videoUrl} type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #2 - Hello, World
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 1}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep2.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

      </Accordion>
    )
  }
}

export default TutorialAccordion;
