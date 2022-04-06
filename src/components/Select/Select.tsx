import ReactSelect, { Props } from "react-select";

import * as S from "./Select.styles";

export function Select(props: Props) {
  return (
    <ReactSelect {...props} styles={S.SelectStyles} />
  );
}
