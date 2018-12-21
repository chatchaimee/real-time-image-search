import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import withRoot from "../../withRoot";

const HomeStyle = styled.div`
  text-align: center;

  .btn {
    margin-left: 20px;
    margin-top: 25px;
  }

  .grid {
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  .grid-list {
    width: 800px;
  }

  .icon {
    color: rgba(255, 255, 255, 0.54);
  }
`;

class Home extends Component {
  state = {
    images: []
  };

  unsplashList = async () => {
    const images = await axios.get(
      "http://www.mocky.io/v2/5c1c9bc23100006000104100"
    );

    if (images.data.results.length > 0) {
      this.setState({
        images: images.data.results
      });
    }
  };

  handleClick = () => {
    this.unsplashList();
  };

  handleActionClick = id => {
    this.props.history.push(`/photos/${id}`);
  };

  render() {
    const { images } = this.state;

    return (
      <HomeStyle>
        <TextField
          label="Search"
          name="search"
          margin="normal"
          variant="outlined"
        />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          Search
        </Button>

        <div className="grid">
          <GridList cellHeight={180} className="grid-list">
            {images.map(image => (
              <GridListTile key={image.id}>
                <img src={image.urls.thumb} alt={image.description} />
                <GridListTileBar
                  title={image.description}
                  subtitle=""
                  actionIcon={
                    <IconButton
                      className="icon"
                      onClick={() => this.handleActionClick(image.id)}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </HomeStyle>
    );
  }
}

export default withRoot(Home);
