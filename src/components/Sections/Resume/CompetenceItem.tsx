import {FC, memo} from 'react';

import {CompetenceItem} from '../../../data/dataDef';

const CompetenceItem: FC<{item: CompetenceItem}> = memo(({item}) => {
  const {title, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
        </div>
      </div>
      {content}
    </div>
  );
});

CompetenceItem.displayName = 'TimelineItem';
export default CompetenceItem;
