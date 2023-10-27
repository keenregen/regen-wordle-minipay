import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';
import { FaUsers } from 'react-icons/fa';
import styles from './index.module.scss';

interface Props {
  slug?: string;
  variant?: string;
  size?: 'small';
  text?: boolean;
  elevation?: number;
  style?: CSSProperties;
}

export default function Social(props: Props): JSX.Element {
  const socials = [
    {
      name: 'WhatsApp',
      icon: '/social/006-whatsapp.svg',
      action: (): void => {
        window.open(
          'whatsapp://send?text=' +
            `https://goregenway.netlify.app/${props.slug}`,
          '_blank'
        );
      },
    },
    {
      name: 'Linkedin',
      icon: '/social/001-linkedin.svg',
      action: (): void => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=https://goregenway.netlify.app/${props.slug}`,
          '_blank'
        );
      },
    },
    {
      name: 'facebook',
      icon: '/social/002-facebook.svg',
      action: (): void => {
        const url = `https://goregenway.netlify.app/${props.slug}`;
        const fb = window.open(
          'http://www.facebook.com/sharer.php?s=100&p[url]=' +
            encodeURIComponent(url)
        );
        fb?.focus();
      },
    },
    {
      name: 'twitter',
      message: 'takip et',
      icon: '/social/005-twitter.svg',
      action: (): void => {
        window.open(
          `https://twitter.com/share?url=https://goregenway.netlify.app/${props.slug}`,
          '_blank'
        );
      },
    },
  ];
  return (
    <WrapperComponent elevation={props.elevation} style={props.style}>
      <div className={styles.main_container}>
        <div className={styles.header}>
          <FaUsers fontSize="24px" />
          <h2 className="text-xl font-extrabold">SHARE THIS PROJECT</h2>
        </div>
        <div
          className={styles.content}
          style={{
            gridTemplateColumns:
              props.variant === 'row' ? 'repeat(4, 1fr)' : 'repeat(2, auto)',
            gridTemplateRows:
              props.variant === 'row' ? 'repeat(1, auto)' : 'repeat(2, auto)',
          }}
        >
          {socials.map((doc, index) => {
            return (
              <div className={styles.item} key={index} onClick={doc.action}>
                <Image
                  src={doc.icon}
                  alt={doc.name}
                  width={props.size === 'small' ? 60 : 80}
                  height={props.size === 'small' ? 60 : 80}
                />
              </div>
            );
          })}
        </div>
      </div>
    </WrapperComponent>
  );
}
interface Props {
  elevation?: number;
  children?: ReactNode;
  style?: CSSProperties;
}
const WrapperComponent = (props: Props) => {
  return props.elevation ? (
    <div
      style={{
        ...props.style,
        borderRadius: '5px',
        padding: '1em',
        backgroundColor: 'white',
        boxShadow: '0px 0px 5px 0px dimgray',
      }}
    >
      {props.children}
    </div>
  ) : (
    <div style={props.style}>{props.children}</div>
  );
};
