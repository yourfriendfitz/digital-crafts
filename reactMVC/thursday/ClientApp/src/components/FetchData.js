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

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { posts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderPostsTable(posts) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
            <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      FetchData.renderPostsTable(this.state.posts)
    );

    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://www.cequens.com/hubfs/API.png"
            alt="Card image cap"
          />
          <CardBody className="text-center">
            <CardTitle>
              <TitleContainer>
                <Title>JSON Placeholder</Title>
              </TitleContainer>
            </CardTitle>
            <CardSubtitle>
              This component demonstrates fetching data from the server.
            </CardSubtitle>
            <CardText>{contents}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    this.setState({ posts: data, loading: false });
  }
}
