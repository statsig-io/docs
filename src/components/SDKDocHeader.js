import React from 'react';
import { SDKDocTOCHeaderAsString } from './SDKDocTOCHeader';
import AskAIAboutSDK from './AskAIAboutSDK';

export default function SDKDocHeader({ sdkType }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: SDKDocTOCHeaderAsString() }} />
      <AskAIAboutSDK sdkType={sdkType} />
    </div>
  );
}
