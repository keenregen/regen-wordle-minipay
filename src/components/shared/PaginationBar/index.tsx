import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface Props {
  numberOfItems: number;
  itemsInPage: number;
  onHandlePage: (page: number) => void;
}

export default function PaginationBar({
  numberOfItems,
  itemsInPage,
  onHandlePage,
}: Props) {
  const numberOfPages = Math.ceil(numberOfItems / itemsInPage);
  const [active, setActive] = useState(1);

  const handlePagination = (command: string | number) => {
    switch (command) {
      case 'first':
        setActive(1);
        onHandlePage(1);
        break;
      case 'prev':
        if (active > 1) {
          setActive((prev) => {
            onHandlePage(prev - 1);
            return prev - 1;
          });
        }
        break;

      case 'next':
        if (active < numberOfPages) {
          setActive((prev) => {
            onHandlePage(prev + 1);
            return prev + 1;
          });
        }
        break;

      case 'last':
        setActive(numberOfPages);
        onHandlePage(numberOfPages);

        break;
      default:
        if (typeof (command === 'number')) {
          setActive(command as number);
          onHandlePage(command as number);
        }
    }
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => handlePagination('first')} />
      <Pagination.Prev onClick={() => handlePagination('prev')} />
      <>
        {active > 2 && (
          <Pagination.Item onClick={() => handlePagination(1)}>
            {1}
          </Pagination.Item>
        )}
        {numberOfPages >= 4 && active > 3 && <Pagination.Ellipsis />}
        {active > 1 && (
          <Pagination.Item onClick={() => handlePagination(active - 1)}>
            {active - 1}
          </Pagination.Item>
        )}
        <Pagination.Item active onClick={() => handlePagination(active)}>
          {active}
        </Pagination.Item>
        {active < numberOfPages - 1 && (
          <Pagination.Item onClick={() => handlePagination(active + 1)}>
            {active + 1}
          </Pagination.Item>
        )}
        {numberOfPages >= 4 && active < numberOfPages - 2 && (
          <Pagination.Ellipsis />
        )}
        {active < numberOfPages && (
          <Pagination.Item
            active={active === numberOfPages}
            onClick={() => handlePagination(numberOfPages)}
          >
            {numberOfPages}
          </Pagination.Item>
        )}
      </>
      <Pagination.Next onClick={() => handlePagination('next')} />
      <Pagination.Last onClick={() => handlePagination('last')} />
    </Pagination>
  );
}
