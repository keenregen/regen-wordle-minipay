import { DropdownItem } from '@src/models/dropdownItem';
import { Navbar, Container, Dropdown } from 'react-bootstrap';

interface Props {
  title: string;
  buttonLabel?: string;
  dropdownItems?: DropdownItem[];
}

export default function TableHeader({
  title,
  buttonLabel,
  dropdownItems,
}: Props) {
  return (
    <Navbar bg="dark">
      <Container className="h-8 flex justify-between items-center">
        <h4 className="text-white mb-0 text-md">{title}</h4>
        {dropdownItems && (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
              {buttonLabel ?? 'Select Item'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownItems.map((item) => {
                return (
                  <Dropdown.Item key={item.name} href="#/action-1">
                    {item.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Container>
    </Navbar>
  );
}
