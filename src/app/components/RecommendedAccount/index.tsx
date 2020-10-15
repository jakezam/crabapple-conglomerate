/**
 *
 * RecommendedAccount
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Comment, Rating } from 'semantic-ui-react';

export function RecommendedAccount(props) {
  const {
    userId,
    firstName,
    lastName,
    isProvider,
    providerInfo,
    profileTag,
  } = props.account;

  let displayName = firstName + ' ' + lastName;
  let metaTag = <div />;
  let tag = profileTag;
  if (isProvider) {
    displayName = providerInfo.companyName;
    metaTag = (
      <Comment.Metadata>
        <span>{providerInfo.category}</span>
      </Comment.Metadata>
    );
    tag = (
      <div style={{ display: 'flex' }}>
        <Rating
          defaultRating={providerInfo.rating}
          maxRating={5}
          disabled
          size="tiny"
          style={{ marginTop: '0.15rem', marginRight: '4px' }}
        />
        <p>{providerInfo.rating} out of 5</p>
      </div>
    );
  }

  return (
    <Body>
      <Comment.Group minimal size="tiny">
        <Comment>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
          />
          <Comment.Content>
            <Comment.Author as="a">{displayName}</Comment.Author>
            {/* {metaTag} */}
            <Comment.Text style={{ display: 'flex', color: 'rgba(0,0,0,.57)' }}>
              {tag}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Body>
  );
}

const Body = styled.div`
  padding: 10px 0;
`;
