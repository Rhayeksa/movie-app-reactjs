import React, { Component } from "react";
import Navigation from "../components/Navigation";
import {
  Card,
  CardImg,
  Row,
  Col,
  Container,
  CardTitle,
  Table,
} from "reactstrap";
import { BsFillHeartFill } from "react-icons/bs";

class MovieDetailPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Card className="p-4">
            <Row xs="3">
              <Col></Col>
              <Col>
                <CardImg
                  className="mb-3"
                  src="http://lorempixel.com/640/480/people"
                />
              </Col>
              <Col></Col>
            </Row>
            <CardTitle tag="h3" style={{ textAlign: "center" }}>
              Handcrafted Metal Table
              {/* {this.props.title} */}
              <BsFillHeartFill color="red" className="ml-3 mr-1" />
              1000
              {/* {this.props.like} */}
            </CardTitle>
            <Row xs="2">
              <Col style={{ textAlign: "center" }}>
                <Table borderless>
                  <tr>
                    <th scope="row">Title</th>
                    <td>:</td>
                    <td align="left">Handcrafted Metal Table</td>
                    {/* <td>{this.props.title}</td> */}
                  </tr>
                  <tr>
                    <th scope="row">Show Time</th>
                    <td>:</td>
                    <td align="left">2020-03-15T22:46:30.711Z</td>
                    {/* <td>{this.props.showTime}</td> */}
                  </tr>
                  <tr>
                    <th scope="row">Like</th>
                    <td>:</td>
                    <td align="left">1000</td>
                    {/* <td>{this.props.like}</td> */}
                  </tr>
                </Table>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default MovieDetailPage;
