import AnchorLinkDefault from 'react-anchor-link-smooth-scroll';

const AnchorLink = (AnchorLinkDefault as any)?.default ?? AnchorLinkDefault;
import { SelectedPage } from '../../shared/types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <AnchorLink
      className={`nav-link ${selectedPage === lowerCasePage ? 'active' : ''}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
