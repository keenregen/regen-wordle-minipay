'use client';
import styles from './index.module.scss';
import * as PushSDK from '@pushprotocol/restapi';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { ENV } from '@pushprotocol/uiweb';
import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';
import SectionHeader from '@src/components/shared/SectionHeader';

export default function News() {
  const [notifications, setNotifications] = useState([]);
  let provider;
  let signer;

  if (typeof window !== 'undefined') {
    if ((window as any).ethereum) {
      provider = new ethers.providers.Web3Provider((window as any).ethereum);
      signer = provider.getSigner();
    }
  }

  useEffect(() => {
    const notifications = async () => {
      const notifs = await PushSDK.user.getFeeds({
        user: 'eip155:80001:0xb12347B5A90453f464374e698F8840710466a9CA',
        env: ENV.STAGING,
      });
      setNotifications(notifs);
    };
    notifications();
  }, []);

  return (
    <div className={styles.main_container}>
      <SectionHeader
        title="RegenWise News"
        subtitle="A Place Where You Could Follow News About Regen and RegenWise Project"
      />
      <div>
        {notifications.map((oneNotification, i) => {
          const {
            cta,
            title,
            message,
            app,
            icon,
            image,
            url,
            blockchain,
            notification,
          } = oneNotification;

          return (
            <NotificationItem
              key={i} // any unique id
              notificationTitle={title}
              notificationBody={message}
              cta={cta}
              app={app}
              icon={icon}
              image={image}
              url={url}
              theme={'Theme'}
              chainName={blockchain as chainNameType} // if using Typescript
            />
          );
        })}
      </div>
    </div>
  );
}