import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Player} from '..';

const mp3 = [
  'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/blocSonic/Flex_Vector/Born_Ready/Flex_Vector_-_Born_Ready.mp3',
];

storiesOf('components/Player', module)
  .add('Default', () => {
    return <Player src={mp3[0]} autoPlay />
  });
