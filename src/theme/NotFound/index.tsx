import React, { useEffect } from 'react';
import NotFound from '@theme-original/NotFound';
import type NotFoundType from '@theme/NotFound';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NotFoundType>;

export default function NotFoundWrapper(props: Props): JSX.Element {
  return (
    <>
      <NotFound {...props} />
    </>
  );
}
