import React, { Component } from "react";
import { connect } from "react-redux";
import { pick } from "lodash";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { getImageDetail } from "../../redux";

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
  componentDidMount() {
    this.props.getImageDetail();
  }

  render() {
    const { imageDetail, isLoading, isError } = this.props;

    return (
      <DetailStyle>
        {isError && <p>Error!</p>}
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

const mapStateToProps = state => {
  return pick(state, ["isLoading", "imageDetail", "isError"]);
};

const mapDispatchToProps = {
  getImageDetail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
