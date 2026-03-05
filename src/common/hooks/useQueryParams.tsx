import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { useAppSelector } from '../../app/hooks/hooks';
import { cleanQuery } from '../utils/cleanQuery';

type QueryParams = Record<string, any>;

export const useQueryParams = <T extends QueryParams = QueryParams>() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = useAppSelector((store) => store.filter);

  const setQuery = (newParams: Partial<T>) => {
    setSearchParams((prev) => {
      const prevObj: Record<string, string> = {};
      prev.forEach((value, key) => {
        prevObj[key] = value;
      });

      const updated = cleanQuery({
        ...prevObj,
        ...newParams,
      });

      return updated;
    });
  };

  /* ---------------- GET QUERY DATA ---------------- */
  const queryObject = useMemo(() => {
    const obj: Partial<T> = {};

    // searchParams.forEach((value, key) => {
    //   obj[key] = value;
    // });
    searchParams.forEach((value, key) => {
      (obj as any)[key] = value;
    });

    return {
      ...filterValue,
      ...obj,
    } as unknown as T;
  }, [searchParams, filterValue]);

  return {
    query: queryObject,
    setQuery,
  };
};
