import {
  isFulfilled,
  isRejectedWithValue,
  type Middleware,
} from '@reduxjs/toolkit';
import { message } from 'antd';
import { closeModal } from '../features/modalSlice';

type RtkQueryMetaArg = {
  type?: 'query' | 'mutation';
  endpointName?: string;
  originalArgs?: unknown;
};

export const handleSuccessAndError: Middleware =
  (store) => (next) => (action) => {
    if (isFulfilled(action)) {
      const payload = action.payload as {
        message?: string;
      };
      const meta = action.meta?.arg as RtkQueryMetaArg;

      const successMessage =
        payload?.message || meta?.endpointName + ' success';

      if (meta?.type === 'mutation') {
        message.success(successMessage);
        store.dispatch(closeModal());
      }
    }

    /* ❌ ERROR */
    if (isRejectedWithValue(action)) {
      const payload = action.payload as {
        data?: { message?: string };
      };

      const errorMessage = payload?.data?.message || 'Something went wrong';
      console.log(payload);

      message.error(errorMessage);
    }

    return next(action);
  };
