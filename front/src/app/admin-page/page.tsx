"use client";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import WithAuth from "../components/WithAuth/WithAuth";
import axios from "axios";
import Image from "next/image";
const AdminPage = () => {
  // const [name, setName] = useState("");
  const [file, setFile] = useState<[]>([]);
  const test = useRef<any>(null);
  const [cat, setCat]: any = useState(undefined);

  const parentCategoriesList: any = [];
  const subCategoriesList: any = [];

  const parentCategories = (e: any, el: any) => {
    if (!parentCategoriesList.includes(el.id)) {
      parentCategoriesList.push(el.id);
    }
    if (e.target.checked === false) {
      parentCategoriesList.map((elem: any, index: any) => {
        if (el.id === elem) {
          parentCategoriesList.splice(index);
        }
      });
    }
  };

  const subCategories = (e: any, el: any) => {
    if (!subCategoriesList.includes(el.id)) {
      subCategoriesList.push(el.id);
    }
    if (e.target.checked === false) {
      subCategoriesList.map((elem: any, index: any) => {
        if (el.id === elem) {
          subCategoriesList.splice(index);
        }
      });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res: any) => res.json())
      .then((data: any) => setCat(data.data));
  }, []);

  const onSubmitForm = async (e: any) => {
    e.preventDefault();

    const t = new FormData(test.current);

    const photos = Array.from(file);

    t.append("parentCategories", parentCategoriesList);
    t.append("subCategories", subCategoriesList);

    photos.map((el: any) => {
      t.append("file", el);
    });

    console.log(t.getAll("file"));

    await axios.post("http://localhost:3001/api/add-product", t, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <form ref={test} onSubmit={(e: any) => onSubmitForm(e)}>
        <input name="title" />
        <input name="description" />
        <input type="number" name="price" />
        <input name="author" />
        {/* категория */}
        {/* <input value={name} onChange={(e) => handlerInput(e)} type="text" /> */}
        <input
          onChange={(e: any) => setFile(e.target.files)}
          type="file"
          accept="image/png, image/jpeg"
          multiple
        />

        <ul>
          {cat &&
            cat.map((elem: any) => (
              <li key={elem.id}>
                <input
                  onClick={(e) => parentCategories(e, elem)}
                  type="checkbox"
                  id="scales"
                  name="scales"
                />
                <label>
                  <span> {elem.name}</span>
                </label>
                {elem.subcategory.map((subcategory: any) => (
                  <div style={{ marginLeft: "20px" }} key={subcategory.id}>
                    <input
                      onClick={(e) => subCategories(e, subcategory)}
                      type="checkbox"
                    />
                    <label>
                      <span> {subcategory.name}</span>
                    </label>
                  </div>
                ))}
              </li>
            ))}
        </ul>

        <button>Отправить</button>
      </form>
      <Image
        width={"100"}
        height={100}
        src="/products/rr.jpg"
        alt="dsf"
      ></Image>
    </div>
  );
};

export default WithAuth(AdminPage);
