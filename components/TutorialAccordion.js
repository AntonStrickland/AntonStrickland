import React, {Component} from 'react'
import {Accordion, Icon} from 'semantic-ui-react'

class TutorialAccordion extends Component {

  state = {
    activeIndex: 0,
    videoUrl: ""
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = (activeIndex == index) ? -1 : index

    this.setState({activeIndex: newIndex, videoUrl: ""})
  }

  render() {
    return (
      <Accordion>
        <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #1 - Getting Started
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0}>
        <video controls width="640" height="360">
          <source src={"https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep1.mp4"} type="video/mp4" />
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

        <Accordion.Title active={this.state.activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #3 - Primitive Variable Types
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 2}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep3.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #4 - Getting User Input
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 3}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep4.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #5 - Arithmetic Operators
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 4}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep5.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #6 - If/Else, Comparison Operators
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 5}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep6.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #7 - Switch/Case, Ternary Operator
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 6}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep7.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 7} index={7} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #8 - While Loops and For Loops
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 7}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep8.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 8} index={8} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #9 - Arrays and C-Strings
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 8}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep9.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 9} index={9} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #10 - Functions
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 9}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep10.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 10} index={10} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #11 - Parameters, Pass by Reference, Default Arguments
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 10}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep11.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 11} index={11} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #12 - Static, Overload, Templates, Inline
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 11}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep12.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

        <Accordion.Title active={this.state.activeIndex === 12} index={12} onClick={this.handleClick}>
          <Icon name='dropdown' />
          #13 - Structs, Classes, Constructors, Destructors
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 12}>
        <video controls width="640" height="360">
          <source src="https://cpp-tutorials.s3.us-east-2.amazonaws.com/ep13.mp4" type="video/mp4" />
        </video>
        </Accordion.Content>

      </Accordion>
    )
  }
}

export default TutorialAccordion;
