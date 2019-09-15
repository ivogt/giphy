import React from 'react';
import { ViewSubscriber, VIEW_OPTIONS, ANIMATE_OPTIONS } from '../../store';
import './ViewSwitcher.scss';

export default () => {
  return (
    <ViewSubscriber>
      {([{ view, animate }], { setView, setAnimate }) => (
        <div className="switcher">
          Display:
          <select defaultValue={view} onChange={e => setView(e.target.value)}>
            {VIEW_OPTIONS.map(([option, display]) => (
              <option key={option} value={option}>
                {display}
              </option>
            ))}
          </select>{' '}
          Animation:
          <select
            defaultValue={animate}
            onChange={e => setAnimate(e.target.value)}
          >
            {ANIMATE_OPTIONS.map(([option, display]) => (
              <option key={option} value={option}>
                {display}
              </option>
            ))}
          </select>
        </div>
      )}
    </ViewSubscriber>
  );
};
