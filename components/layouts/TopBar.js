import React from 'react';
import logo from '../../public/images/logo.svg';
import Image from 'next/image';
import { Button, Dropdown } from 'flowbite-react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiCog, HiLogout } from 'react-icons/hi';
import { BiAnchor, BiHelpCircle, BiHighlight } from 'react-icons/bi';

const TopBar = () => {
  return (
    <div className="absolute top-3 left-2/4 -translate-x-1/2 -translate-y-3 w-full md:w-[calc(100%-190px)] max-w-[1600px] mx-[auto] my-[0]">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="Ship Simple" height={91} width={190} />
        {/* <div className="flex gap-2">
        <Button size="md" color="secondary">
            Quick Quote
          </Button>
          <Button size="md" color="secondary">
            New Shipment
          </Button>
          <div>
            <Dropdown
              label=""
              size="lg"
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="cursor-pointer">
                  <GiHamburgerMenu className="w-10 h-10" />
                </span>
              )}>
              <Dropdown.Header>
                <span className="block text-sm font-semibold">
                  Bonnie Green
                </span>
                <span className="block truncate text-sm font-medium">
                  bonnie@flowbite.com
                </span>
                <div className="w-full flex justify-end text-secondary-800 text-lg cursor-pointer">
                  <BiHighlight />
                </div>
              </Dropdown.Header>
              <Dropdown.Item icon={HiCog}>Account Settings</Dropdown.Item>
              <Dropdown.Item icon={BiHelpCircle}>Help</Dropdown.Item>
              <Dropdown.Item icon={BiAnchor}>Shipping 101</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;
