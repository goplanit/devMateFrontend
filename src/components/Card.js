import React from "react";
import { Grid, Text, Image } from "../elements/Index";

import { history } from "../redux/configureStore";

const Card = (props) => {
  const { image_url, name, post_id } = props;

  return (
    <Grid
      padding="16px"
      is_flex
      bg="#ffffff"
      margin="8px 0px"
      _onClick={() => {
        history.push(`/post/${post_id}`);
      }}
    >
      <Grid width="auto" margin="0px 8px 0px 0px">
        <Image src={image_url} size={85} />
      </Grid>
      <Grid>
        <Text>
          <b>{name}</b>님이 게시글에 댓글을 남겼습니다~!{" "}
        </Text>
      </Grid>
    </Grid>
  );
};

Card.defaultProps = {
  image_url: "http://via.placeholder.com/400x300",
};

export default Card;
