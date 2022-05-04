import { atom, useAtom } from 'jotai';

const busStopList = atom([]);
const busStopOptions = atom([]);
const busStopSelelected = atom({});

const DataContext = () => {
  const [busList, setBusList] = useAtom(busStopList);
  const [pickerOptions, setPickerOptions] = useAtom(busStopOptions);
  const [selectedStop, setSelectedStop] = useAtom(busStopSelelected);

  return {
    dataContext: {
      busList,
      setBusList,
      pickerOptions,
      setPickerOptions,
      selectedStop,
      setSelectedStop,
    },
  };
};

export default DataContext;
