import styles from './index.module.scss';
interface Props {
  title: string;
  subtitle?: string;
  darkTheme?: boolean;
}

export default function SectionHeader(props: Props): JSX.Element {
  return (
    <div
      className={`${styles.main_container} w-full flex flex-col items-center justify-center`}
    >
      <h2
        className={`sm:mb-4 md:mb-8 uppercase md:text-5xl text-center font-extrabold ${
          props.darkTheme ? 'text-black' : ''
        }`}
      >
        {props.title}
      </h2>
      {props.subtitle && (
        <h3
          className={`mb-4 md:!mb-12 text-lg md:text-xl text-center ${
            props.darkTheme ? 'text-black' : ''
          }`}
        >
          {props.subtitle}
        </h3>
      )}
    </div>
  );
}
