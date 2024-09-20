"use server";

import { redirect } from "next/navigation";

export const updateCategory = ({ name, id }: any) => {
  const params = new URLSearchParams([["test", `${name}=${id}`]]);

  console.log(params);

  redirect(`/magaz?${params}`);
};

export const addFilters = ({ filters }: any) => {
  const data = "";

  redirect(`/magaz?${filters}`);
};
