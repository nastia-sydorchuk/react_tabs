import React from 'react';
import classNames from 'classnames';
import { Tab } from './Tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const clickHandler = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div className="tabs is-centered">
      <ul>
        {tabs.map((tab: Tab) => (
          <li key={tab.id}>
            <button
              type="button"
              className={classNames(
                'button', {
                  active: selectedTabId === tab.id,
                },
              )}
              onClick={() => clickHandler(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};