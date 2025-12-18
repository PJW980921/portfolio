export interface InfiniteGetGuestBookProps {
  content: GetGuestBookProps[];
  nextCursor: number;
  size: number;
}

export interface GetGuestBookProps {
  id: number;
  nickname: string;
  description: string;
  createdAt: string;
}

export interface ExecuteGuestBookProps {
  nickname: string;
  description: string;
  password: string;
}
