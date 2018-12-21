import React, { Component } from "react";
import { connect } from "react-redux";
import { pick } from "lodash";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import withRoot from "../../withRoot";
import { getImageList } from "../../redux";

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
  handleClick = () => {
    this.props.getImageList();
  };

  handleActionClick = id => {
    this.props.history.push(`/photos/${id}`);
  };

  render() {
    const { imageLists, isLoadImageListError, isImageListLoading } = this.props;

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

        {isLoadImageListError && <p>Error!</p>}
        {!isImageListLoading && (
          <div className="grid">
            <GridList cellHeight={180} className="grid-list">
              {imageLists !== undefined &&
                imageLists.results.map(image => (
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
        )}
      </HomeStyle>
    );
  }
}

const mapStateToProps = state => {
  return pick(state, [
    "imageLists",
    "isLoadImageListError",
    "isImageListLoading"
  ]);
};

const mapDispatchToProps = {
  getImageList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(Home));
