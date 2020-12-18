import React, { Component } from "react";
import Navigation from "../components/Navigation";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardColumns,
  CardSubtitle,
  CardBody,
  Container,
} from "reactstrap";
import { BsFillHeartFill } from "react-icons/bs";
import axios from "axios";

class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies")
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      });
  }

  render() {
    const movies = this.state;
    return (
      <div>
        <Navigation />
        <Container>
          <CardColumns>
            {movies.data.map((movie, index) => {
              return (
                <div key={index}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={movie.image}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{movie.title}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        <small className="text-muted">{movie.showTime}</small>
                        <BsFillHeartFill className="ml-3 ml-3 mr-1" />
                        {movie.like}
                      </CardSubtitle>
                      <Button color="primary" size="sm" href={movie.id}>
                        Detail
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default MoviesPage;
