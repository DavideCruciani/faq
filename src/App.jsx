import Faq from "./components/Faq";

import Star from "./assets/images/icon-star.svg";
import Minus from "./assets/images/icon-minus.svg";
import Plus from "./assets/images/icon-plus.svg";

function App() {
  return (
    <>
      <div className="bg-[#f9f0ff] h-[100vh] w-[100vw]">
        <div className="bg-desktop h-[33vh] w-[100vw] bg-no-repeat bg-cover absolute z-0"></div>
        <div className="h-[100vh] w-[100vw] absolute grid place-content-center p-6">
          <Faq starIcon={Star} minusIcon={Minus} plusIcon={Plus} />
        </div>
      </div>
    </>
  );
}

export default App;
