import React, { useEffect } from 'react';
import { topics } from '../../../pages/api/topics';
import Chip from '@material-ui/core/Chip';

import { TopicsContainer, TopicTitle } from './styles';

export default function Topics() {
  const [values, setValues] = React.useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await topics();
      setValues(response.topics[0].children);
    }
    fetchData();
  }, []);

  return (
    <TopicsContainer>
      <TopicTitle>Browse by topic</TopicTitle>
      {Object.values(values).map(({ name }, i) => (
        <Chip
          key={i}
          label={name}
          component="a"
          href={`/topics/${name.toLowerCase()}`}
          clickable
          variant="outlined"
        />
      ))}
    </TopicsContainer>
  );
}
