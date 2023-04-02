import Button from "../components/Button";
import { GoBell, GoCloudDownload } from "react-icons/go";
function ButtonPage() {


  const handleClick = () => {
    console.log("Click!");
  };
  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          <GoBell /> Primary
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoCloudDownload className="mr-1" />
          Primary rounded
        </Button>
      </div>
      <div>
        <Button outline secondary>
          Outline secondary
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
