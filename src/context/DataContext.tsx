import { atom, useAtom } from "jotai";

const busStopList = atom([]);
const busStopOptions = atom<any | any[]>([]);
const busStopSelelected = atom({ label: "", value: 0, lat: 0, lng: 0 });
const pickerStatus = atom(false);
const selectedValueStop = atom<number>(0);

const DataContext = () => {
  const [selectedStop, setSelectedStop] = useAtom(busStopSelelected);
  const [pickerOptions, setPickerOptions] = useAtom(busStopOptions);
  const [busList, setBusList] = useAtom(busStopList);
  const [pickerFilled, setPickerFilled] = useAtom(pickerStatus);
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
    },
  };
};

export default DataContext;
