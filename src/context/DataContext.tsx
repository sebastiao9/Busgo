import { atom, useAtom } from "jotai";

const busStopList = atom([]);
const busStopOptions = atom<any | any[]>([]);
const busStopSelelected = atom<any>({});
const pickerStatus = atom<boolean>(false);
const listStatus = atom<boolean>(false);
const selectedValueStop = atom<number>(0);

const DataContext = () => {
  const [selectedStop, setSelectedStop] = useAtom(busStopSelelected);
  const [pickerOptions, setPickerOptions] = useAtom(busStopOptions);
  const [busList, setBusList] = useAtom(busStopList);
  const [pickerFilled, setPickerFilled] = useAtom(pickerStatus);
  const [listFilled, setListFilled] = useAtom(listStatus);
  const [selectedValue, setSelectedValue] = useAtom(selectedValueStop);

  return {
    dataContext: {
      busList,
      setBusList,
      pickerOptions,
      setPickerOptions,
      selectedStop,
      setSelectedStop,
      pickerFilled,
      setPickerFilled,
      selectedValue,
      setSelectedValue,
      listFilled,
      setListFilled,
    },
  };
};

export default DataContext;
