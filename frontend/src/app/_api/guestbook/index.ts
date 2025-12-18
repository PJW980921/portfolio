import { ExecuteGuestBookProps, InfiniteGetGuestBookProps } from './type';
import api from '../axios/axiosInstance';

const getGuestBookList = async (
  lastPostId: number,
  size: number
): Promise<InfiniteGetGuestBookProps[]> => {
  const response = await api.get(
    `guestbook/api/list/search?&lastPostId=${lastPostId}&size=${size}`
  );
  return response.data;
};

const executeGuestBook = async (
  data: ExecuteGuestBookProps
): Promise<ExecuteGuestBookProps> => {
  const response = await api.post('guestbook/api/write', data);
  return response.data;
};

export { getGuestBookList, executeGuestBook };
