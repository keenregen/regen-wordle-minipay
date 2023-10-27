import { ChangeEventHandler, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import { debounce } from 'lodash';
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';

const alfa_Slab_One = Alfa_Slab_One({
  weight: ['400'],
  subsets: ['latin'],
});
interface Props {
  onHandleSearch: (val: string) => void;
  headerText: string;
  bannerImage: string;
  animativeHeader?: boolean;
  searchBarText?: string;
}

export default function SearchBar({
  onHandleSearch,
  headerText,
  bannerImage,
  animativeHeader,
  searchBarText,
}: Props) {
  const [search, setSearch] = useState('');
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    onHandleSearch(search);
  }, [onHandleSearch, search]);

  return (
    <div className={styles.main_container}>
      <Image src={bannerImage} alt="banner" fill></Image>
      <div className={styles.header}>
        {animativeHeader ? (
          <h1
            className={`${styles.header_text} ${alfa_Slab_One.className} text-4xl md:text-5xl lg:text-8xl`}
          >
            {headerText}
          </h1>
        ) : (
          <h1
            className={`${styles.header_text2} ${alfa_Slab_One.className} text-4xl md:text-5xl lg:text-8xl`}
          >
            {headerText}
          </h1>
        )}
      </div>
      <div className={styles.wrapper}>
        <Form.Group
          className="mb-3 w-full font-extrabold text-center"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            style={{ height: '60px', borderRadius: '50px', padding: '0 2em' }}
            type="text"
            value={search}
            placeholder={searchBarText ? searchBarText : 'Search'}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
    </div>
  );
}
