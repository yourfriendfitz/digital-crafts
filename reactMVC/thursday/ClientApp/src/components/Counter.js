import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
`;
const TitleContainer = styled.div`
  background-color: gray;
  display: grid;
  justify-content: center;
  border-radius: 8px;
`;

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter = () => {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  decrementCounter = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://www.lform.com/_assets/packages/wp/assets/uploaded/2017/08/lform_javascript_blog_header_image-1600x1080.jpg"
            alt="Card image cap"
          />
          <CardBody className="text-center">
            <CardTitle>
              <TitleContainer>
                <Title>Counter</Title>
              </TitleContainer>
            </CardTitle>
            <CardSubtitle>
              This is a simple example of a React component.
            </CardSubtitle>
            <CardText>
              Current count: <strong>{this.state.currentCount}</strong>
            </CardText>
            <Button
              className="btn btn-primary m-1"
              onClick={this.incrementCounter}
            >
              Increment
            </Button>
            <Button className="btn btn-primary" onClick={this.decrementCounter}>
              Decrement
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
