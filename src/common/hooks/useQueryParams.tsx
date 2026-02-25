import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { cleanQuery } from '../utils/cleanQuery';
import { useAppSelector } from '../../app/hooks/hooks';

type QueryParams = Record<string, any>;

export const useQueryParams = (params?: QueryParams) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = useAppSelector((store) => store.filter);
  /* ---------------- MERGE DEFAULT + PASS PARAMS ---------------- */
  const mergedParams = useMemo(() => {
    return cleanQuery({
      ...filterValue,
      ...params,
    });
  }, [params, filterValue]);

  /* ---------------- UPDATE URL ---------------- */
  const setQuery = (newParams: QueryParams) => {
    const updated = cleanQuery({
      ...mergedParams,
      ...newParams,
    });

    setSearchParams(updated);
  };

  /* ---------------- GET QUERY DATA ---------------- */
  const queryObject = useMemo(() => {
    const obj: QueryParams = {};

    searchParams.forEach((value, key) => {
      obj[key] = value;
    });

    return {
      ...filterValue,
      ...obj,
    };
  }, [searchParams, filterValue]);

  return {
    query: queryObject,
    setQuery,
  };
};
