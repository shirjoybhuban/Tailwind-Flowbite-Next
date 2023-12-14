import AuthLayout from "components/layouts/AuthLayout";
import Layout from "components/layouts/Layout";
import {
  Button,
  Checkbox,
  Dropdown,
  Label,
  Radio,
  Select,
  Spinner,
  TextInput,
  Textarea,
  Tooltip,
} from "flowbite-react";
import { Inter } from "next/font/google";
import toast from "react-hot-toast";
import { BiAnchor, BiHelpCircle, BiHighlight } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HiCog,
  HiLogout,
  HiOutlineArrowRight,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { MdOutlineWarningAmber } from "react-icons/md";
const Test = () => {
  return (
    <>
      <div className="p-4">
        <h4 className="text-lg font-bold">Color</h4>
        <div className="flex gap-5">
          Primary
          <div className="h-12 w-12 rounded-sm bg-primary-500"></div>
          Secondary
          <div className="h-12 w-12 rounded-sm bg-secondary-900"></div>
          Ternary
          <div className="h-12 w-12 rounded-sm bg-ternary-500"></div>
        </div>
        <h4 className="text-lg font-bold">Menu</h4>
        <div className="mt-4 mb-5">
          <Dropdown
            label=""
            size="lg"
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="cursor-pointer">
                <GiHamburgerMenu className="w-7 h-7" />
              </span>
            )}
          >
            <Dropdown.Header>
              <span className="block text-sm font-semibold">Bonnie Green</span>
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
        <h4 className="text-lg font-bold">Tooltip/Hover/Popover</h4>
        <div className="mt-4 mb-5">
          <Tooltip
            content="Some couriers, such as Purolator, require a valid local phone number in order to process the quote and provide a rate. 1-800 numbers are not accepted."
            style="light"
            className="border-2 border-secondary-900 bg-secondary-50 md:w-1/5  "
            arrow={false}
          >
            <HiOutlineExclamationCircle className="w-5 h-5 text-secondary-700" />
          </Tooltip>
        </div>
        <h4 className="text-lg font-bold">Buttons</h4>
        <div className="flex flex-wrap items-start gap-2 mb-4">
          <Button size="xs" color="primary">
            Next Page
          </Button>
          <Button size="sm" color="primary">
            Next Page
          </Button>
          <Button size="md" color="primary">
            Next Page
          </Button>
          <Button size="lg" color="primary">
            Next Page
          </Button>
          <Button size="lg" color="primaryLow">
            Next Page
          </Button>
        </div>
        <div className="flex flex-wrap items-start gap-2 mb-4">
          <Button size="xs" color="secondary">
            Next Page
          </Button>
          <Button size="sm" color="secondary">
            Next Page
          </Button>
          <Button size="md" color="secondary">
            Next Page
          </Button>
          <Button size="lg" color="secondary">
            Next Page
          </Button>
          <Button size="lg" color="secondaryLow">
            Next Page
          </Button>
        </div>
        <div className="flex flex-wrap items-start gap-2 mb-4">
          <Button size="xs" color="ternary">
            Next Page
          </Button>
          <Button size="sm" color="ternary">
            Next Page
          </Button>
          <Button size="md" color="ternary">
            Next Page
          </Button>
          <Button size="lg" color="ternary">
            Next Page
          </Button>
        </div>

        <div className="flex flex-wrap items-start gap-2 mb-4">
          <Button outline size="xs" color="primary">
            Next Page
          </Button>
          <Button outline size="sm" color="primary">
            Next Page
          </Button>
          <Button outline size="md" color="primary">
            Next Page
          </Button>
          <Button outline size="lg" color="primary">
            Next Page
          </Button>
        </div>
        <div className="flex flex-wrap items-start gap-2 mb-4">
          <Button outline size="xs" color="secondary">
            Next Page
          </Button>
          <Button outline size="sm" color="secondary">
            Next Page
          </Button>
          <Button outline size="md" color="secondary">
            Next Page
          </Button>
          <Button outline size="lg" color="secondary">
            Next Page
          </Button>
        </div>
        <div className="flex flex-wrap items-start gap-2">
          <Button outline size="xs" color="ternary">
            Next Page
          </Button>
          <Button outline size="sm" color="ternary">
            Next Page
          </Button>
          <Button outline size="md" color="ternary">
            Next Page
          </Button>
          <Button outline size="lg" color="ternary">
            Next Page
          </Button>
        </div>
        <div className="flex flex-wrap items-start gap-2">
          <Button color="primary">
            Next
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="md" color="primary" isProcessing className="w-full">
            Click me!
          </Button>
          <Button color="primary" disabled>
            Back
          </Button>
        </div>

        <h4 className="text-lg font-bold">Forms</h4>
        <div className="max-w-md">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username4" color="failure" value="Your name" />
            </div>
            <TextInput
              id="username4"
              placeholder="Bonnie Green"
              required
              color="failure"
              helperText={
                <span className="font-medium text-xs mt-0">
                  <span>Oops!</span> Username already taken!
                </span>
              }
            />
          </div>
          <div className="mb-2 mt-3 block">
            <Label htmlFor="email3" value="Your email" />
          </div>
          <TextInput
            id="email3"
            type="email"
            placeholder="First Name"
            required
            className="focus:border-green-500 focus:ring-green-500 shadow-sm"
          />
          {/* <input
          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
          id="email3"
          type="email"
          placeholder="First Name"
          required=""></input> */}
          <Select id="countries" required className="mt-3">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
          <div className="flex items-center gap-2 mt-4">
            <Checkbox id="promotion" color={"green"} />
            <Label htmlFor="promotion">I want to get promotional offers</Label>
          </div>

          <div className="flex gap-2 my-10">
            <Button
              color="primary"
              onClick={() => {
                toast.success("Build Done");
              }}
            >
              Success Toast
            </Button>

            <Button
              color="failure"
              onClick={() => {
                toast.error("Build Failed");
              }}
            >
              Error Toast
            </Button>

            <Button
              onClick={() => {
                toast.custom(
                  <div className="flex items-center bg-yellow-400 text-white gap-2 rounded-lg p-2">
                    <MdOutlineWarningAmber fontSize={"25px"} />
                    <p>Some Thing Went Wrong</p>
                  </div>
                );
              }}
            >
              Custom Toast
            </Button>
          </div>
          <fieldset className="flex max-w-md flex-col gap-4">
            <legend className="mb-4">Choose your favorite country</legend>
            <div className="flex items-center gap-2">
              <Radio id="bd" name="countries" value="BD" />
              <Label htmlFor="bd">BD</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="united-state"
                name="countries"
                value="USA"
                className="text-primary-500"
                defaultChecked
              />
              <Label htmlFor="united-state">United States</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="germany"
                name="countries"
                value="Germany"
                className="text-primary-500"
              />
              <Label htmlFor="germany">Germany</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="china"
                name="countries"
                value="China"
                disabled
                className="text-primary-500"
              />
              <Label htmlFor="china" disabled>
                China (disabled)
              </Label>
            </div>
          </fieldset>
          <Textarea
            className="mt-5"
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
        </div>
        <Button>
          <Spinner aria-label="Spinner button example" size="lg" />
          <span className="pl-3">Loading...</span>
        </Button>
        <h4 className="text-lg font-bold">Autocomplete</h4>
      </div>
    </>
  );
};

export default Test;
