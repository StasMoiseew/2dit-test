import { useEffect, useState } from "react";
import { Product, Task1Accordion, Task3Block } from "../models";
import { fakeApi } from "../fakeApi";

export const useFakeApi = () => {
  const [task1Desc, setTask1Desc] = useState('');
  const [task1accordions, setTask1accordions] = useState<Task1Accordion[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [task3Blocks, setTask3Blocks] = useState<Task3Block[]>([]);

  useEffect(() => {
    // Представим, что здесь у нас запрос к API Wordpress:
    fakeApi.task1request()
      .then(response => {
        setTask1Desc(response);
      });
    fakeApi.task1accordionsRequest()
      .then(response => {
        setTask1accordions(response);
      })
    fakeApi.getProducts()
      .then(response => {
        setProducts(response);
      })
    fakeApi.getTask3Block()
      .then(response => {
        setTask3Blocks(response);
      })
  }, []);

  return {
    task1: {
      description: task1Desc,
      accordions: task1accordions,
    },
    task2: {
      products,
    },
    task3: {
      blocks: task3Blocks,
    }
  }
}