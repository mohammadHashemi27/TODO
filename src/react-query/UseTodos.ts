import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  page: number;
  pageSize: number;
}

const fetchTodos = async ({ page, pageSize }: Props) => {
  const res = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/todos",
    {
      params: {
        _start: (page - 1) * pageSize,
        _limit: pageSize,
      },
    }
  );
  return res.data;
};

export const useTodos = (page: number, pageSize: number) => {
  return useQuery<Post[]>({
    queryKey: ["todos", page, pageSize],
    queryFn: () => fetchTodos({ page, pageSize }),
    staleTime: 1000 * 60, 
  });
};
