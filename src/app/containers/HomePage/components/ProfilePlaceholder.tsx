import React from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';

export function ProfilePlaceholder() {
  return (
    <Segment raised>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line length="short" />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length="medium" />
          <Placeholder.Line length="short" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  );
}
