"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  }, []);

  const [username, setUsername] = useState("");
  const router = useRouter();
  const handlerInputUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const [password, setPassword] = useState("");

  const handlerInputPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    await fetch("http://localhost:3001/api/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (response: any) => {
      const data = await response.json();
      router.push("/admin-page");
      if (response.ok) {
        localStorage.setItem("token", JSON.stringify(data.token));
      } else {
        console.log("Ошибка авторизации");
      }
    });
  };
  const formStyle: any = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <main>
      <h1>Войти</h1>
      <form style={formStyle} onSubmit={(e: any) => onSubmitHandler(e)}>
        <input
          type="text"
          onChange={(e: any) => handlerInputUsername(e)}
          value={username}
        />
        <input
          type="text"
          onChange={(e: any) => handlerInputPassword(e)}
          value={password}
        />
        <button>Отправить</button>
      </form>
    </main>
  );
}
