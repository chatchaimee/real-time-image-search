import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const DetailStyle = styled.div`
  align-items: center;

  .card-container {
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  .card {
    max-width: 800px;
  }

  .media {
    height: 300px;
  }
`;

class Detail extends Component {
  state = {
    imageDetail: [],
    isLoading: true
  };

  componentDidMount() {
    this.getImageDetail();
  }

  getImageDetail = async () => {
    const images = await axios.get(
      "http://www.mocky.io/v2/5c1c9c133100001000104101"
    );

    if (!!images) {
      this.setState({
        imageDetail: images.data,
        isLoading: false
      });
    }
  };

  render() {
    const { imageDetail, isLoading } = this.state;

    return (
      <DetailStyle>
        {!isLoading && (
          <div className="card-container">
            <Card className="card">
              <CardActionArea>
                <CardMedia className="media" image={imageDetail.urls.regular} />
                <CardContent>
                  <Typography component="p">
                    {imageDetail.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )}
      </DetailStyle>
    );
  }
}

export default Detail;
