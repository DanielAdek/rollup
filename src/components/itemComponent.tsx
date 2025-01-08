import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { itemFetch } from '../redux/slice/itemSlice';

const Item: React.FC = () => {
  const { value, status, error } = useSelector((state: RootState) => state.item);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {value && value?.data && <p>{value?.data?.message}</p>}
    </div>
  );
};

export default Item;
