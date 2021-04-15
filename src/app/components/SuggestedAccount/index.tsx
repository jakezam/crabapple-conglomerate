/**
 *
 * SuggestedAccount
 *
 */
import React from 'react';
import styled from 'styled-components';
import { Comment, Rating } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

interface Props {
  userId: string;
  username: string;
  accountTag: string;
  rating: number;
}

export function SuggestedAccount(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const { userId, username, accountTag, rating } = props;

  let content = (
    <Comment.Content>
      <CardUsername style={{ paddingTop: '12px' }}>{username}</CardUsername>
      <CardText>{accountTag}</CardText>
    </Comment.Content>
  );
  if (rating > 0) {
    content = (
      <Comment.Content>
        <CardUsername>{username}</CardUsername>
        <CardText>{accountTag}</CardText>
        <Comment.Text>
          <Rating
            rating={rating}
            maxRating={5}
            disabled
            size="tiny"
            style={{ marginTop: '0.10rem', marginRight: '4px' }}
          />
        </Comment.Text>
      </Comment.Content>
    );
  }

  return (
    <CardBody
      onClick={() => {
        dispatch(push(`/profile/${userId}`));
      }}
    >
      <Comment.Group size="small">
        <Comment>
          <CardImage src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
          {content}
        </Comment>
      </Comment.Group>
    </CardBody>
  );
}

const CardImage = styled.img`
  display: block;
  width: 4em;
  height: auto;
  float: left;
  margin: 0.2em 13px 0 0;
`;

const CardUsername = styled.div`
  font-size: 1.1em;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 700;
`;

const CardText = styled.div`
  margin: 0.2em 0 0.2em;
  font-size: 1em;
  word-wrap: break-word;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.3;
`;

const CardBody = styled.div`
  width: 250px;
  height: 75px;
  padding: 8px 12px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
  cursor: pointer;
  margin-right: 60px;
  margin-bottom: 15px;
`;
