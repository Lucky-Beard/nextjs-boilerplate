import Link from 'next/link';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ClickAwayListener } from '@mui/material';
import BurgerMenu from '@/components/burger-menu';
import Image from 'next/image';
import ArrowIcon from '@/assets/icons/Arrow Right.svg';
import { MenuItems } from './menu-items';
import DownIcon from '@/components/icons/Down';
import { usePathname } from 'next/navigation';
// import ButtonPrimary from '@/components/buttons/primary';
import { MenuItem } from '@/types/menu';

interface Props {
  toggleMobileMenu: (isOpen: boolean) => void;
}

const Menu: React.FC<Props> = ({ toggleMobileMenu }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const currentRoute = usePathname();
  const router = useRouter();
  const s = useStyles(styles);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setActiveDropdown(null);
    toggleMobileMenu(false);
    setOpen(false);
  };

  const toggleDropdownMenu = (
    index: number,
    e: React.SyntheticEvent,
    hasDropdown: boolean = false
  ) => {
    if (hasDropdown) {
      if (index === activeDropdown) {
        setActiveDropdown(null);
        toggleMobileMenu(false);
      } else {
        setActiveDropdown(index);
        toggleMobileMenu(true);
      }

      e.preventDefault();
    }

    if (!hasDropdown) {
      handleClickAway();
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <nav className={`utility-navigation ${s('nav-wrapper')}`}>
        <div className={`${s('nav')} ${open ? s('show-mobi-nav') : ''}`}>
          {MenuItems.map((item, index) => {
            const activeDropdownMenuClass = item.dropdown?.menu.filter(
              (item: MenuItem) => {
                return item.url == currentRoute;
              }
            );
            const activeClass =
              currentRoute === item.url ||
              (item.dropdown &&
                activeDropdownMenuClass &&
                activeDropdownMenuClass?.length > 0)
                ? s('active')
                : '';
            const openClass = activeDropdown === index ? s('is-open') : '';

            return (
              <React.Fragment key={`menu-item-${index}`}>
                <a
                  href={item.url}
                  className={`${s('link')} ${activeClass} ${openClass}`}
                  onClick={(e) =>
                    toggleDropdownMenu(index, e, item.dropdown ? true : false)
                  }
                >
                  {item.name}{' '}
                  {item.dropdown && item?.dropdown.menu.length > 0 && (
                    <DownIcon />
                  )}
                </a>
                {item.dropdown && item?.dropdown.menu.length > 0 && (
                  <div
                    className={`${s('nav-dropdown')} ${
                      activeDropdown === index ? s('is-open') : ''
                    }`}
                  >
                    <div
                      className={s('burger-menu')}
                      onClick={(e) =>
                        toggleDropdownMenu(
                          index,
                          e,
                          item.dropdown ? true : false
                        )
                      }
                    >
                      <BurgerMenu open={activeDropdown === index} />
                    </div>

                    <div className={`container ${s('dropdown-container')}`}>
                      <div className={s('intro-column')}>
                        <h4
                          className={`title-m title-md-s ${s(
                            'dropdown-title'
                          )}`}
                        >
                          {item.dropdown.title}
                        </h4>
                        <p className={`body-xs ${s('dropdown-intro')}`}>
                          {item.dropdown.intro}
                        </p>
                        {/* {item.dropdown.overviewButton && (
                          <ButtonPrimary
                            color="secondary"
                            href={item.dropdown.overviewButton.url}
                            onClick={handleClickAway}
                          >
                            {item.dropdown.overviewButton.name}
                            <ArrowRightIcon />
                          </ButtonPrimary>
                        )} */}
                      </div>
                      <span className={s('dropdown-divider')} />
                      <div className={`utility-button ${s('dropdown-menu')}`}>
                        {item.dropdown.menu.map((menu, menuIndex) => {
                          const target = menu.target ? menu.target : '_self';

                          return (
                            <Link
                              onClick={handleClickAway}
                              key={`dropdown-menu-${menuIndex}`}
                              href={menu.url}
                              target={
                                menu.name === 'Australia' ? '_blank' : target
                              }
                            >
                              {menu.name}
                              <Image
                                src={ArrowIcon}
                                alt="->"
                                width={24}
                                height={24}
                              />
                            </Link>
                          );
                        })}
                      </div>
                      {item.dropdown.extraContent && item.dropdown.extraContent}
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <BurgerMenu
          className={s('mobile-burger-menu-main')}
          open={open}
          toggleOpen={toggleOpen}
        />
      </nav>
    </ClickAwayListener>
  );
};

export default Menu;
