import { atom, useAtom } from 'jotai';

const axiosReponseData = atom<Array<any>>([]);
const loadingAxios = atom(false);
const erroAxios = atom(null);

const AxiosContext = () => {
  const [dataResponse, setDataResponse] = useAtom(axiosReponseData);
  const [loading, setLoading] = useAtom(loadingAxios);
  const [erro, setErro] = useAtom(erroAxios);

  return {
    axiosData: {
      dataResponse,
      setDataResponse,
      loading,
      setLoading,
      erro,
      setErro,
    },
  };
};

export default AxiosContext;
