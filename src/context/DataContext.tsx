import { atom, useAtom } from 'jotai';

const busStopList = atom([]);
const busStopOptions = atom([]);
const busStopSelelected = atom({});
const pickerStatus = atom(false);

const DataContext = () => {
  const [selectedStop, setSelectedStop] = useAtom(busStopSelelected);
  const [pickerOptions, setPickerOptions] = useAtom(busStopOptions);
  const [busList, setBusList] = useAtom(busStopList);
  const [pickerFilled, setPickerFilled] = useAtom(pickerStatus);

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
    },
  };
};

export default DataContext;
