// creating a hoc

import ButtonClick from "./component/hoc/button-click";
import ButtonHover from "./component/hoc/button-hover";

const LearningHoc = () => {
  return (
    <>
      <h1>my hoc component</h1>

      <ButtonHover />
      <ButtonClick />
    </>
  );
};

export default LearningHoc;
